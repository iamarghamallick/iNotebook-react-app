import React, { useContext, useState } from 'react';
import noteContext from '../context/notes/noteContext';

const AddNote = () => {
    const context = useContext(noteContext);
    const { addNote } = context;
    const [note, setNote] = useState({ title: "", description: "", tag: "" });
    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
    }
    const handleChange = (e) => {
        e.preventDefault();
        setNote({ ...note, [e.target.name]: [e.target.value] });
    }
    return (
        <div className='container my-3'>
            <h2>Add Note</h2>
            <form className='my-3'>
                <div className='d-flex justify-content-between mx-3'>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="tag">Tag</label>
                        <input type="text" className="form-control" id="tag" name='tag' aria-describedby="emailHelp" onChange={handleChange} />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" id="description" name="description" onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>
        </div>
    )
}

export default AddNote