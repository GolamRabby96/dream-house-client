import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const AdminAddProduct = () => {
     const [formData, setFormData] = useState({
          key: `${Math.floor(Math.random() * 300000)}`,
          category:'',
          name : '',
          price : ''
     });

     const handleChange= event =>{
         const {name, value} = event.target;
         setFormData(prevInput =>{
              return{
                   ...prevInput,
                   [name]:value
              }
         })
     }
     const handleSubmit=(event)=>{
		fetch("https://boiling-ocean-62562.herokuapp.com/addProduct", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})
          .then(data =>{
               alert('product added successfully');
          })
     }
	return (
		<div className="container pt-3">
			<Form>
				<Form.Group controlId="formBasicEmail">
					<Form.Label>Category</Form.Label>
					<Form.Control onChange={handleChange} value={formData.category} name='category' type="text" required placeholder="category" />
				</Form.Group>

				<Form.Group controlId="formBasicPassword">
					<Form.Label>Product Name</Form.Label>
					<Form.Control onChange={handleChange} name='name' value={formData.name} type="text" required placeholder="product name" />
				</Form.Group>
                    <Form.Group controlId="formBasicPassword">
					<Form.Label>Product price</Form.Label>
					<Form.Control onChange={handleChange} name='price' value={formData.price} type="number" required placeholder="product price" />
				</Form.Group>
				<Form.Group>
					<Form.File id="exampleFormControlFile1" required label="Example file input" />
				</Form.Group>
				<Button onClick={handleSubmit} variant="primary">
					Submit
				</Button>
			</Form>
		</div>
	);
};

export default AdminAddProduct;
