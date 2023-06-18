import React, {useState} from "react";

function CreateArea(props) {
    const [note, setNoteContent] = useState({
        title: "",
        content: ""
    });

    function AddNote(event){
        const {name, value} = event.target;

        setNoteContent(prev => {
            return{
                ...prev,
                [name] : value
            }
        });
    }

    function createNote(event){
        props.whenAdded(note)
        setNoteContent({
            title: "",
            content: "" 
        })
        event.preventDefault();
    }

    return (
        <div>
        <form>
            <input onChange={AddNote} name="title" placeholder="Title" value={note.title}/>
            <textarea onChange={AddNote} name="content" placeholder="Take a note..." rows="3" value={note.content} />
            <button onClick={createNote}>Add</button>
        </form>
        </div>
    );
}

export default CreateArea;
