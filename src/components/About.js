import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import clientPic from '../../assets/images/brandon.jpg'

const About = (props) => {
    return (
        <div>
            <Container className="about-container">
                <Row className="about-row">
                    <Col sm={4}>
                        <div className="pic-container">
                            <img className="client-pic" src={clientPic} />
                        </div>
                    </Col>
                    <Col className="description-container" sm={8}>
                        <div className="description">
                            This will be where the text will go about the photographer.
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;