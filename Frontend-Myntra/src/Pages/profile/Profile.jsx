import React, { useState, useContext } from "react";
import { Context } from "../../Contexts/AuthContext";
import "./Profile.css";
import { Modal } from "antd";
import { Link } from "react-router-dom";
import Login from "../../Components/Login/Login"
const Profile = () => {
  const [modal2Open, setModal2Open] = useState(false);
  const { isAuth, setIsAuth } = useContext(Context)
  const { user, setUser } = useContext(Context)


  if(!isAuth){
    return <Login/>
  }


  const [formData, setFormData] = useState({
    name: user?data.name:""||"",
    phone:user?data.phone:""|| "",
    avatar:user?data.avatar:""|| "",
    gender:user?data.gender:""|| "",
    shipping:user?data.shiping:""|| "",
  });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault()
    let data = {};
    for (let key in formData) {
      if (formData[key] !== "") {
        data[key] = formData[key];
      }
    }
    setFormData({
      ...formData,
      name: formData.name,
      phone: formData.phone,
      avatar: formData.avatar,
      gender: formData.gender,
      shipping: formData.shipping,
    });
    console.log(data);
  };

  return (
    <div className="profile">
      <div className="profileCon">
        <div className="profileImage">
          <img src={user?.avatar} alt="avatar" />
          <button onClick={() => setModal2Open(true)} className="editProfileBtn">EDIT PROFILE</button>
        </div>
        <div className="profileDetails"> 

          <h3>Profile Details</h3>
          <div>
            <p>Full Name </p>
            <p>{user?data.name : "--"}</p>
          </div>
          <div>
            <p>Mobile Number</p>
            <p>{user?.mobile ||"--"}</p>
          </div>
          <div>
            <p>Email</p>
            <p>{user?.email ||"--"}</p>
          </div>
          <div>
            <p>Gender</p>
            <p>{user?.gender ||"--"}</p>
          </div>
          <div>
            <p>Shipping Details</p>
            <p>{user?.shipping||"--"}</p>
          </div>
          <Modal
            title="Edit your personal details"
            open={modal2Open}
            footer={null}
            onCancel={() => setModal2Open(false)}
            style={{ width: { sm: "100%" } }}
          >
            <form onSubmit={handleFormSubmit}>
              <input
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                type="text"
                placeholder="Full name"
                required
              />
              <br />
              <input
                name="phone"
                value={formData.phone}
                onChange={handleFormChange}
                type="tel"
                required
                placeholder="Enter phone number"
              />
              <br />
              <input
                name="avatar"
                value={formData.avatar}
                onChange={handleFormChange}
                type="url"
                required
                placeholder="Paste avatar link"
              />
              <br />
              <input
                name="shipping"
                value={formData.shipping}
                onChange={handleFormChange}
                type="text"
                required
                placeholder="Shipping details"
              />
              <br />
              <select name="gender" onChange={handleFormChange}>
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Others</option>
              </select>
              <br />

              <button type="submit" onClick={() => setModal2Open(true)}>Cancel</button>
              <button type="submit" onClick={() => setModal2Open(true)}>Save</button>

            </form>

          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Profile;