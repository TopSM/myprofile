import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { AnimationOnScroll } from 'react-animation-on-scroll';

function Grid(props) {
    return (
        <div className="photography-fitting" >
            <AnimationOnScroll animateIn='animate__fadeInRight'>
                <h2 className='sections'>{props.setting} Photography </h2>
            </AnimationOnScroll>
            <div className='gallery'>
                <Container className="cont-style">
                    <Row className="row-style" xs={1} s={1} md={1} lg={4} >
                        {props.images.map(i => (
                            <AnimationOnScroll 
                                key={i.id}
                                animateIn='animate__flipInX'>
                                < Col className="col-style">
                                    <img
                                        src={i.src}
                                        alt={i.alt}
                                        width={i.width}
                                        height={i.height}
                                        className='image-style'
                                    />
                                    <br />
                                    Camera Used: {i.camera}
                                    {i.description != null &&

                                        <div>{i.description}</div>
                                    }
                                </Col>
                            </AnimationOnScroll>
                        )
                        )}
                    </Row>
                </Container >

            </div >
        </div>
    )
}

export default Grid;