import React, { useState } from "react";

import Input from "../InputFeild";
import Button from "../Button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const clearData = () => {
    setEmail("");
    setPassword("");
  };

  const handelSubmit = () => {
    if (!email.trim() || !password.trim()) {
      alert("error , you have empty value");
    } else {
      //axios register
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
