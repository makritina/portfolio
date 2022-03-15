import React, { useState, useRef } from "react";
import "./style.scss";
import emailjs from "emailjs-com";

export default function Contact(props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const handleSubmit = (e) => {
    setEmail("");
    setName("");
    setMessage("");
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9qzpbzr",
        "template_buggztk",
        form.current,
        "HdfiaeovpkTpseEHZ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact">
      <div className="wrap">
        <form
          className="contact100-form validate-form"
          ref={form}
          onSubmit={handleSubmit}
        >
          <span className="contact100-form-title">Get in touch</span>

          <div
            className="wrap-input100 validate-input"
            data-validate="Name is required"
          >
            <input
              className="input100"
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <span className="focus-input100"></span>
            <span className="symbol-input100">
              <i className="fa fa-user" aria-hidden="true"></i>
            </span>
          </div>

          <div
            className="wrap-input100 validate-input"
            data-validate="Valid email is required: ex@abc.xyz"
          >
            <input
              className="input100"
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="focus-input100"></span>
            <span className="symbol-input100">
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </span>
          </div>

          <div
            className="wrap-input100 validate-input"
            data-validate="Message is required"
          >
            <textarea
              className="input100"
              name="message"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <span className="focus-input100"></span>
          </div>

          <div className="container-contact100-form-btn">
            <button type="submit" className="contact100-form-btn">
              Send
            </button>
          </div>
        </form>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="wave "
          viewBox="0 0 1440 320"
        >
          <path
            fill="#F34BB3"
            fillOpacity="1"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
