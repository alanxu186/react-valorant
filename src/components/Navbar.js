import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';


function ValNavBar() {
    return (
        <Navbar bg="dark" variant="dark" expand="md">
            <Container>
                <Navbar.Brand href="#home">Valorant Beta</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Search</Nav.Link>
                        <NavDropdown title="Agents" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">VCT</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Abilites
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Pro-teams</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Orgs
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default ValNavBar