import React, { useContext, useEffect, useState } from "react";
import {Button, Table, thead} from "react-bootstrap";
import { useHistory } from "react-router";
import { UserContext } from "../App";

const OrderUserProduct = () => {
     const [loggedInUser, setLoggedInUser] = useContext(UserContext);
     const [orderProduct, setOrderProduct] = useState([])
     const currentUser = loggedInUser.email;
     // console.log(currentUser);
     const history = useHistory();

     useEffect(() => {
          fetch(`https://boiling-ocean-62562.herokuapp.com/userProduct/${currentUser}`)
          .then( res => res.json())
          .then( data => {
               setOrderProduct(data);
          })
     }, [currentUser])
     // https://boiling-ocean-62562.herokuapp.com/userProduct/golamrabbynwu@gmail.com
	return (
		<div className="container mt-5 shadow">
			<div className="row">
				<div className="col-md-12">

				</div>
			</div>
		</div>
	);
};

export default OrderUserProduct;
