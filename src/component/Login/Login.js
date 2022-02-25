import React, { useContext, useState } from "react";
import firebase from "firebase";
import "firebase/auth";
import firebaseConfig from "../../firebaseConfig";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";
import google from "../../gg.jpg";
import "./Login.css";

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
} else {
	firebase.app(); // if already initialized, use that one
}

function Login() {
	const [inputInfo, setInputInfo] = useState({});
	const [openRegister, goRegister] = useState(false);
	const [message, setMessage] = useState("");
	const [newUser, setNewUser] = useState(false);
	const [user, setUser] = useState({
		isSigned: false,
		name: "",
		email: "",
		password: "",
		photo: "",
	});

	const [loggedInUser, setLoggedInUser] = useContext(UserContext);
	const history = useHistory();
	const location = useLocation();
	let { from } = location.state || { from: { pathname: "/" } };

	//using google and facebook
	const googleProvider = new firebase.auth.GoogleAuthProvider();

	const handleSignIn = () => {
		//google login system
		firebase
			.auth()
			.signInWithPopup(googleProvider)
			.then((result) => {
				var credential = result.credential;
				var token = credential.accessToken;
				var user = result.user;
				setLoggedInUser({"email":user.email});
				history.replace(from);
			})
			.catch((error) => {
				var errorCode = error.code;
				var errorMessage = error.message;
				var email = error.email;
				var credential = error.credential;
				// ...
			});
	};
	const loginHandler = (e) => {
		const data = { ...inputInfo };
		data[e.target.name] = e.target.value;
		setInputInfo(data);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputInfo.password == inputInfo.confirm) {
			if (openRegister == true) {
				firebase
					.auth()
					.createUserWithEmailAndPassword(inputInfo.email, inputInfo.password)
					.then((userCredential) => {
						// Signed in
						var user = userCredential.user;
						console.log(user);
						setMessage("Registration successful Please Login now");
						// ...
					})
					.catch((error) => {
						var errorCode = error.code;
						var errorMessage = error.message;
						console.log(error);
						setMessage(errorMessage);
						// ..
					});
			}
		}
		if (openRegister == false) {
			firebase
				.auth()
				.signInWithEmailAndPassword(inputInfo.email, inputInfo.password)
				.then((userCredential) => {
					// Signed in
					var user = userCredential.user;
					setLoggedInUser({"email": inputInfo.email});
					sessionStorage.setItem("email", inputInfo.email);
					setMessage(" Verification done Loading....");
					history.replace("/");
					// ...
				})
				.catch((error) => {
					var errorCode = error.code;
					var errorMessage = error.message;
					setMessage(errorMessage);
				});
		}
	};

	return (
		<div className="loginFromBody">
			<div className="container">
				<div className="row pt-5">
					<div className="col col-sm-12 col-md-6 offset-md-3">
						{message.length && (
							<div className="messageSection">
								<p>{message}</p>
							</div>
						)}
						<div className="loginform p-5 shadow">
							<form onSubmit={handleSubmit}>
								<div class="mb-3">
									<label for="exampleInputEmail1" class="form-label text-white">
										Email address
									</label>
									<input
										type="email"
										onBlur={loginHandler}
										class="form-control"
										id="exampleInputEmail1"
										name="email"
										aria-describedby="emailHelp"
										required
									/>
								</div>
								<div class="mb-3">
									<label
										for="exampleInputPassword1"
										class="form-label text-white"
									>
										Password
									</label>
									<input
										type="password"
										name="password"
										onBlur={loginHandler}
										class="form-control"
										id="exampleInputPassword1"
										required
									/>
								</div>
								{openRegister && (
									<div class="mb-3 confirmRegisterButton">
										<label
											for="exampleInputPassword1"
											class="form-label text-white"
										>
											Confirm Password
										</label>
										<input
											type="password"
											name="confirm"
											onBlur={loginHandler}
											class="form-control"
											id="exampleInputPassword1"
											required
										/>
									</div>
								)}
								{!openRegister && (
									<p
										onClick={() => goRegister(!openRegister)}
										className="registerText text-info"
									>
										Not register ? please click for register_
									</p>
								)}
								{openRegister && (
									<p
										onClick={() => goRegister(!openRegister)}
										className="registerText"
									>
										Already register.Please login
									</p>
								)}
								<button type="submit" class="loginbtn btn btn-info container">
									Submit
								</button>
							</form>
							<p></p>
							<div className="google">
								<p>- or -</p>
								<p className="googleLoginButton" onClick={handleSignIn}>
									Continue with Google
								</p>
								<span className="googleLoginUnderButton"></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
