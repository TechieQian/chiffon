import React, { useState } from "react";
import styles from "./styles/collab.module.scss";
import Captcha from "./Captcha";

interface CollabProps {}

function Collab(props: CollabProps) {
  const [captcha, setCaptcha] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function validateButton() {
    return name && email && message && captcha && !loading;
  }

  function onSend() {
    setLoading(true);
    const url = "https://cifn5gj1ya.execute-api.us-east-2.amazonaws.com/prod/";
    let payload = { name, email, message };
    fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload), // body data type must match "Content-Type" header
    })
      .then((res) => {
        setLoading(false);
        alert("Thank you for your message!");
      })
      .catch((err) => console.error(err));
  }
  return (
    <section className={styles.collab}>
      <div className={styles.form}>
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-user"></i>
            </span>
          </p>
        </div>

        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
          </p>
        </div>

        <div className="field">
          <div className="control">
            <textarea
              className="textarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write something nice!"
            ></textarea>
          </div>
        </div>

        <Captcha onVerify={setCaptcha} style={{ marginBottom: "15px" }} />
        <div className="field is-grouped">
          <div className="control">
            <button
              onClick={onSend}
              disabled={!validateButton()}
              className={`button is-link ${loading && "is-loading"}`}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Collab;
