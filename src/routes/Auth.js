import {
  _createUserWithEmailAndPassword,
  _signInWithEmailAndPassword,
} from "fbase";
import React, { useEffect, useState } from "react";

const Auth = () => {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [newAccount, setNewAccount] = useState(false);

  const onChange = ({ target: { name, value } }) => {
    setLoginForm({ ...loginForm, [name]: value });
  };

  useEffect(() => {
    console.log(loginForm);
  }, [loginForm]);

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
    }
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
      </form>
      <div>
        <button>Continue with Google</button>
        <button>Continue with Github</button>
      </div>
    </div>
  );
};

export default Auth;
