import React, { useState } from 'react'
import ReactIframe from "react-iframe";
import emailjs from "@emailjs/browser";

function Contact() {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      e.target,
      process.env.REACT_APP_PUBLIC_KEY
    )
    .then(
      (result)=> {
        setStateMessage('Message Sent!');
        setIsSubmitting(false);
        setTimeout(()=>{
          setStateMessage(null)
        },5000); //hide Messsage after 5 seconds
      },
      (error)=> {
        setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
            setTimeout(()=> {
              setStateMessage(null);
            },5000)
      }
    );
    e.target.reset();
  }







  return (
    <div className="max-w-[1640px] m-auto px-4 py-3  ">
      <h1 className="text-4xl text-center font-bold text-orange-600 mb-6">
        Get in Touch
      </h1>
      <div className="grid lg:grid-cols-2">
        <div className=" ">
          {/* Google Map */}

          <ReactIframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15880.636174715723!2d-0.1759914!3d5.6901449!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9d91abd6eac9%3A0x478aec2a0cefe30d!2sSheldons%20Place!5e0!3m2!1sen!2sgh!4v1715410807543!5m2!1sen!2sgh"
            width="700"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Contact Form */}
        <div className="mt-7 ">
          <form action="">
            <div>
              <input
                type="text"
                name="user_name"
                placeholder="Enter your Name"
                className="w-full border border-black p-2 rounded-lg "
              />
            </div>
            <div className="grid grid-cols-2 space-x-2">
              <input
                type="email"
                name="user_email"
                placeholder="Enter your Email Address"
                className="border-black border p-2 rounded-lg mt-3 "
              />
              <input
                type="tel"
                placeholder="Enter your phone Number"
                className="border-black border p-2 rounded-lg mt-3"
              />
            </div>
            <div>
              <textarea
                placeholder="Enter your Message"
                className="border border-black w-full rounded-lg mt-3 p-2"
                rows={5}
                name="message"
              ></textarea>
            </div>
            <input
              value="Send"
              disabled={isSubmitting}
              type="submit"
              className="bg-orange-500 w-full text-white p-2 rounded-full hover:bg-white hover:text-orange-500 hover:border border-orange-500 hover:transition-all hover:duration-75  cursor-pointer "
            />
            {stateMessage && <p>{stateMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact
