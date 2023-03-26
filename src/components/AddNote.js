import React, { useContext, useState } from 'react';
import noteContext from '../context/notes/noteContext';

const AddNote = (props) => {
    const context = useContext(noteContext);
    const { addNote } = context;
    const [note, setNote] = useState({ title: "", description: "", tag: "" });
    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" });
        props.showAlert("Added Successfully", "success");
    }
    const handleChange = (e) => {
        e.preventDefault();
        setNote({ ...note, [e.target.name]: e.target.value });
    }
    return (
        <div className='container my-3'>
            <h2>Add Note</h2>
            <form className='my-3'>
                <div className='d-flex justify-content-between'>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control mx-1" id="title" name='title' value={note.title} aria-describedby="emailHelp" onChange={handleChange} minLength={5} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="tag">Tag</label>
                        <input type="text" className="form-control mx-1" id="tag" name='tag' value={note.tag} aria-describedby="emailHelp" onChange={handleChange} />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={handleChange} minLength={5} required/>
                </div>
                <button disabled={note.title.length <= 5 || note.description.length <= 5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>
        </div>
    )
}

export default AddNote