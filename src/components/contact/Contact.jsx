import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b4f0956a-1019-496d-829e-ef16ece45610");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setTimeout(() => {
        setResult("");
      }, 3000);
    } else {
      console.log("Error", data);
      setResult(data.message);
      setTimeout(() => {
        setResult("");
      }, 3000);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="Message" />
        </h3>
        <p>
          We value your inquiries and feedback at our University. Please feel
          free to reach out to us with any questions or concerns, and our team
          will get back to you promptly.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="Mail" />
            contact@university.com
          </li>
          <li>
            <img src={phone_icon} alt="Contact" />
            +91 6524589354
          </li>
          <li>
            <img src={location_icon} alt="Location" />
            #52 Abc Colony,Delhi <br /> India
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            required
          />
          <label>Mobile Number</label>
          <input
            type="text"
            placeholder="Enter your Mobile Number"
            name="phone"
            required
          />
          <label>Write your message</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn ">
            Submit Now
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
