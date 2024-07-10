import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FrontendDevelopment() {
    const [data, setData] = useState([]);
    

    useEffect(() => {
        axios.get('https://66870bc783c983911b046a75.mockapi.io/api/v1/frontend')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
          
            <ul>
                {data.map(item => (
                    <li key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FrontendDevelopment;

