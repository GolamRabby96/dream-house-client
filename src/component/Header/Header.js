import React, { useContext } from "react";
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
     const [loggedInUser, setLoggedInUser] = useContext(UserContext);
	return (
		<div className="container">
			<Navbar bg="light" expand="lg">
				<Navbar.Brand href="#home"><b>DREAMS-HOUSE</b></Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link> <Link to="/">Home</Link> </Nav.Link>
						<Nav.Link> <Link to="/UserOrders">Orders</Link> </Nav.Link>
						<Nav.Link> <Link to="/Admin">Admin</Link> </Nav.Link>
						<Nav.Link> <Link to="/login">Login</Link> </Nav.Link>
					</Nav>
                         <p>{loggedInUser.displayName}</p>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default Header;
