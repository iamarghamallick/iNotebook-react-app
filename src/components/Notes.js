import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import noteContext from '../context/notes/noteContext';
import AddNote from './AddNote';
import NoteItem from './NoteItem';

const Notes = (props) => {
    let nevigate = useNavigate();
    const {showAlert} = props;
    const context = useContext(noteContext);
    const { notes, getNotes, editNote } = context;
    const [note, setNote] = useState({ id:"", etitle: "", edescription: "", etag: "" });
    useEffect(() => {
        if(localStorage.getItem('token')) {
            getNotes();
        } else {
            nevigate('/login');
        }
        // eslint-disable-next-line
    }, [])
    const ref = useRef(null)
    const refClose = useRef(null)

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag});
    }
    const handleClick = (e) => {
        e.preventDefault();
        editNote(note.id, note.etitle, note.edescription, note.etag);
        refClose.current.click();
        props.showAlert("Updated successfully", "success");
    }
    const handleChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    }

    return (
        <>
            <AddNote showAlert={showAlert}/>
            <button ref={ref} type="button" className="btn btn-primary d-none" data-toggle="modal" data-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Update Note</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className='my-3'>
                                <div className="form-group">
                                    <label htmlFor="title">Title</label>
                                    <input type="text" className="form-control mx-1" id="etitle" name='etitle' value={note.etitle} aria-describedby="emailHelp" onChange={handleChange} minLength={5} required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Description</label>
                                    <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={handleChange} minLength={5} required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="tag">Tag</label>
                                    <input type="text" className="form-control mx-1" id="etag" name='etag' value={note.etag} aria-describedby="emailHelp" onChange={handleChange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button disabled={note.etitle.length <= 5 || note.edescription.length <= 5} type="submit" className="btn btn-primary" onClick={handleClick}>Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container my-3'>
                <h2>Your Notes</h2>
                <div className='container row my-3'>
                    {notes.length === 0 && "No notes to display"}
                    {notes.map((note) => {
                        return <NoteItem key={note._id} note={note} updateNote={updateNote} showAlert={showAlert} />
                    })}
                </div>
            </div>
        </>
    )
}

export default Notes