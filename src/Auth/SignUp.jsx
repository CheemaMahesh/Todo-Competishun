import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import styles from "../Styles/SignUp.module.css";


const SignUp = ({handleSwap}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  // ==========================SignUp=================
  const signUp = (e) => {
    e.preventDefault();
  
    // Check if the password meets the minimum length requirement
    if (password.length < 6) {
    alert("Enter Password with more than 5 letters");
      return; 
    }
  
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  

  
  return (
    <div className={styles.signUpContainer}>
     <form  className={styles.signUpForm}>
        <h1>Create an Account</h1>
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.inputField}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.inputField}
        />
        <button type="submit" className={styles.signUpButton} onClick={signUp}>
          Sign Up
        </button>
        <button type="submit" className={styles.signUpButton} onClick={handleSwap}>
          Already a User? Log in
        </button>
      </form>
    </div>
  );
};

export default SignUp;
