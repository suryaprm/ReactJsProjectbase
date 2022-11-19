import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'

const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand href="#">ProjecBase ReactJS</Navbar.Brand>
                </LinkContainer>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link href="/">Home</Nav.Link>
                        </LinkContainer>
                        <NavDropdown title="Master Data" id="basic-nav-dropdown">
                            <LinkContainer to="/masterdata/users">
                                <NavDropdown.Item href="#">Users</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="d-flex">
                        <NavDropdown title="Is Aunthenticated? " id="basic-nav-dropdown">
                            <LinkContainer to="/auth/login">
                                <NavDropdown.Item href="#">Login</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/auth/register">
                                <NavDropdown.Item href="#">Register</NavDropdown.Item>
                            </LinkContainer>
                            <NavDropdown.Divider />
                            <LinkContainer to="/auth/logout">
                                <NavDropdown.Item href="#">Logout</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Navigation;