import React from 'react'
import { useState } from "react";

export default function Feedback() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  async function onFormSubmit(e) {
    e.preventDefault();
    //make a request to server post api ,localhost:3000/feedback
    const response = await axios.post("http://localhost:3000/feedback", {
      name,
      message,
    });
    console.log(response.data);
    alert(response.data);
  }
  function onNameChange(e) {
    setName(e.target.value);
  }

  function onMessageChange(e) {
    setMessage(e.target.value);
  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input type="text" placeholder="name" onChange={onNameChange} />
        <input
          type="text"
          placeholder="enter message"
          onChange={onMessageChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
