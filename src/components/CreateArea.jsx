import React from "react";

function CreateArea() {
    const [note, setNoteContent] = useState({
        tile: "",
        content: ""
    });

    const [notesList, updateNoteList] = useState([]);


    function AddNote(event){
        const {name, value} = event.target;

        setNoteContent(prev => {
            return{
                ...prev,
                [name] : value
            }
        });
    }
    return (
        <div>
        <form>
            <input name="title" placeholder="Title" value={note.tile}/>
            <textarea name="content" placeholder="Take a note..." rows="3" value={note.content} />
            <button>Add</button>
        </form>
        </div>
    );
}

export default CreateArea;
