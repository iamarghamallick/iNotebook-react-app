import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const host = 'http://192.168.29.211:5000';
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial);

    // Get all notes
    const getNotes = async () => {
        // API call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers : {
                'Content-Type' : 'appication/json',
                'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxYjM1MzgwYWUyOWJhMGM1YzZjNTMwIn0sImlhdCI6MTY3OTUwNDcyMn0.BTDLC43qL0A96lF1xoPxjjdzVJnrbcrumUKM3SWDTuM'
            }
        })

        const json = await response.json();
        console.log(json);

        setNotes(json);
    }

    // Add note
    const addNote = async (title, description, tag) => {
        // API call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers : {
                'Content-Type' : 'appication/json',
                'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxZGMxNWQ3ZDlkNzFiOWJjOWQ5N2Y2In0sImlhdCI6MTY3OTY3MTc2M30.u8pMVxdtZWEuSdUz48fm9whVR4HvWdKImxgzQHTQh7c'
            },
            body : JSON.stringify({title, description, tag}),
        })
        const json = response.json();
        console.log(json);

        // Logic to add a new note
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
    const deleteNote = (id) => {
        console.log(`Deleting note with id ${id}`);
        const newNotes = notes.filter((notes) => {
            return notes._id !== id
        })
        setNotes(newNotes);
    }

    // Edit note
    const editNote = async (id, title, description, tag) => {
        // API call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'POST',
            headers : {
                'Content-Type' : 'appication/json',
                'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxZGMxNWQ3ZDlkNzFiOWJjOWQ5N2Y2In0sImlhdCI6MTY3OTY3MTc2M30.u8pMVxdtZWEuSdUz48fm9whVR4HvWdKImxgzQHTQh7c'
            },
            body : JSON.stringify({title, description, tag}),
        })

        // Logic to edit a note
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
        }
    }
    return (
        <NoteContext.Provider value={{ notes, getNotes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;