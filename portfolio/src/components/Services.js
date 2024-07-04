import React from 'react';
import { Link } from 'react-router-dom';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import CodeIcon from '@mui/icons-material/Code';

function Services() {
    return (
        <section className="cards" id="OurServices">
            <h2 className="title">Our Services</h2>
            <div className="content">
                <div className="card">
                    <div className="icon">
                        <CodeIcon  style={{ fontSize: "1em" }}/>
                    </div>
                    <div className="info">
                        <h3>Backend Development</h3>
                        <p>Backend development focuses on the server side of web applications, managing data storage, business logic, and server configuration to ...</p>
                        <Link  to="/backend-development" className='link'>Learn More</Link>
                    </div>
                </div>
                <div className="card">
                    <div className="icon">
                        <CodeOffIcon style={{ fontSize: "1em" }} />
                    </div>
                    <div className="info">
                        <h3>Frontend Development</h3>
                        <p>Frontend development focuses on creating the visual and interactive aspects of a website or web application, directly engaging with users.</p>
                        <Link  to="/frontend-development" className='link' >Learn More</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;

