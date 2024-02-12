import React, { useState,useContext,useEffect } from "react";
import axios from "axios";
import Cookies from 'js-cookie'
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../Contexts/AuthContext";

const Login = () => {

    const [userDetails, setUserDetails] = useState({ email: "", pass: "" })
    const { isAuth, setIsAuth } = useContext(Context)
    const { user, setUser } = useContext(Context)
    const nevigate = useNavigate()
    const handleUserDetails = (e) => {
        const { name, value } = e.target

        setUserDetails((userDetails) => ({
            ...userDetails,
            [name]: value
        }))
    }

    const handleLoginUser = async () => {
        try {
            let response = await axios.post("https://myntra-app-backend-production.up.railway.app/user/login", userDetails, { withCredentials: true })
            console.log(response.data.ACCESS_TOKEN)
            console.log(response)
            Cookies.set("ACCESS_TOKEN", response.data.ACCESS_TOKEN)
            if (response.data.msg == 'Login Successful') {
                alert("Login Successfully")
                nevigate("/")
                setIsAuth(!isAuth)
                setUser(!user)
            }
            if (response.data.msg == 'Register first or Wrong crendential') {
                alert("Register first or Wrong crendential")
            }

        } catch (error) {
            console.log(error)
            if (error.response.data == 'User not found') {
                alert("User not found Plz signup first")
            }
        }
    }


    return (
        <div className="login">
            <div className="loginContainer">
                <div className="loginImage">
                    <img src="https://myntraa-clone.netlify.app/assets/signup.jpg" alt="" />
                </div>
                <div className="loginDetail">
                    <div>
                        <h3>Login</h3>
                    </div>
                    <div>
                        <input
                            name="email"
                            value={userDetails.email}
                            onChange={handleUserDetails}
                            type="email"
                            required
                            placeholder="Enter email"
                        />
                        <input
                            name="pass"
                            value={userDetails.pass}
                            onChange={handleUserDetails}
                            type="password"
                            required:true
                            placeholder="Set a password"
                        />
                        <p>
                            New User ? <Link to="/signup">Signup .</Link>
                        </p>
                        <button type="submit" onClick={handleLoginUser}>
                            SUBMIT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;