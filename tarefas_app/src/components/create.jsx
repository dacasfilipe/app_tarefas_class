import React, { useState } from "react";
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const postData = () => {
        axios.post(`https://localhost:3000`, {
            firstName,
            lastName,
            isChecked
        }).then(() => {
            navigate('/read');
        });
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input
                        placeholder='First Name'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input
                        placeholder='Last Name'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <Checkbox
                        label='I agree to the Terms and Conditions'
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                </Form.Field>
                <Button primary onClick={postData} type='button'>Submit</Button>
            </Form>
        </div>
    );
};

export default Create;
