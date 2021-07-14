import React from "react";
import { Card } from "react-bootstrap";
import './HomeProduct.css'
import { useHistory } from 'react-router';

const HomeProduct = (props) => {
     const {img, name, price, category, key} = props.product;

     const history = useHistory();
     const handlePushHistory= ()=> {
          history.push(`/buynow/${key}`);
     }
	return (
		<div className="col-md-3 colthreecontrol">
			<Card className="shadow mt-2">
				<Card.Img variant="top" className="card-image" src={img} />
				<Card.Body>
					<Card.Title>{category}</Card.Title>
					<Card.Text className="text-control">
						{name} 
					</Card.Text>
				</Card.Body>
				<Card.Body>
					<Card.Link>${price}</Card.Link>
					<Card.Link >
						<button onClick={handlePushHistory} className="btn btn-sm btn-info">By Now</button>
					</Card.Link>
				</Card.Body>
			</Card>
		</div>
	);
};

export default HomeProduct;
