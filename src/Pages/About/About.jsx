import React from 'react';
import { Button, Card } from 'react-bootstrap';
const About = () => {
    const [user, setUser] = React.useState({
        name: "Nazmul",
        desc: 'Some quick example text to build on the card title and make up the bulk of the cards content.', 
        roll: 10 ,
    });

    const handleSubmit = () => {

    };
    return (
        <div className='container pt-5'>
            <h2>This is about</h2>
            <div className='userInput pb-3' style={{ maxWidth: '300px' }}>
                <label htmlFor="name" className='d-flex flex-column'>
                    Name:
                    <input id='name' type="text" name='name' placeholder='Enter Name' />
                </label>
                <label htmlFor="name" className='d-flex flex-column'>
                    Description:
                    <textarea id='desc' type="text" name='desc' placeholder='Enter your comment' />
                </label>
                <label htmlFor="roll" className='d-flex flex-column'>
                    Roll:
                    <input id='roll' type="text" name='roll' placeholder='Enter Roll' />
                </label>
                <button onClick={() => handleSubmit()} className='mt-3'>Submit</button>
            </div>

            <Card style={{ width: '20rem' }}>
                <Card.Body>
                    <Card.Title>{user?.name}</Card.Title>
                    <Card.Text>
                        {user?.desc}
                    </Card.Text>
                    <p><b>Roll: {user?.roll}</b></p>
                </Card.Body>
            </Card>
        </div>
    );
};

export default About;