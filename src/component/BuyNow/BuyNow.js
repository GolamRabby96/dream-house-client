import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import {Button, Table, thead} from "react-bootstrap";
import { UserContext } from "../../App";
import { useHistory } from 'react-router';

const BuyNow = () => {
	const [buyData, setBuyData] = useState([]);
     const [loggedInUser, setLoggedInUser] = useContext(UserContext);

	console.log(buyData);
	const { key } = useParams();
	useEffect(() => {
		fetch(`https://boiling-ocean-62562.herokuapp.com/buynow/${key}`)
			.then((res) => res.json())
			.then((data) => setBuyData(data[0]));
	}, [key]);

     const history = useHistory();
     const handleBuyNow = ()=>{
          const {category, name, wholePrice} = buyData;
          const userEmail = loggedInUser.email;
          const product = {userEmail,category, name, wholePrice};
          fetch("https://boiling-ocean-62562.herokuapp.com/addUserProduct",{
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json'
               },
               body: JSON.stringify(product)
          });

          history.push('/confirm');
          

     }



     const {category, name, wholePrice} = buyData;

	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col-md-12">
					{buyData.name && <Table className='shadow p-3' striped bordered hover variant="dark">
						<thead>
							<tr>
								<th>Category</th>
								<th>Product Name</th>
                                        <th>Quantity</th>
								<th>Price</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{category}</td>
								<td>{name}</td>
								<td>1</td>
								<td>${wholePrice}</td>
							</tr>
						</tbody>
					</Table>}
                         <Button onClick={handleBuyNow} className="container btn-info">Check out</Button>
				</div>
			</div>
		</div>
	);
};

export default BuyNow;
