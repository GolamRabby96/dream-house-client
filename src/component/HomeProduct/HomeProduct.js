import React from "react";
import { Card } from "react-bootstrap";
import "./HomeProduct.css";
import { useHistory } from "react-router";

const HomeProduct = (props) => {
	const { img, name, price, category, key } = props.product;

	const history = useHistory();
	const handlePushHistory = () => {
		history.push(`/buynow/${key}`);
	};
	return (
		<div className="col-sm-6 col-md-3 colthreecontrol">
			<Card onClick={handlePushHistory}  className="mt-2 productCardHome">
				<Card.Img onClick={handlePushHistory} variant="top" className="card-image productImageHome" src={img} />
				<Card.Body>
					<Card.Title>{category}</Card.Title>
					<Card.Text className="text-control productName">{name.substring(0,70)}</Card.Text>
				</Card.Body>
				<Card.Body>
					<Card.Text>Price: $ {price}</Card.Text>
					<Card.Link>
						<button onClick={handlePushHistory} className="btn btn-sm btn-dark container">
							By Now
						</button>
					</Card.Link>
				</Card.Body>
			</Card>
		</div>
	);
};

export default HomeProduct;
