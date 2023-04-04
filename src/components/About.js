import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag } from '@fortawesome/free-solid-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className='my-3'>
            <h3 className='my-3'>iNotebook is a cloud storage for your daily ToDos.</h3>
            <p>Continuing the <span className='text-warning'>iNotebook</span> practice project of <span className='text-warning'>Code-With-Harry</span>...</p>
            <h5 className='my-2'><FontAwesomeIcon icon={faHashtag} color='yellow' /> This project is one of the best example of <span className='text-warning'>MERN STACK WEB DEVELOPMENT</span></h5>
            <p> - which is a collection of technologies that enables faster application development. It is used by developers worldwide. The main purpose of using MERN stack is to develop apps using JavaScript only. This is because the four technologies that make up the technology stack are all JS-based.</p>
            <h6>MERN stands for - </h6>
            <ul className='text-warning'>
                <li>MongoDB</li>
                <li>Express JS</li>
                <li>React JS</li>
                <li>Node JS</li>
            </ul>

            <h5 className='my-3'><FontAwesomeIcon icon={faHashtag} color='yellow' /> In this iNotebook application we enables user to perform <span className='text-warning'>CRUD OPERATION</span></h5>
            <p> - Developers are familiar with the acronym CRUD, which indicates operations</p>
            <ul className='text-warning'>
                <li>Create</li>
                <li>Read</li>
                <li>Update</li>
                <li>Delete</li>
            </ul>
            <p>And exactly these operations are the most common example. Others may be e.g., Archiving, Export and Import, which we will try to add in this application in future.</p>

            <h5 className='my-3'><FontAwesomeIcon icon={faHashtag} color='yellow' /> iNotebook - users are secured with <span className='text-warning'>HASH ROUTER</span></h5>
            <p> - <span className='text-warning'>HashRouter</span> is for use in web browsers when the URL should not (or cannot) be sent to the server for some reason. This may happen in some shared hosting scenarios where you do not have full control over the server. In these situations, <span className='text-warning'>HashRouter</span> makes it possible to store the current location in the hash portion of the current URL, so it is never sent to the server.</p>
            <p>Here in this application we are first converting the user password with a <span className='text-warning'>HASH</span> before it sent to the server. Which makes an user more secured with the password, while creating a new account or at the time of Login.</p>

            <h5 className='my-3'><FontAwesomeIcon icon={faHashtag} color='yellow' /> Follow the Development of <span className='text-warning'>iNotebook on GITHUB</span></h5>
            <h6><FontAwesomeIcon color='yellow' icon={faArrowUpRightFromSquare} /> <Link className='text-light' to="https://github.com/iamarghamallick/iNotebook-react-app" target='_blank'>Link to iNotebook-react-app</Link></h6>
            <h6><FontAwesomeIcon color='yellow' icon={faArrowUpRightFromSquare} /> <Link className='text-light' to="https://github.com/iamarghamallick/iNotebook-backend" target='_blank'>Link to iNotebook-react-app - backend</Link></h6>
            </div>
    )
}

export default About
