import React, { useContext, useEffect, useState } from "react";
import { Button, Table, thead } from "react-bootstrap";
import { useHistory } from "react-router";
import { UserContext } from "../../App";
import SubUserProduct from "../SubUserProduct/SubUserProduct";

const UserOrderProduct = () => {
	const [loggedInUser, setLoggedInUser] = useContext(UserContext);
	const [orderProduct, setOrderProduct] = useState([]);
	const currentUser = loggedInUser.email;
	const history = useHistory();

	useEffect(() => {
		fetch(`https://boiling-ocean-62562.herokuapp.com/userProduct/${currentUser}`)
			.then((res) => res.json())
			.then((data) => {
				setOrderProduct(data);
			});
	}, [currentUser]);

	return (
		<div className="container mt-5 shadow">
			<div className="row">
				<div className="col-md-12">
                    <h4>{currentUser}</h4>
					<Table striped bordered hover variant="dark">
                              
						<thead>
							<tr>
								<th>Category</th>
								<th>Product Name</th>
								<th>Price</th>
							</tr>
						</thead>
						<tbody>
							{orderProduct.length > 0 &&
								orderProduct.map((od) => (
									<SubUserProduct product={od}></SubUserProduct>
								))}
						</tbody>
					</Table>
				</div>
			</div>
		</div>
	);
};

export default UserOrderProduct;
