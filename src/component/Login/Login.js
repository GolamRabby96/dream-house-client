import React, { useContext, useState } from 'react';
import firebase from 'firebase';
import "firebase/auth";
import firebaseConfig from '../../firebaseConfig';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import google from '../../gg.jpg'
import './Login.css'

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig); 
 }else {
    firebase.app(); // if already initialized, use that one
 }
           

function Login() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSigned:false,
    name:'',
    email:'',
    password:'',
    photo:''
  });

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  //using google and facebook 
  const googleProvider = new firebase.auth.GoogleAuthProvider();

  const handleSignIn = () => { //google login system
     firebase.auth()
     .signInWithPopup(googleProvider)
     .then((result) => {
       var credential = result.credential;
       var token = credential.accessToken;
       var user = result.user;
       setLoggedInUser(user)
       history.replace(from);
     }).catch((error) => {
       var errorCode = error.code;
       var errorMessage = error.message;
       var email = error.email;
       var credential = error.credential;
       // ...
     });
  }

  return (
    <div className="google">
        <img onClick={handleSignIn} src={google} alt=""/>
        <p>Continue with Google</p>
        {/* <button className='btn btn-info' >Google Sign In</button> */}

    </div>
  );
}


export default Login;