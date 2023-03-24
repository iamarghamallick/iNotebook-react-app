import React from 'react'

const NoteItem = (props) => {
    const { note } = props;
    return (
        <div className='container col-md-3'>
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <div className='d-flex justify-content-between mx-3'>
                        <i className="fa-solid fa-pen-to-square"></i>
                        <i className="fa-solid fa-trash"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoteItem