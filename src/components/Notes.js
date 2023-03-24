import React, { useContext } from 'react';
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';

const Notes = () => {
    const context = useContext(noteContext);
    const { notes, setNotes } = context;
    return (
        <div className='container my-3'>
            <h2>Your Note</h2>
            <div className='row my-3'>
                {notes.map((note) => {
                    return <NoteItem note={note} />
                })}
            </div>
        </div>
    )
}

export default Notes