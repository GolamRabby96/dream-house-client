import React, { useEffect, useState } from "react";
import { Button, Table, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCoffee,
	faEdit,
	faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

const AdminManegeProduct = () => {
	const editIcon = <FontAwesomeIcon icon={faEdit} />;
	const deleteIcon = <FontAwesomeIcon icon={faTrashAlt} />;
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch("https://boiling-ocean-62562.herokuapp.com/allProduct")
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);

	const handleDelete = (key) => {
		fetch(`https://boiling-ocean-62562.herokuapp.com/deleteProduct/${key}`, {
			method: "DELETE",
		})
          .then((result) => {
               document.getElementById(key).style.display = "none";
          });
	};
	return (
		<div>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Product Name</th>
						<th>Price</th>
						<th>Operation</th>
					</tr>
				</thead>
				<tbody>
					{products.length === 0 && (
						<Button variant="primary" className="loadingcss" disabled>
							<Spinner
								as="span"
								animation="grow"
								size="sm"
								role="status"
								aria-hidden="true"
							/>
							Loading...
						</Button>
					)}
					{products.map((pd) => (
						<tr id={pd.key}>
							<td>{pd.name}</td>
							<td>{pd.price}</td>
							<td>
								<span style={{ cursor: "pointer" }}>{editIcon}</span>{" "}
								&nbsp;&nbsp;&nbsp;
								<span
									style={{ cursor: "pointer" }}
									onClick={() => handleDelete(pd.key)}
								>
									{deleteIcon}
								</span>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default AdminManegeProduct;
