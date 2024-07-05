import React from 'react';
import './Style.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Main = () => {
  return (
    <section className="main">
      <div>
        <span className="present">Hello, it's my team.</span>
        <h2 className="parg">
        Welcome to our programming tutorial site, where we specialize in both backend and frontend development. As dedicated developers, we craft engaging tutorials and resources to enhance your skills in building robust web applications. Whether you're starting with basic HTML/CSS or diving into advanced backend frameworks, we're here to guide you every step of the way.
        </h2>
        <a href="#" className="bottun" target="_blank">Another Project</a>
           <div className="icon1" >
           <a href="https://github.com/abdelalibakka" target="_blank" rel="noopener noreferrer">
           <GitHubIcon className="firsticon"style={{ fontSize: "2em"}}/>
          </a>
           
        
          <a href="https://www.linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon className='secondicon' style={{ fontSize: "2em" }}/>
              </a>
              <TwitterIcon style={{ fontSize: "2em" }}/>
           </div>
      </div>
    </section>
  );
};

export default Main;
