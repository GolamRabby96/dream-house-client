import "./App.css";
import DataInsert from "./component/DataInsert/DataInsert";
import Home from "./component/Home/Home";
import Header from "./component/Header/Header";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BuyNow from "./component/BuyNow/BuyNow";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import Login from "./component/Login/Login";
import UserOrderProduct from "./component/UserOrderProduct/UserOrderProduct";
import OrderConformation from "./component/OrderConformation/OrderConformation";
import AdminPanel from "./component/AdminPanel/AdminPanel";

export const UserContext = createContext();

function App() {
	const [loggedInUser, setLoggedInUser] = useState({});
	return (
		<UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
			<Router>
				<div>
					<Header></Header>
					<Switch>
						<Route exact path="/about">{/* <About /> */}</Route>
						<PrivateRoute exact path="/buynow/:key">
							<BuyNow></BuyNow>
						</PrivateRoute>
						<PrivateRoute exact path="/UserOrders">
							<UserOrderProduct></UserOrderProduct>
						</PrivateRoute>
						<Route exact path="/">
							<Home></Home>
						</Route>
						<Route exact path="/login">
							<Login></Login>
						</Route>
						<PrivateRoute exact path="/confirm">
							<OrderConformation></OrderConformation>
						</PrivateRoute>
						<PrivateRoute exact path="/Admin">
							<AdminPanel></AdminPanel>
						</PrivateRoute>
					</Switch>
				</div>
			</Router>
		</UserContext.Provider>
	);
}

export default App;
