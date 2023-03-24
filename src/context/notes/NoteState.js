import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "641b35790ae29hba0c5c6c534",
            "user": "641b35380ae29ba0c5c6c530",
            "title": "mytitle",
            "description": "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur optio, sit minima delectus odit ea expedita quo, conse",
            "tag": "personal",
            "date": "2023-03-22T17:06:01.632Z",
            "__v": 0
        },
        {
            "_id": "641b35f790ae29ba0yc5c6c534",
            "user": "641b35380ae29ba0c5c6c530",
            "title": "mytitle",
            "description": "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur optio, sit minima delectus odit ea expedita quo, conse...",
            "tag": "personal",
            "date": "2023-03-22T17:06:01.632Z",
            "__v": 0
        },
        {
            "_id": "641b357d90ae29bsa0c5c6c534",
            "user": "641b35380ae29ba0c5c6c530",
            "title": "mytitle",
            "description": "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur optio, sit minima delectus odit ea expedita quo, conse...",
            "tag": "personal",
            "date": "2023-03-22T17:06:01.632Z",
            "__v": 0
        },
        {
            "_id": "641b35s790ae29bsa0c5c6c534",
            "user": "641b35380ae29ba0c5c6c530",
            "title": "mytitle",
            "description": "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur optio, sit minima delectus odit ea expedita quo, conse...",
            "tag": "personal",
            "date": "2023-03-22T17:06:01.632Z",
            "__v": 0
        },
        {
            "_id": "641b35790aaae29ba0c5c6c534",
            "user": "641b35380ae29ba0c5c6c530",
            "title": "mytitle",
            "description": "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur optio, sit minima delectus odit ea expedita quo, conse...",
            "tag": "personal",
            "date": "2023-03-22T17:06:01.632Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(notesInitial);

    // Add note
    const addNote = (title, description, tag)=>{
        let note = {
            "_id": "641b35790aaae29ba0c5c46c53a4",
            "user": "641b35380ae29ba0c5c6c530",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-03-22T17:06:01.632Z",
            "__v": 0
        };
        setNotes(notes.concat(note));
    }

    // Delete note

    // Edit note
    return (
        <NoteContext.Provider value={{notes, addNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;