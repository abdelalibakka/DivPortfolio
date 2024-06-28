import React from 'react';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import CodeIcon from '@mui/icons-material/Code';
function Services() {
    return ( 
        
        <section className="cards" id="OurServices">
            <h2 className="title">Our Services</h2>
            <div className="content">
                <div className="card">
                    <div className="icon">
                        <CodeIcon style={{ fontSize :"1em" }} />
                    </div>
                    <div className="info">
                        <h3>backend development</h3>
                        <p>Your creative partner in crafting captivating graphic designs that elevate your brand.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="icon">
                        <CodeOffIcon  style={{ fontSize :"1em" }}/>
                    </div>
                    <div className="info">
                        <h3>Frontend Developer</h3>
                        <p>Elevate your brand online with our expert frontend development...</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;

