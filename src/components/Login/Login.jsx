import styles from "./Login.module.css";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useNavigate, useLocation } from "react-router-dom";
import { auth } from "../../settings/settings";
import React, { useState, useEffect } from "react";
import DisplayMessage from "../common/DisplayMessage/DisplayMessage";
import ButtonLoader from "../common/loaders/ButtonLoader/ButtonLoader";

export default function Login() {
  //Router
  const location = useLocation();
  const history = useNavigate();

  //UseStates
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [btnLoader, setBtnLoader] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(
    function () {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          history("/");
        }
      });
    },
    [location]
  );

  async function Submit(event) {
    event.preventDefault();
    setBtnLoader(true);

    const emailValue = event.target.email.value.trim();
    const passwordValue = event.target.password.value.trim();
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

    try {
      if (emailValue.length <= 0) {
        setEmailError(true);
      }

      if (passwordValue.length <= 0) {
        setPasswordError(true);
      }

      if (passwordValue.length <= 0 || emailValue.length <= 0) {
        return setMessage(<DisplayMessage messageType="warning">All fields must be filled</DisplayMessage>);
      }

      if (!regex.test(emailValue)) {
        return setMessage(<DisplayMessage messageType="warning">Not valid email</DisplayMessage>);
      }

      const userCredential = await signInWithEmailAndPassword(auth, emailValue, passwordValue);
    } catch (error) {
      console.log(error);
      setMessage(<DisplayMessage messageType="error">{error.code.replace("auth/", "")}</DisplayMessage>);
    } finally {
      setBtnLoader(false);
    }
  }

  function clearMessage() {
    setMessage("");
  }

  return (
    <main className={styles.main}>
      <form className={styles.form} onSubmit={Submit}>
        <h1 className={styles.h1}>Login</h1>

        {message ? <div className={styles.message}>{message}</div> : ""}

        <label htmlFor="Email">Enter email</label>
        {emailError ? <p className={styles.error}>Please enter your email adress</p> : ""}
        <input onKeyDown={clearMessage} placeholder="Email" type="text" id="email" name="email" />

        <label htmlFor="password">Enter password</label>
        {passwordError ? <p className={styles.error}>Please enter your password</p> : ""}
        <input onKeyDown={clearMessage} placeholder="Password" type="password" id="password" name="password" />

        <button className={styles.loginButton}>{btnLoader ? <ButtonLoader /> : "Login"}</button>
      </form>
    </main>
  );
}