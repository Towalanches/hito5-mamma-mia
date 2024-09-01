import { Link } from 'react-router-dom'
import { Navbar as BootstrapNavbar, Nav, NavDropdown } from 'react-bootstrap'

const Navbar = () => {
    const total = "xxxx"
    const token = false

    return (
        <BootstrapNavbar expand="lg">
            <BootstrapNavbar.Brand as={Link} to="/">Pizzería Mamma Mia!</BootstrapNavbar.Brand>
            <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
            <BootstrapNavbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">🍕 Home</Nav.Link>
                    {token ? (
                        <>
                            <Nav.Link as={Link} to="/profile">🔓 Profile</Nav.Link>
                            <Nav.Link as={Link} to="/logout">🔒 Logout</Nav.Link>
                        </>
                    ) : (
                        <>
                            <Nav.Link as={Link} to="/login">🔐 Login</Nav.Link>
                            <Nav.Link as={Link} to="/register">🔐 Register</Nav.Link>
                        </>
                    )}
                </Nav>
                <Nav>
                    <Nav.Link as={Link} to="/profile">
                        👦 Mi Perfil</Nav.Link>
                    <Nav.Link as={Link} to="/cart">
                        🛒 Total: ${total.toLocaleString()}
                    </Nav.Link>
                </Nav>
            </BootstrapNavbar.Collapse>
        </BootstrapNavbar>
    )
}

export default Navbar
