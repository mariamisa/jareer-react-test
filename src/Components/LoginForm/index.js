import React, { useState } from "react";

import Axios from "axios";
import Input from "../InputFeild";
import Button from "../Button";
import axios from "axios";

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
        const { data } = await Axios.post('https://auth-v1.herokuapp.com/api/v1/login',{ email, password });
        console.log(data);
      }catch(e){
          console.log(e.response)
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
