import React, { useState, useContext } from "react";

import Axios from "axios";
import Input from "../InputFeild";
import Button from "../Button";
import db from "../../firebase/config";
import { AuthContext } from "../../Context/Authorization";

export default function Login() {
  const { setIsLoggedIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const clearData = () => {
    setEmail("");
    setPassword("");
  };

  const handelSubmit = async ({ target }) => {
    if (!email.trim() || !password.trim()) {
      alert("error , you have empty value");
    } else {
      try {
        if (target.name === "server") {
          await Axios.post("https://auth-v1.herokuapp.com/api/v1/login", {
            email,
            password,
          });
          setIsLoggedIn(true);
        } else {
          await db.auth().signInWithEmailAndPassword(email, password);
        }
      } catch (e) {
        if (e.response) {
          setError(e.response.statusText);
        } else {
          setError("Incorrect username or password");
        }
      }
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Input
        type="email"
        inputName="email"
        handelChange={({ target: { value } }) => setEmail(value)}
        placeholder="enter your email"
        value={email}
      />
      <Input
        type="password"
        inputName="password"
        handelChange={({ target: { value } }) => setPassword(value)}
        placeholder="enter your password"
        value={password}
      />

      <Button btnName="server" handelClick={handelSubmit}>
        login server
      </Button>
      <Button btnName="firebase" handelClick={handelSubmit}>
        login with firebase
      </Button>
      <Button btnName="reset" type="reset" handelClick={clearData}>
        reset
      </Button>
      {error&& <div style={{color:'red'}}>{error}</div>}
    </form>
  );
}
