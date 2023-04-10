import React, { useContext } from 'react'
import noteContext from "../context/notes/noteContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';

const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    return (
        <div className="col-md-4">
            <div className="card my-3 border border-primary" style={{"borderRadius": "20px"}}>
                <div className="card-body" style={{"backgroundColor":"#001f4e", "borderRadius": "20px"}}>
                    <div className="align-items-center">
                        <h5 className="card-title">{note.title}</h5>
                        {/* <p className="card-text">{note.description}</p> */}
                        <textarea className='text-light' style={{background: "#001f4e", width: "100%", borderRadius: "10px", padding: "5px" }} rows={10} value={note.description} disabled></textarea>
                        <p className="card-text text-warning"><FontAwesomeIcon icon={faHashtag} /> {note.tag}</p>
                    </div>
                    <div className="d-flex align-items-center mt-3 justify-content-center">
                        <i className="far fa-trash-alt mx-2" onClick={() => { deleteNote(note._id); props.showAlert("Deleted sucessfully", "success"); }}></i>
                        <i className="far fa-edit mx-2" onClick={() => { updateNote(note) }}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Noteitem
