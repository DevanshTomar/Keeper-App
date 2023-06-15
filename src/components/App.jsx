import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";


function App(){
    return (
        <div>
            <Header />
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