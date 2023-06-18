import React, {useState} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from './CreateArea';


function App(){

    const [notesList, updateNoteList] = useState([]);

    function addNote(newNote){
        updateNoteList(prev => {
            return [...prev, newNote];
        })
    }

    function deleteNote(id){
        updateNoteList(prev => {
            return prev.filter((item, index) => {
                return index !== id;
            })
        })
    }

    return (
        <div>
            <Header />
            <CreateArea 
                whenAdded = {addNote}
            />
            {notesList.map((content, index) =>{
                return <Note 
                    key = {index}
                    id = {index}
                    title = {content.title}
                    content = {content.content}
                    delete = {deleteNote}
                />
            })}
            <Footer />
        </div>
    );
};


export default App;