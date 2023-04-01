import React, { useContext } from 'react'
import noteContext from "../context/notes/noteContext"

const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    return (
        <div className="col-md-3">
            <div className="card my-3 border border-primary" style={{"borderRadius": "20px"}}>
                <div className="card-body" style={{"backgroundColor":"#001f4e", "borderRadius": "20px"}}>
                    <div className="align-items-center">
                        <h5 className="card-title">{note.title}</h5>
                        <p className="card-text">{note.description}</p>
                    </div>
                    <div className="d-flex align-items-center my-2">
                        <i className="far fa-trash-alt mx-2" onClick={() => { deleteNote(note._id); props.showAlert("Deleted sucessfully", "success"); }}></i>
                        <i className="far fa-edit mx-2" onClick={() => { updateNote(note) }}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Noteitem
