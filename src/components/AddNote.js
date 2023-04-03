import React, { useContext, useState } from 'react'
import noteContext from "../context/notes/noteContext"

const AddNote = (props) => {
    const context = useContext(noteContext);
    const { addNote } = context;
    const [note, setNote] = useState({ title: "", description: "", tag: "" })

    const handleClick = async (e) => {
        props.showLoading(true)
        e.preventDefault();
        await addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" });
        props.showLoading(false)
        props.showAlert("Added Successfully", "success");
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <div className="container my-3 d-flex">
            <form className="my-3" style={{ "width": "100%" }}>
                <div className="mb-3">
                    <input type="text" placeholder='Title' className="form-control-lg bg-dark text-light" id="title" style={{ "width": "100%" }} name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} minLength={5} required />
                </div>
                <div className="form-outline mb-3">
                    <textarea type="text" placeholder='Description' rows={3} className="form-contro bg-dark text-light px-2" id="description" style={{ "width": "100%" }} name="description" value={note.description} onChange={onChange} minLength={5} required ></textarea>
                </div>
                <div className="mb-3">
                    <input type="text" placeholder='Tag' className="form-control-sm bg-dark text-light" id="tag" style={{ "width": "100%" }} name="tag" value={note.tag} onChange={onChange} minLength={5} required />
                </div>
                <button disabled={note.title.length < 5 || note.description.length < 5} type="submit" className="btn btn-primary" onClick={handleClick}>Add New</button>
            </form>
        </div>
    )
}

export default AddNote
