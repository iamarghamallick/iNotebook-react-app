import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const host = 'http://localhost:5000';
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial);

    // Get all notes
    const getNotes = async () => {
        // API call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'appication/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxYjM1MzgwYWUyOWJhMGM1YzZjNTMwIn0sImlhdCI6MTY3OTUwNDcyMn0.BTDLC43qL0A96lF1xoPxjjdzVJnrbcrumUKM3SWDTuM'
            }
        })

        const json = await response.json();
        // console.log(json);
        setNotes(json);
    }

    // Add a Note
    const addNote = async (title, description, tag) => {
        // TODO: API Call
        // API Call 
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxYjM1MzgwYWUyOWJhMGM1YzZjNTMwIn0sImlhdCI6MTY3OTUwNDcyMn0.BTDLC43qL0A96lF1xoPxjjdzVJnrbcrumUKM3SWDTuM"
            },
            body: JSON.stringify({ title, description, tag })
        });

        const json = await response.json();
        console.log(json);


        console.log("Adding a new note")
        const note = {
            "_id": "641de450d4ea7b0f6714ea50",
            "user": "641b35380ae29ba0c5c6c530",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-03-24T17:56:32.938Z",
            "__v": 0
        };
        setNotes(notes.concat(note));
        console.log(note);
    }

    // Delete note
    const deleteNote = async (id) => {
        // API call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'appication/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxYjM1MzgwYWUyOWJhMGM1YzZjNTMwIn0sImlhdCI6MTY3OTUwNDcyMn0.BTDLC43qL0A96lF1xoPxjjdzVJnrbcrumUKM3SWDTuM'
            }
        })
        const json = response.json();
        console.log(json);

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
            headers: {
                'Content-Type': 'appication/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxYjM1MzgwYWUyOWJhMGM1YzZjNTMwIn0sImlhdCI6MTY3OTUwNDcyMn0.BTDLC43qL0A96lF1xoPxjjdzVJnrbcrumUKM3SWDTuM'
            },
            body: JSON.stringify({ title, description, tag }),
        })

        const json = await response.json();
        console.log(json);

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