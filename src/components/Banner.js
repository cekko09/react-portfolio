import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/resim.jpg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TypeIt from "typeit-react";
import 'animate.css';

export const Banner = () => {
 
  return (
    <section className="banner react" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
           
              <div className="animate__animated animate__fadeIn"  >
                <h1 className="txt-rotate">
              <TypeIt  
                options={{
                    strings: ["Web Developer" , "UI Designer", "Full-Stack Developer"] ,
                    lifeLike:true,
                    speed: 100,
                    waitUntilVisible: true,
                    loop:true,
                    breakLines:false,
                    nextStringDelay: 1500,
                }}>
                </TypeIt>
                </h1>
                <span className="tagline">Welcome to my Portfolio</span>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
           
         
                <div className="animate__animated animate__zoomIn">
                  <img src={headerImg} className="headerImg" alt="Header Img"/>
                </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
