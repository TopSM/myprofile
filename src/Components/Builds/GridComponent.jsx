import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { AnimationOnScroll } from 'react-animation-on-scroll';
/**/ 
function Grid(props) {
    return (
        <div className="photography-fitting" key={props.id}>
            <AnimationOnScroll animateIn='animate__fadeInRight'>
                <h2 className='sections'>{props.setting} Photography </h2>
            </AnimationOnScroll>
            <div className='gallery'>
                <Container className="cont-style">
                    <Row className="row-style" xs={1} s={1} md={1} lg={3} key={props.id}>                        
                        {props.images.map(i => (                        
                            <Col className="col-style" key={i.Number}>
                                <AnimationOnScroll 
                                    animateIn='animate__flipInX'
                                >
                                    <img
                                        src={i.src}
                                        alt={i.alt}
                                        width="100%"
                                        height="100%"
                                        className='image-style'
                                    />
                                
                                <br />
                                Camera Used: {i.camera}
                                {/* {i.description != null &&

                                    <div>{i.description}</div>
                                } */}
                                </AnimationOnScroll>
                            </Col>
                        ))}
                    </Row>
                </Container >

            </div >
        </div>
    )
}

export default Grid;