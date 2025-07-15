import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const AuthForm = () => {
    const [issignup, setIssignup] = useState(false)
    const [showpassword, setShowpassword] = useState(false)
    const [formdata, setFormdate] = useState({ email: "", password: "", confirm: "" })
    const [error, setError] = useState({})



    const togglemode = () => {
        setIssignup(!issignup)
        setFormdate({ email: "", password: "", confirm: "" });

    }
    const handlechange = (e) => {
        setFormdate(prev => ({
            ...prev, [e.target.name]: e.target.value
        }))
    }
    const validate = () => {
        const errs = {};
        if (!formdata.email.includes('@')) errs.email = "Plz Enter a Valid Email";
        if (formdata.password.length < 6) errs.password = "Plz Enter a six Digits Password ";
        if (issignup && formdata.password !== formdata.confirm) errs.confirm = "Password And Confirm Password Does'nt Match";
        return errs
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        const validateorserror = validate();
        setError(validateorserror);
        if (Object.keys(validateorserror).length === 0) {
            alert(issignup ? "Signup Successfull" : "Login Successfull");
            setFormdate({ email: "", password: "", confirm: "" });
        }
    }


















    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={handlesubmit} >
                <h2>{issignup ? "Signup" : "Login"}</h2>

                <div className="form-group">
                    <label>Email</label>
                    <input name="email" value={formdata.email} onChange={handlechange} />
                    {error.email && <span className='error'>{error.email}</span>}





                </div>

                <div className="form-group">
                    <label>Password</label>
                    <div className="password-toggle">
                        <input
                            type={showpassword ? "text" : "password"}
                            name="password"
                            value={formdata.password}
                            onChange={handlechange}
                        />
                        <span className='icon-btn' onClick={() => setShowpassword(!showpassword)}>
                            {showpassword ? <FaEyeSlash /> : <FaEye />}
                        </span>






                    </div>
                    {error.password && <span className='error'>{error.password}</span>}
                </div>
                {issignup && (
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            name="confirm"
                            value={formdata.confirm}
                            onChange={handlechange}




                        />
                        {error.confirm && <span className='error'>{error.confirm}</span>}



                    </div>
                )}


                <button type="submit" className="submit-btn">
                    {issignup ? "Signup" : "Login"}
                </button>
                <p>
                    {issignup ? "You have Already Account" : "You Dont have Acount"}
                    <span className='switch' onClick={togglemode} >
                        {issignup ? "Login" : "Signup"}
                    </span>
                </p>

            </form>
        </div>
    );
};

export default AuthForm;
