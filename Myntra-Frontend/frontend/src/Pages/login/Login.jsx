import { useState, useContext } from "react";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../Contexts/AuthContext";
import { useToast } from "@chakra-ui/react";
import "./Login.css";

const Login = () => {
  const [userDetails, setUserDetails] = useState({ email: "", pass: "" });
  const [showPassword, setShowPassword] = useState(false); 
  const { setIsAuth, setUser } = useContext(Context);
  const toast = useToast();
  const navigate = useNavigate();

  const handleUserDetails = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLoginUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://myntra-app-backend.vercel.app/users/login",
        userDetails,
        { withCredentials: true }
      );
      console.log(response.data.ACCESS_TOKEN);
      console.log(response);
      if (response.data.msg === "Login Successful") {
        setIsAuth(true);
        setUser(response.data.user.username);
        localStorage.setItem("setIsAuth", true);
        localStorage.setItem("setUser", response.data.user.username);
        // alert("Login Successful ")
        toast({
          title: "Login Successful",
          description: "You have been logged in successfully",
          status: "success",
          duration: 5000,
          position: "top",
        });
        navigate("/");
      } else if (response.data.msg === "Register first or Wrong crendential") {
        toast({
          title: "Not Register",
          description: "Please register first or enter correct credentials",
          status: "error",
          isClosable: true,
          position: "top",
        });
      }
    } catch (error) {
      console.log(error);
      if (error.response.data === "User not found") {
        toast({
          title: "User not found",
          description: "Please signup first or enter correct credentials",
          status: "error",
          isClosable: true,
          position: "top",
        });
      }
    }
  };

  return (
    <div className="login">
      <div className="loginContainer">
        <div className="loginImage">
          <img
            src="https://th.bing.com/th/id/R.87e87fa8cb1c4d332a64470d5c3acd89?rik=vuWahGaWKYN5CQ&riu=http%3a%2f%2fdli-eduventure.um.ac.id%2fassets%2fimg%2flogin.png&ehk=hPJNQY6rdxBzsCPJa9ahwTJgf6KEPNQdNr1lfqo1NTk%3d&risl=&pid=ImgRaw&r=0"
            alt=""
          />
        </div>
        <div className="loginDetail">
          <div>
            <h3 style={{fontSize:"30px",fontWeight:"bold"}}>LOGIN HERE</h3>
          </div>
          <div className="formInput">
            <form onSubmit={handleLoginUser}>
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
                  className="loginInput"
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
                New User? <Link to="/signup">Signup</Link>.
              </p>
              <button type="submit" className="loginBtn">SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
