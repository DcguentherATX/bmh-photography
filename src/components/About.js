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
                            Hello!  My name is Brandon and I am a photographer based in Austin, TX.  I take
                            my inspiration from my the world around me, focusing on nature and architecture
                            as my muses.  Geometric shapes and Arabic design appeal to me and I play with
                            the contrast between light and dark.
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;