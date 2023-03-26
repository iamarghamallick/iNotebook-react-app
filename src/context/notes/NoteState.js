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
                'auth-token': localStorage.getItem('token')
            }
        })

        const json = await response.json();
        // console.log(json);
        setNotes(json);
    }

    // Add a Note
    const addNote = async (title, description, tag) => {
        // API Call 
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag })
        });

        const note = await response.json();
        setNotes(notes.concat(note));
    }

    // Delete note
    const deleteNote = async (id) => {
        // API call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'appication/json',
                'auth-token': localStorage.getItem('token')
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
        console.log(id);
        console.log(title);
        // API call ================================== Not working properly (to be fixed) ========
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'appication/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({title, description, tag})
        })

        const updatedNote = await response.json();
        console.log(updatedNote);

        // Logic to edit a note in the client side
        const newNotes = JSON.parse(JSON.stringify(notes))
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
        }
        setNotes(newNotes);
    }
    return (
        <NoteContext.Provider value={{ notes, getNotes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;