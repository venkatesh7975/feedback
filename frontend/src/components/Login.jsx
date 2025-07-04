import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function onFormLogin(e) {
    e.preventDefault();
    // email is unique ,password is storng
    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }
    //axios post request
    const response = await axios.post("http://localhost:3000/login", {
      email,
      password,
    });
    //store token in localstorage
    localStorage.setItem("token", response.data);
    console.log(response.data);
    navigate("/feedback");
  }
  function onEmailChange(e) {
    setEmail(e.target.value);
  }
  function onPasswordChange(e) {
    setPassword(e.target.value);
  }
  return (
    <div>
      <form onSubmit={onFormLogin}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={onEmailChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={onPasswordChange}
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Dont you have any account please <a href="/"> Register</a>
      </p>
    </div>
  );
}
