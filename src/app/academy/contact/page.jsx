"use client"

import React, {useState} from 'react';
import Navbar_v1 from "@/components/navbar/Navbar_v1";
import Footer_v1 from "@/components/footer/Footer_v1";
import { useMutation, gql } from '@apollo/client';

const Add_contact = gql`
mutation addcontact($name: String!, $email: String!, $subject: String!, $message: String!, $event_id: String!) {
  addcontact(name: $name, email: $email, subject: $subject, message: $message, event_id: $event_id) {
    id
    name
    email
  }
}

`;
export default function Contact() {
    const [addcontact, { loading, error, data }] = useMutation(Add_contact);
    const [name , setname] =useState("")
    const [email , setemail] =useState("")
    const [subject , setsubject] =useState("")
    const [message , setmessage] =useState("")

    const [successfully , setsuccessfully] =useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();

    
        try {
           const event_id = localStorage.getItem('event_id')
           console.log({ name, email ,subject , message ,event_id });
           
          const { data } = await addcontact({ variables: { name, email ,subject , message ,event_id } });
    
          // If successful, display success message
          setsuccessfully(`User ${data.addcontact.name} added successfully!`);
        } catch (err) {
          // If error occurs, display error message
          setsuccessfully(`Error: ${err.message}`);
        }
      };
      console.log(successfully);
      
    return (
        <>
        <Navbar_v1/>
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <h5 className="text-primary text-uppercase mb-3" style={{ letterSpacing: "5px" }}>Contact</h5>
                        <h1>Contact For Any Query</h1>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="contact-form bg-secondary rounded p-5">
                                <div id="success"></div>
                                <form onSubmit={handleSubmit} name="sentMessage" id="contactForm" noValidate>
                                    <div className="control-group">
                                        <input type="text" className="form-control border-0 p-4" name='name' id="name" value={name} onChange={(e)=> {setname(e.target.value)}} placeholder="Your Name" required />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="control-group">
                                        <input type="email" className="form-control border-0 p-4" name='email' id="email" placeholder="Your Email" value={email} onChange={(e)=> {setemail(e.target.value)}} required  />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="control-group">
                                        <input type="text" className="form-control border-0 p-4"name='subject' id="subject" placeholder="Subject" value={subject}  onChange={(e)=> {setsubject(e.target.value)}} required />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="control-group">
                                        <textarea className="form-control border-0 py-3 px-4" rows="5" name='message' id="message" placeholder="Message" value={message}  onChange={(e)=> {setmessage(e.target.value)} } required ></textarea>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="text-center">
                                        <button className="btn btn-primary py-3 px-5" type="submit">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <Footer_v1/>
        </>
    );
}