import { useState } from "react";
import "./Signup.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    pass: "",
  });

  const [showPassword, setShowPassword] = useState(false); 
  const navigate = useNavigate();
  const toast = useToast();

  const handleUserDetails = (e) => {
    const { name, value } = e.target;

    setUserDetails((userDetails) => ({
      ...userDetails,
      [name]: value,
    }));
  };

  const handleRegisterUser = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post(
        "https://myntra-app-backend.vercel.app/users/register",
        userDetails,
        { withCredentials: true }
      );
      console.log(response);

      if (response.data.msg === "New user has been created") {
        toast({
          title: "Registration Successful",
          description: "You have successfully registered",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
        navigate("/login");
      } else if (response.data.error === "User with this email already exists") {
        toast({
          title: "Email Already Registered",
          description: "A user with this email already exists",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      } else if (response.data.error === "Invalid password format") {
        toast({
          title: "Invalid Password",
          description: "Your password should have 1 Uppercase and 1 Lowercase Letter, 1 Special Character, 1 Number, and at least 8 Characters",
          status: "warning",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      }
    } catch (error) {
      console.log(error.message);
      toast({
        title: "Registration Failed",
        description: "An error occurred while registering",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <div className="signup">
      <div className="signupContainer">
        <div className="signupImage">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/sign-up-4922762-4097209.png"
            alt="Signup"
          />
        </div>
        <div className="signupDetail">
          <div>
            <h3 style={{fontSize:"30px",fontWeight:"bold"}}>SIGNUP HERE</h3>
          </div>
          <div>
            <form onSubmit={handleRegisterUser}>
              <input
                className="loginInput"
                name="username"
                value={userDetails.username}
                onChange={handleUserDetails}
                type="text"
                required
                placeholder="Full name"
              />
              <input
                className="loginInput"
                name="email"
                value={userDetails.email}
                onChange={handleUserDetails}
                type="email"
                required
                placeholder="Enter email"
              />
              <div className="passwordContainer">
                <input
                  className="loginInput passwordInput"
                  name="pass"
                  value={userDetails.pass}
                  onChange={handleUserDetails}
                  required
                  type={showPassword ? "text" : "password"}
                  placeholder="Set a password"
                />
                <span
                  className="passwordToggleIcon"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              <p>
                Already a User? <Link to="/login">Login</Link>
              </p>
              <button type="submit"  className="signupBtn">CONTINUE</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
