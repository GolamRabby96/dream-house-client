import React, { useEffect, useState } from "react";
import HomeProduct from "../HomeProduct/HomeProduct";
import { Button, Spinner } from "react-bootstrap";

const Home = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch("https://boiling-ocean-62562.herokuapp.com/products")
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);

	return (
		<div className="container mt-5">
			<div className="row">
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
					<HomeProduct product={pd}></HomeProduct>
				))}
			</div>
		</div>
	);
};

export default Home;
