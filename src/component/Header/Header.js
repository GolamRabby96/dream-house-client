import React, { useContext } from "react";
import {
	Button,
	Navbar,
	Nav,
	NavDropdown,
	Form,
	FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const Header = () => {
	const [loggedInUser, setLoggedInUser] = useContext(UserContext);
	return (
		<Navbar bg="dark" expand="lg">
			<div className="container">
				<Navbar.Brand href="#home" className="">
					<b>Electro Hub</b>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link>
							{" "}
							<Link className="ml-5" to="/">
								Home
							</Link>{" "}
						</Nav.Link>
						<Nav.Link>
							{" "}
							<Link className="ml-3" to="/UserOrders">
								Orders
							</Link>{" "}
						</Nav.Link>
						<Nav.Link>
							{" "}
							<Link className="ml-3" to="/Admin">
								Admin
							</Link>{" "}
						</Nav.Link>
						<Nav.Link>
							{" "}
							<Link className="ml-3" to="/login">
								Login
							</Link>{" "}
						</Nav.Link>
					</Nav>
					<p>{loggedInUser.displayName}</p>
				</Navbar.Collapse>
			</div>
		</Navbar>
	);
};

export default Header;
