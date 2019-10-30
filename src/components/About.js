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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac felis cursus,
                            laoreet est quis, mollis eros. Morbi fringilla tincidunt tortor, ut varius risus
                            rutrum eget. Nulla facilisi. Nulla varius, massa a luctus elementum, lacus eros
                            egestas quam, vel lacinia risus augue a dui. Curabitur eget dui ut diam vulputate
                            rhoncus ut ac tortor. Donec egestas pellentesque sagittis. Maecenas pretium magna
                            sit amet libero sollicitudin tincidunt. Pellentesque mollis condimentum lacus, sed
                            dapibus dolor tempor id. Aliquam ornare malesuada dui eu feugiat. Donec elementum
                            justo rutrum libero posuere auctor. Donec non posuere lacus. In hac habitasse
                            platea dictumst. Sed quis felis suscipit, feugiat nibh et, fermentum ipsum
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;