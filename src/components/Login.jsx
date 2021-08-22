import React from 'react'
import { Link } from 'react-router-dom'
import './signin.css'

function Login() {


    return (
        <>
            <div className="sign-in">
                <div className="sign-in-container">
                    <h1 className="text-primary">Sign In </h1>
                    <div className="sign-in-model">
                        {/* <h3>Sign Up</h3> */}
                        <form >
                            <label >Email</label>
                            <div className="input-container">
                                <i className="fa fa-envelope icon"></i>
                                <input className="input-field" type="text" placeholder="Email" name="email" />
                            </div>
                            <label >Password</label>
                            <div className="input-container">
                                <i className="fa fa-key icon"></i>
                                <input className="input-field" type="password" placeholder="Password" name="psw" />
                            </div>

                            <div className="">
                                <button className="btn color-primary" style={{ width: '100%' }}>Login</button>
                                <p>Not Registered? <Link to="/register"> <span>Sign Up</span> </Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
