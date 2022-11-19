import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate(-1)
        }, 1000)
    })

    return (
        <Container>
            <Row>
                <Col>
                    ' <h1>Page Not Found</h1><br>
                    </br>
                    <small>You Will Be redirected to Home..</small>
                </Col>
            </Row>
        </Container>

    )
}

export default NotFound;