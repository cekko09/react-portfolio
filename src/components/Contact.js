import React, { useEffect } from 'react'
import {useState} from "react"
import { Col, Container, Row } from 'react-bootstrap'
import emailjs from 'emailjs-com';

import contactImg from "../assets/img/contact-img.svg"

export default function Contact() {
  
 

    const [buttonText,setButtonText] = useState('Send')
const [status,setStatus] = useState(2)

    function sendEmail(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
        setButtonText('Sending...')
        
        emailjs.sendForm('service_vinvhja', 'template_02dns8k', e.target, '2vyCuLI4BOq7UU6xa')
          .then((result) => {
            setButtonText('Send')
            setStatus(1)   //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
          }, (error) => {
              console.log(error.text);
              setStatus(0)
          });
         
      }
   console.log(status);



    return (
    <section className='contact' id='connect'>
        <Container>
            <Row className='align-items-center'>
                <Col md={6}>
                    <img src={contactImg} alt='Contact Us'></img>
                </Col>
                <Col md={6}>
                    <h2>Get In Touch</h2>
                    <form onSubmit={sendEmail}>
                        <Row>
                            <Col sm={6} className='px-1'>
                            <input  type='text' placeholder='First Name' name="from_name"/>
                            </Col>
                            <Col sm={6} className='px-1'>
                            <input  type='text' placeholder='Last Name' />
                            </Col>
                            <Col sm={6} className='px-1'>
                            <input  type='email'  placeholder='Email' name="email" />
                            </Col>
                            <Col sm={6} className='px-1'>
                            <input  type='tel'  placeholder='Phone Number' name='cell'  />
                            </Col>
                            <Col sm={12} className='px-1'>
                                <textarea rows={6}  placeholder='Message' name="message" ></textarea>
                               <input type='submit'  value={buttonText}/>
                               {status == 1 ? <span className='text-success'>Message Sent Succesfully</span> : <span></span>}
                               </Col>
                               {
                                status.message &&
                                <Col>
                                <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                </Col>
                               }
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
