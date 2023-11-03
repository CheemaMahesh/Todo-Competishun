import React, { useState,useRef,useEffect } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import styles from "../Styles/SignIn.module.css";

const SignIn = ({handleSwap}) => {
  

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const titleRef = useRef(null);

    useEffect(() => {
        titleRef.current.focus()
    },[]);

    //======================Sign in
    
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.signInContainer}>
     <form  className={styles.signInForm}>
        <h1>Log In</h1>
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          ref={titleRef}
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
        <button type="submit" className={styles.signInButton} onClick={signIn}>
          Sign In
        </button>
        <button onClick={handleSwap} type="submit" className={styles.signInButton}>Not a User ? SignUp</button>
      </form>
    </div>
  );
};

export default SignIn;
