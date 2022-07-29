import {Button,Form} from 'react-bootstrap';
import React from 'react';

function LoginForm() {
    return (
        <div>
            <Form className='log'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{fontSize:'40px'}}>Login</Form.Label>
                    <Form.Control type="email" placeholder="Email Address" style={{borderRadius:'15px'}} />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    
                    <Form.Control type="password" placeholder="Password" style={{borderRadius:'15px'}}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Label style={{Color:'blue'}}>New User ? Create an Account </Form.Label>
                    <Button className='button1' variant="primary" type="submit" style={{borderRadius:'15px'}}>
                    Login</Button>
                </Form.Group>
                
            </Form>
        </div>
    );
}

export default LoginForm;