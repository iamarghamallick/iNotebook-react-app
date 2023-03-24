import React from 'react'
import Notes from './Notes'

const Home = () => {
  return (
    <>
      <div className='container my-3'>
        <h2>Add Note</h2>
        <form className='my-3'>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Title</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Description</label>
            <input type="text" className="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" className="btn btn-primary">Add Note</button>
        </form>
      </div>
      <Notes />
    </>
  )
}

export default Home