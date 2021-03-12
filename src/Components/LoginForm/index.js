import React, { useState } from "react";

// import Axios from "axios";
import Input from "../InputFeild";
import Button from "../Button";
import db from "../../firebase/config";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const clearData = () => {
    setEmail("");
    setPassword("");
  };

  const handelSubmit = async () => {
    if (!email.trim() || !password.trim()) {
      alert("error , you have empty value");
    } else {
      try {
        // await Axios.post(
        //   "https://auth-v1.herokuapp.com/api/v1/login",
        //   { email, password },
        //   { headers: { "Access-Control-Allow-Origin": "*" } }
        // );
        db.auth().signInWithEmailAndPassword(email, password)
    .catch((error) => {
      console.error('Incorrect username or password');
    });
        console.log(111111111)
      } catch (e) {
        console.log(e.response,1111111111);
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

      <Button btnName="submit" handelClick={handelSubmit}>
        submit info
      </Button>
      <Button btnName="reset" type="reset" handelClick={clearData}>
        reset
      </Button>
    </form>
  );
}
