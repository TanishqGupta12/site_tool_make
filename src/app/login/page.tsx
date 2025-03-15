"use client"

import React, { useState , useEffect} from 'react'
import "./style.css";

import Footer_v1 from "@/components/footer/Footer_v1";
import Navbar_v1 from "@/components/navbar/Navbar_v1";

import { signIn } from "next-auth/react"

import { toast, ToastContainer } from 'react-toastify';
import toaster from "@/util/toaster";

export default function login() {

    const [event, setevent] = useState('');
    const [passwords, setPassword] = useState('');
    const [emails, setEmail] = useState('');


      useEffect(() => {
        const storedEventId = localStorage.getItem("event_id");
        if (storedEventId) setevent(storedEventId);
      }, []);

    const handleSignIn = async (e: any) => {
        e.preventDefault();
        const email = emails;
        const password = passwords;
        const current_event_id = event;
        const result = await signIn("credentials", {
            redirect: true,
            email,
            password,
            current_event_id,
        });
        if (result?.status != 200) {
            toaster(toast.error, `${result?.error}`)
        } else {
            toaster(toast.success, `login`)
        }
        
    }

    return (
        <>
            <Navbar_v1 />
            <div className="login-page">
                <div className="form">
                    <h1> login</h1>
                    <form onSubmit={handleSignIn} className="login-form">
                        <input type="email" name='email' placeholder="email" onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" name='password' placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                        <input type="hidden" name='current_event_id' value={event} onChange={(e) => setevent(e.target.value)} />
                        <button>login</button>
                        <p className="message">Not registered? <a href="/signup">Create an account</a></p>
                    </form>
                </div>
                <ToastContainer/>
            </div>
            <Footer_v1 />
        </>
    )
}
