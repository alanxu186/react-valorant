import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';



function FeaturedAgent() {
    return (
        <Container>
            <Row className='px-4 my-5'>
                <Col sm={7}>
                    <Image
                        src="https://assets.gamepur.com/wp-content/uploads/2021/10/29100502/Chamber_Wallpaper.jpg"
                        fluid
                        rounded
                    />
                </Col>
                <Col sm={5}>
                    <h1 className='font-weight-light'>Agent: Chamber</h1>
                    <p className='mt-4'>Chamber hails from Paris.</p>
                    <Button variant="danger">Select agent</Button>
                </Col>
            </Row>
            <Row>
                <Card className='text-center bg-secondary text-white my-5 py-4' >
                    <Card.Body>This is some text within a card body.</Card.Body>
                </Card>
            </Row>
            <Row className='all-cards'>
                <Col>
                    <Row>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://wallpapercave.com/wp/wp8730555.png" />
                                <Card.Body>
                                    <Card.Title>Map: Ascent</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Provide stats</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://cdn1.dotesports.com/wp-content/uploads/2020/06/30204333/Loading_Screen_Haven.png" />
                                <Card.Body>
                                    <Card.Title>Map: Haven</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Provide stats</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://wallpapercave.com/wp/wp8730665.jpg" />
                                <Card.Body>
                                    <Card.Title>Map: Bind</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Provide stats</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default FeaturedAgent