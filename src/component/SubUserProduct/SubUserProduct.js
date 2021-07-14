import React from "react";
import { Button, Table, thead } from "react-bootstrap";
const SubUserProduct = (props) => {
	console.log(props);
	const { userEmail, category, name, wholePrice } = props.product;
	return (
		<tr>
			<td>{category}</td>
			<td>{name}</td>
			<td>${wholePrice}</td>
		</tr>
	);
};

export default SubUserProduct;
