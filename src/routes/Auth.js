import {
  _createUserWithEmailAndPassword,
  _onAuthStateChanged,
  _signInWithEmailAndPassword,
  _signInWithPopup,
} from "fbase";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useState } from "react";

const Auth = () => {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");

  const onChange = ({ target: { name, value } }) => {
    setLoginForm({ ...loginForm, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      let data;
      if (newAccount) {
        //create account
        data = await _createUserWithEmailAndPassword({
          email: loginForm.email,
          password: loginForm.password,
        });
      } else {
        data = await _signInWithEmailAndPassword({
          email: loginForm.email,
          password: loginForm.password,
        });
      }
      console.log(data);
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  // 회원가입/로그인 버튼 토글
  const toggleAccount = () => setNewAccount(!newAccount);
  const onSocialClick = async (e) => {
    const {
      target: { name },
    } = e;
    console.log(name);
    let provider;
    if (name === "google") {
      provider = new GoogleAuthProvider();
    }
    if (name === "github") {
      provider = new GithubAuthProvider();
    }
    const data = await _signInWithPopup(provider);
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="text"
          placeholder="Email"
          required
          value={loginForm.email}
          onChange={onChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={loginForm.password}
          onChange={onChange}
        />
        <input
          type="submit"
          value={newAccount ? "Create New Account" : "Log in"}
        />
        {error}
      </form>
      <input
        type="button"
        value={newAccount ? "로그인 하러 가기" : "회원가입 하러 가기"}
        onClick={toggleAccount}
      />

      <div>
        <button name="google" onClick={onSocialClick}>
          Continue with Google
        </button>
        <button name="github" onClick={onSocialClick}>
          Continue with Github
        </button>
      </div>
    </div>
  );
};

export default Auth;
