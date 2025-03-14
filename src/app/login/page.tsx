import React from 'react'
import "./style.css";

import Footer_v1 from "@/components/footer/Footer_v1";
import Navbar_v1 from "@/components/navbar/Navbar_v1";

export default function login() {
    return (
        <>  
            <Navbar_v1/>
                <div className="login-page">
                    <div className="form">
                        <h1> login</h1>
                        <form className="register-form">
                            <input type="text" placeholder="name" />
                            <input type="password" placeholder="password" />
                            <input type="text" placeholder="email address" />
                            <button>create</button>
                            <p className="message">Already registered? <a href="#">Sign In</a></p>
                        </form>
                        <form className="login-form">
                            <input type="text" placeholder="username" />
                            <input type="password" placeholder="password" />
                            <button>login</button>
                            <p className="message">Not registered? <a href="/academy/signup">Create an account</a></p>
                        </form>
                    </div>
                </div>
            <Footer_v1/>
        </>
    )
}
