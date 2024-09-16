import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import AOS from 'aos';

import "aos/dist/aos.css";

AOS.init({
    duration: 1200
});
function Grid(props) {
    // console.log(props);
    return (
        <div className="photography-fitting" >
            <h2 className='sections' data-aos='fade-right'>{props.setting} Photography </h2>
            <div className='gallery'>
                <Container className="cont-style">
                    <Row className="row-style" xs={1} s={1} md={1} lg={4} >

                        {props.images.map(i => (

                            < Col className="col-style" data-aos='flip-left'>
                                <img
                                    src={i.src}
                                    alt={i.alt}
                                    width={i.width}
                                    height={i.height}
                                    // style={this.imageStyle()}
                                    className='image-style'
                                />
                                <br />
                                Camera Used: {i.camera}
                                {i.description != null &&

                                    <div>{i.description}</div>
                                }
                            </Col>
                        )
                        )}
                    </Row>
                </Container >

            </div >
        </div>
    )
}

export default Grid;