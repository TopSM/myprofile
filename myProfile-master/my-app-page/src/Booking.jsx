import React, { Component } from 'react'
import Construction from './Construction'
import Form from 'react-bootstrap/Form'
export default class Booking extends Component {
    render() {
        return (
            <div className='booking'>
                <h2>Book Photography Appointments</h2>

                <Form className='booking-form'>
                    <Form.Label>
                        First Name
                    </Form.Label>
                    <Form.Control className="form-control" placeholder='First Name' />
                    <Form.Label>
                        Last Name
                    </Form.Label>
                    <Form.Control className="form-control" placeholder='Last Name' />
                    <Form.Label>
                        Email
                    </Form.Label>
                    <Form.Control className="form-control" type='Email' placeholder="Email" />
                    <Form.Label>
                        Phone Number
                    </Form.Label>
                    <Form.Control className="form-control" placeholder="Phone" />
                    <Form.Label>Choose Package</Form.Label>
                    <Form.Control className="form-control" as="select">
                        <option>Basic Pack $70/hr</option>
                        <option>Group Events $100/hr</option>
                        <option>Mobile Pack $30/hr</option>
                    </Form.Control>
                    <Form.Label>Location</Form.Label>
                    <Form.Control className="form-control" placeholder='location' />
                </Form >
            </div >
        )
    }
}
