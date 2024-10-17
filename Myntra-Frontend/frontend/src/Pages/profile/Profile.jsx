import { useState, useContext } from "react";
import { Context } from "../../Contexts/AuthContext";
import "./Profile.css";
import { Modal, message } from "antd";
import Login from "../../Components/Login/Login";

const Profile = () => {
  const { isAuth, user, setUser } = useContext(Context);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    phone: user?.phone || "",
    avatar: user?.avatar || "",
    gender: user?.gender || "",
    shipping: user?.shipping || "",
  });
  const [modal2Open, setModal2Open] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  if (!isAuth) {
    return <Login />;
  }

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setFormData((prevData) => ({ ...prevData, avatar: fileReader.result }));
      };
      fileReader.readAsDataURL(file);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let updatedData = { ...formData };

    if (!selectedFile) {
      updatedData.avatar = user.avatar; // Preserve the existing avatar if no new file is selected
    }

    setUser((prevUser) => ({
      ...prevUser,
      ...updatedData,
    }));

    message.success("Profile updated successfully!");
    setModal2Open(false);
  };

  return (
    <div className="profile">
      <div className="profileCon">
        <h2 style={{ textAlign: "center", color: "Highlight", fontWeight: "bold", fontSize: "1.5rem" }}>
          Create Your Profile
        </h2>
        <div className="profileImage">
          <img src={formData.avatar || "default-avatar-url"} alt="" />
          <button
            onClick={() => setModal2Open(true)}
            className="editProfileBtn"
          >
            EDIT PROFILE
          </button>
        </div>
        <div className="profileDetails">
          <h3>Profile Details</h3>
          <div>
            <p>Full Name</p>
            <p>{user?.name || "--"}</p>
          </div>
          <div>
            <p>Mobile Number</p>
            <p>{user?.phone || "--"}</p>
          </div>
          <div>
            <p>Email</p>
            <p>{user?.email || "--"}</p>
          </div>
          <div>
            <p>Gender</p>
            <p>{user?.gender || "--"}</p>
          </div>
          <div>
            <p>Shipping Details</p>
            <p>{user?.shipping || "--"}</p>
          </div>
        </div>
        <Modal
          title="Edit your personal details"
          open={modal2Open}
          footer={null}
          onCancel={() => setModal2Open(false)}
        >
          <form onSubmit={handleFormSubmit} className="profileForm">
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
              name="email"
              value={formData.email}
              onChange={handleFormChange}
              type="email"
              required
              placeholder="Enter email address"
            />
            <br />
            <input
              type="file"
              onChange={handleFileChange}
              accept="image/*"
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
            <select
              name="gender"
              value={formData.gender}
              onChange={handleFormChange}
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Others</option>
            </select>
            <br />
            <div className="modalActions">
              <button
                type="button"
                onClick={() => setModal2Open(false)}
                className="cancelBtn"
              >
                Cancel
              </button>
              <button type="submit" className="saveBtn">
                Save
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default Profile;
