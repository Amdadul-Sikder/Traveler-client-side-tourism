import React from 'react';
import { Button, Form } from 'react-bootstrap';
import "./Contact.css"

const Contact = () => {
    return (
        <div className="contact-section" id="contact">
            <h2>Contact with US</h2>

            <Form className="contact-form">
                <Form.Group className="mb-3">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <Button className="submit-btn" variant="primary">Submit</Button>
            </Form>
        </div >
    );
};

export default Contact;