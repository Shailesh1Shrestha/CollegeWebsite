import { useState } from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png"
import mail_icon from "../../assets/mail-icon.png"
import phone_icon from "../../assets/phone-icon.png"
import location_icon from "../../assets/location-icon.png"
import white_arrow from "../../assets/white-arrow.png"

const Contact = () => {

    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1b0bfca3-a8e7-44c7-8697-6890581a0483");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      setResult("Email Send Successfully");
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
          sapiente expedita neque soluta dolores, a, sunt earum suscipit
          consectetur rerum, impedit dolore inventore fuga quia quidem dolor
          accusantium nihil animi.
        </p>
        <ul>
          <li><img src={mail_icon} alt="" />Contact@demo.dev</li>
          <li><img src={phone_icon} alt="" />+977-9811111111</li>
          <li> <img src={location_icon} alt="" />
            77 Massachusetts Ave, Cambridge <br /> MA 02139, United States
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your name</label>
                <input type="text" name="name" placeholder="Enter your name" required/>
            <label>Phone Number</label>
                <input type="tel" name="phone" placeholder="Enter your mobile number" required/>
            
            <label> Write your message here</label>
            <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>
            <button type="submit" className="btn dark-btn">Submit Now <img src = {white_arrow} alt = "" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
