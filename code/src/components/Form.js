import React, { useState } from 'react';
import './form.css';

// This component sets: 1. Text area input (+ message lenght conditions) / 2. Submit button / 3. Function to handle the message submit

export const Form = (props) => {
  const MESSAGES_URL = 'https://happythoughts-api-annesophie.herokuapp.com/';
  const [message, setMessage] = useState("");
  const [name, setName] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(MESSAGES_URL, {
      method: 'POST',
      body: JSON.stringify({ message, name }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => { console.log("error"); alert('Give it a try again ❤️', error) })
  }

  return (
    <form className="formContainer">
      <p>What's making you happy right now?</p>
      <textarea
        value={message}
        placeholder="Type your happy thought here..."
        autoFocus
        required
        rows="4"
        onChange={(event) => { setMessage(event.target.value) }}>
      </textarea>
      <div className="text-length">
        <p className={message.length < 5 || message.length > 140 ? "red" : "green"}>{message.length}</p><p>/140</p>
      </div>
      <p>Who are you?</p>
      <textarea
        value={name}
        placeholder="Type your name here..."
        rows="1"
        onChange={(event) => { setName(event.target.value) }}>
      </textarea>
      <div>
        <button className="submitButton" type="submit" onClick={handleSubmit} disabled={message.length < 5 || message.length > 140 ? true : false}>
          <span role="img" aria-label="white heart">🤍</span>
          Send Happy Thought!
          <span role="img" aria-label="white heart"> 🤍</span>
        </button>
      </div>
    </form>
  )
}