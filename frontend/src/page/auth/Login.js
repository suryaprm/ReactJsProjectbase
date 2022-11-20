import { Container, Row, Col, Card, ListGroup, Form, Button } from "react-bootstrap";
import { Helmet } from "react-helmet";

const title = "Login";

const Login = () => {
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <Container>
                <Row className="mt-5">
                    <Col>
                        <Card className="d-flex">
                            <Card.Header>Welcome, login to start your session</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Username</Form.Label>
                                            <Form.Control type="text" placeholder="Username" />
                                            <Form.Text className="text-muted">
                                                We'll never share your email with anyone else.
                                            </Form.Text>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>
                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </Form>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Login;