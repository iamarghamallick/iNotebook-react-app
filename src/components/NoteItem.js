import React, {useContext} from 'react';
import noteContext from '../context/notes/noteContext';

const NoteItem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    return (
        <div className='container col-md-3'>
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <div className='d-flex justify-content-between mx-3'>
                        <i className="fa-solid fa-pen-to-square" onClick={()=>{updateNote(note)}}></i>
                        <i className="fa-solid fa-trash" onClick={()=> {deleteNote(note._id)}}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoteItem