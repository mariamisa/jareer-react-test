import React, { useState } from "react";

import Input from "../InputFeild";
import Button from "../Button";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const clearData = () => {
    setEmail("");
    setMobile("");
    setPassword("");
    setUsername("");
    setConfirmPassword("");
  };

  const handelSubmit = () => {
    if (
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim() ||
      !username.trim() ||
      !mobile.trim()
    ) {
      alert("error , you have empty value");
    } else if (password !== confirmPassword) {
      alert("password and confirmed password doesn't match");
    } else {
      //axios register
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Input
        type="text"
        inputName="username"
        handelChange={({ target: { value } }) => setUsername(value)}
        placeholder="enter your name"
        value={username}
      />
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
      <Input
        type="password"
        inputName="confirmPassword"
        handelChange={({ target: { value } }) => setConfirmPassword(value)}
        placeholder="enter confirm password"
        value={confirmPassword}
      />
      <Input
        type="text"
        inputName="mobile"
        handelChange={({ target: { value } }) => setMobile(value)}
        placeholder="enter mobile"
        value={mobile}
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
