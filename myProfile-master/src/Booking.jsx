import React, { useState } from 'react'
// import Construction from './Construction'
import Form from 'react-bootstrap/Form'
import { Button } from '@material-ui/core';

export default function Booking(){
    const [colors] = useState(typeof (Storage) != undefined ? localStorage.getItem("colorState") === "true" : true,)
    const [agreeCheckBox, setagreeCheckBox] = useState(false)
    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [Email, setEmail] = useState("")
    const [PhoneNumber, setPhoneNumber] = useState("")
    const [Package, setPackage] = useState("")
    const [Location, setLocation] = useState("")

    const handleForm =(e) =>{
        e.preventDefault()
        // console.log(this.state)
    }
    const basicColors = (colors) => {
                return {
                    backgroundColor: colors ? "white" : "#282c34",
                    color: colors ? "black" : "aliceblue"
        
                }
            }
    return (
        <div className='booking' style={basicColors(colors)}>
            <h2>Book Photography Appointments</h2>

            <div >
                <h3>Packages</h3>


                <div className="booking-standard">
                    <h5>
                        Simple Set
                </h5>
                    <ul className="no-bullets">
                        <li>$30</li>
                        <li>1 hour</li>
                        <li>2 Retouched Photos</li>
                        <li>1 Outfit</li>
                        <li>1 location</li>
                    </ul>
                    <h5>
                        Basic Set
                </h5>
                    <ul className="no-bullets">
                        <li>$60</li>
                        <li>1 hour</li>
                        <li>6 Retouched Photos</li>
                        <li>1 Outfit</li>
                        <li>1 location</li>
                    </ul>
                    <h5>
                        Glamorous Set
                </h5>
                    <ul className="no-bullets">
                        <li>$100</li>
                        <li>2 hour</li>
                        <li>12 Retouched Photos</li>
                        <li>2 Outfit</li>
                        <li>2 location</li>
                    </ul>

                </div>
                <h3>Important information</h3>

                <div className="booking-standard">
                    <h4>Scheduling</h4>
                    <p>To book for an appointment please follow my instagram account, that is where 
                        I will be notifying when my booking sessions are open.
                    </p>
                    <p>If you decide you want to change your booking date please notify me 24 hours in 
                        advance
                        FAILURE TO DO SO WILL MEAN THE LOSS OF YOUR DEPOSIT AND WILL REQUIRE ANOTHER 
                        DEPOSIT IF YOU CHOOSE TO SCHEDULE A NEW DATE. 
                    </p>
                    <h4>Payment</h4>
                    <p>There is a 50% non-refundable deposit required 48 hours prior to scheduled photshoot date. 
                        FAILURE TO PAY DEPOSIT BEFORE THE 48 HOUR MARK WILL MEAN THE LOSS OF YOUR BOOKING DATE.</p>
                    <p>Payment through zelle is appreciated but cash is accepted. Deposit must be made through 
                        zelle.
                    </p>
                    <p>If you choose to want more pictures retouched that are outside from the package that
                         you choose then please talk to me about potentially upgrading your package or if 
                         you only want 1 or 2  more pictures retouched then each picture will cost $15 more 
                         on top of package chosen.
                    </p>
                    <p>Overtime fees will apply if we go over desginated time we initially agree on. </p>
                    <h4>Location</h4>
                    <p>Please understand that some location some location require a permit to take pictures which 
                        will require an additional fee if you so choose to continue with the process. 
                        Also some places are unrestricted and do not allow for photography to be taken so choosing 
                        a different location will be encouraged.                     
                    </p>
                </div>
                    
            </div>
            <Form className='booking-form' onSubmit={handleForm} >
                <Form.Label >
                    First Name
                </Form.Label>
                <Form.Control 
                    type="text"
                    className="form-control" 
                    placeholder='First Name' 
                    value ={firstName} 
                    onChange={e => setfirstName( e.target.value) }/>
                <Form.Label>
                    Last Name
                </Form.Label>
                <Form.Control 
                    className="form-control" 
                    placeholder='Last Name' 
                    value ={lastName} 
                    onChange={e => setlastName(e.target.value)}/>
                <Form.Label>
                    Email
                </Form.Label>
                <Form.Control className="form-control" 
                    type='Email' 
                    placeholder="Email" 
                    value ={Email} 
                    onChange={e => setEmail(e.target.value)}
                />
                <Form.Label>
                    Phone Number
                </Form.Label>
                <Form.Control 
                    className="form-control" 
                    placeholder="Phone" 
                    value ={PhoneNumber} 
                    onChange={e => setPhoneNumber(e.target.value)}
                    />
                <Form.Label>Choose Package</Form.Label>
                <Form.Control 
                    className="form-control" 
                    as="select"
                    value={Package}
                    onChange={e=>setPackage(e.target.value)}
                >
                    <option value= "Basic Pack $70/hr">Basic Pack $70/hr</option>
                    <option value="Glamorous Events $100/hr">Glamorous Events $100/hr</option>
                    <option value="Simple Pack $30/hr">Simple Pack $30/hr</option>
                </Form.Control>
                <Form.Label>Desired Location</Form.Label>
                <Form.Control 
                    className="form-control" 
                    placeholder='location' 
                    value={Location}
                    onChange={e=>setLocation(e.target.value)}
                />
                <Form.Check onClick ={()=>setagreeCheckBox(!agreeCheckBox)} label="I hereby agree that I have read all of the important information on this page and will abide to 
                all the rules that apply to me."/>
                <Button type="submit">Submit</Button>
            </Form >
        </div >
    )
}