import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './FrontendDevelopment.css';
import logo0 from './image/logo0.png'; // Ensure the path to your logo is correct
import logo1 from './image/logo1.png'; // Ensure the path to your logo1 is correct
import logo2 from './image/logo2.png'; // Ensure the path to your logo2 is correct
import logo3 from './image/logo3.png';
import logo4 from './image/logo4.png';
import logo5 from './image/logo5.png';
import logo6 from './image/logo6.png';
import logo7 from './image/logo7.png';
function FrontendDevelopment() {
    const [tutorials, setTutorials] = useState([]);

    useEffect(() => {
        axios.get('https://66870bc783c983911b046a75.mockapi.io/api/v1/frontend')
            .then(response => {
                const data = response.data.map((item, index) => {
                    // Adding logos to specific tutorials
                    if (index === 0) {
                        return { ...item, image: logo0 };
                    } else if (index === 1) {
                        return { ...item, image: logo1 };
                    } else if (index === 2) {
                        return { ...item, image: logo2 };
                    }else if (index === 3) {
                        return { ...item, image: logo3 };
                    }else if (index === 4) {
                        return { ...item, image: logo4 };
                    }else if (index === 5) {
                        return { ...item, image: logo5 };
                    }else if (index === 6) {
                        return { ...item, image: logo2 };
                    }else if (index === 7) {
                        return { ...item, image: logo6 };
                    }else if (index === 8) {
                        return { ...item, image: logo7 };
                    }
                    return item;
                });
                setTutorials(data);
            })
            .catch(error => {
                console.error('Error fetching tutorials:', error);

                // Mocking data locally in case of an error
                const localData = [
                    {
                        id: "1",
                        name: "Introduction to HTML",
                        description: "Learn the basics of HTML and its importance in web development.",
                        image: logo // Using local logo image
                    },
                    {
                        id: "2",
                        name: "CSS Styling Techniques",
                        description: "Explore various CSS styling techniques to enhance your web pages.",
                        image: logo1
                    },
                    {
                        id: "3",
                        name: "JavaScript Fundamentals",
                        description: "Master the fundamentals of JavaScript programming language.",
                        image: logo2
                    },
                    // More tutorial objects...
                ];
                setTutorials(localData);
            });
    }, []);

    return (
        <div className="container">
            <h1>Frontend Development Tutorials</h1>
            <ul>
                {tutorials.map(tutorial => (
                    <li key={tutorial.id}>
                        <h2>{tutorial.name}</h2>
                        <img src={tutorial.image} alt={tutorial.name} style={{ maxWidth: '100%', height: 'auto' }} />
                        <p className='paragraph'>{tutorial.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FrontendDevelopment;
