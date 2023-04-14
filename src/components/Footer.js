import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer mt-auto py-3 bg-dark">
            <div className="container">
                <div className='container d-flex flex-column justify-content-center text-center'>
                    <div className='social-links'>
                        <Link to="https://twitter.com/iamarghamallick" target='_blank'><FontAwesomeIcon icon={faTwitter} color='#cbcbcb' className='mx-1 h4' style={{borderRadius: "50%", padding: "8px"}}/></Link>
                        <Link to="https://github.com/iamarghamallick" target='_blank'><FontAwesomeIcon icon={faGithub} color='#cbcbcb' className='mx-1 h4' style={{borderRadius: "50%", padding: "8px"}}/></Link>
                        <Link to="https://www.linkedin.com/in/iamarghamallick/" target='_blank'><FontAwesomeIcon icon={faLinkedin} color='#cbcbcb' className='mx-1 h4' style={{borderRadius: "50%", padding: "8px"}}/></Link>
                    </div>
                    {<p>iNotebook &copy; {new Date().getFullYear()} | Made with MERN</p>}
                </div>
            </div>
        </footer>
    )
}

export default Footer