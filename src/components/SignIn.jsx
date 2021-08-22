import React from 'react'
import './signin.css'

function SignIn() {


    return (
        <>
            <div className="sign-in">
                <div className="sign-in-container">
                    <h1 className="text-primary">Create New Account</h1>
                    <div className="sign-in-model">
                        {/* <h3>Sign Up</h3> */}
                        <form >
                            <label >Username</label>
                            <div className="input-container" >
                                <i className="fa fa-user icon"></i>
                                <input className="input-field" type="text" placeholder="Username" name="usrnm" />
                            </div>
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
                            <label >Confirm Password</label>
                            <div className="input-container">
                                <i className="fa fa-key icon"></i>
                                <input className="input-field" type="password" placeholder="Confirm Password" name="psw" />
                            </div>
                            <div className="">
                                <button className="btn color-primary" style={{ width: '100%' }}>Create</button>
                                <p>Already have account? <span>Sign In</span></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SignIn
