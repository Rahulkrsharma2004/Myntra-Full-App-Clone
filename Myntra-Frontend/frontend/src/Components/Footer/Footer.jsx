// import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { MdCall, MdEmail, MdHome, MdModeComment } from "react-icons/md";
import { FaLinkedin, FaGithub, FaHeart } from "react-icons/fa";
import './Footer.css'

const footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="footerList">
          <h4>SHOPPING</h4>
          <ul>
            <li>
              <Link to="/">Take me home !</Link>
            </li>
            <li>
              <Link>All Products</Link>
            </li>
            <li>
              <Link>Men</Link>
            </li>
            <li>
              <Link>Women</Link>
            </li>
            <li>
              <Link>Kids</Link>
            </li>
            <li>
              <Link>Beauty</Link>
            </li>
          </ul>
        </div>
        <div className="footerList">
          <h4>USEFUL LINKS</h4>
          <ul>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/admin">Admin Panel</Link>
            </li>
            <li>
              <Link to="/bag">Bag</Link>
            </li>
            <li>
              <Link to="/wishlist">Wishlist</Link>
            </li>
            <li>
              <Link to="/orders">Orders</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </div>
        <div className="footerList">
          <h4>KEEP IN TOUCH</h4>
          <ul>
            <li>
              <p>
                <MdCall className="footerIcon" /> +91-8084906496
              </p>
            </li>
            <li>
              <p>
                <MdEmail className="footerIcon" />
                kumarrahulbasdiha@
              </p>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/rahul-kr-sharma-35a989280"
                target="blank"
              >
                <FaLinkedin className="footerIcon" />
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/Rahulkrsharma2004" target="blank">
                <FaGithub className="footerIcon" />
                Github
              </a>
            </li>
            
            <li>
              <a href="https://rahulkrsharma2004.github.io" target="blank">
                <MdHome className="footerIcon" />
                Portfolio
              </a>
            </li>
            <li>
              <p>
                <MdModeComment className="footerIcon" />
                Post and Blogs
              </p>
            </li>
          </ul>
        </div>
        <div className="footerList">
          <h4>ABOUT ME</h4>
          <ul>
            <li>
              <p>Rahul Kr Sharma</p>
            </li>
            <li>
              <p>Patna , Bihar</p>
            </li>
            
            <li>
              <p>MERN Stack Developer</p>
            </li>
            
            <li>
              <a
                href="https://drive.google.com/file/d/18K4GIBI1wiatSQrCazPWicrWehitUzvy/view"
                target="blank"
              >
                Resume
              </a>
            </li>
            <li>
              <h3
                href="https://github.com/piyush-agrawal6/Myntra-Frontend"
                target="blank"
              >
                <FaHeart className="footerIcon" /> Thank You !!
              </h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default footer;