import React, {useState} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
import CreateArea from './CreateArea';


function App(){
    return (
        <div>
            <Header />
            <CreateArea />
            {notes.map(content =>
                    (<Note 
                        key = {content.id}
                        title = {content.title}
                        content = {content.content}
                    />)
            )}
            <Footer />
        </div>
    );
};


export default App;