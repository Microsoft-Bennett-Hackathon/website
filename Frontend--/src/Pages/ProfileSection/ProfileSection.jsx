// import React, { useState } from "react";
// import "./ProfileSection.css";
// import Charts from "./Charts/Charts";
// import Navbar from "../../Components/Navbar/Navbar";
// function ProfileSection() {
//   const [userData, setUserData] = useState({
//     name: "Nikhil Sai Manam",
//     email: "nigelgay056@gmail.com",
//     phone: "9876543221",
//     weight: 90,
//     height: 189,
//   });

//   const [isEditing, setIsEditing] = useState(false);
//   const [saveMessage, setSaveMessage] = useState("");

//   const calculateBMI = () => {
//     const heightInMeters = userData.height / 100;
//     return (userData.weight / (heightInMeters * heightInMeters)).toFixed(2);
//   };

//   const handleInputChange = (e, field) => {
//     setUserData({ ...userData, [field]: e.target.value });
//   };

//   const handleEditClick = () => {
//     setIsEditing(true);
//     setSaveMessage(""); // Reset message when editing starts
//   };

//   const handleSaveClick = () => {
//     setIsEditing(false);
//     setSaveMessage("✅ Changes saved successfully!"); // Show success message
//     setTimeout(() => setSaveMessage(""), 3000); // Hide after 3 seconds
//   };

//   return (
 
  

       
//     <div className="profile-page">
//         <Navbar />
//         <br />
//       {/* Main content container */}
//       <div className="profile-content">
//         {/* Header inside the profile-content */}
//         <header className="profile-header">
//           <h1>Welcome Nikhil Sai ,</h1>
//         </header>

//         {/* Left column: user details + current plan + edit button */}
//         <div className="left-section">
//           {/* User info fields */}
//           <div className="profile-info">
//             <div className="info-item">
//               <label>Name</label>
//               <input
//                 type="text"
//                 value={userData.name}
//                 onChange={(e) => handleInputChange(e, "name")}
//                 disabled={!isEditing}
//               />
//             </div>

//             <div className="info-item">
//               <label>Email</label>
//               <input
//                 type="email"
//                 value={userData.email}
//                 onChange={(e) => handleInputChange(e, "email")}
//                 disabled={!isEditing}
//               />
//             </div>

//             <div className="info-item">
//               <label>Phone</label>
//               <input
//                 type="text"
//                 value={userData.phone}
//                 onChange={(e) => handleInputChange(e, "phone")}
//                 disabled={!isEditing}
//               />
//             </div>

//             <div className="info-row">
//               <div>
//                 <label>Weight</label>
//                 <input
//                   type="number"
//                   value={userData.weight}
//                   onChange={(e) => handleInputChange(e, "weight")}
//                   disabled={!isEditing}
//                 />
//               </div>
//               <div>
//                 <label>Height</label>
//                 <input
//                   type="number"
//                   value={userData.height}
//                   onChange={(e) => handleInputChange(e, "height")}
//                   disabled={!isEditing}
//                 />
//               </div>
//               <div>
//                 <label >BMI</label>
//                 <p style={{padding:'5px 12px', borderRadius:'12px'}}>{calculateBMI()}</p>
//               </div>
//             </div>
//           </div>

//           {/* Current plan */}
//             <h2 style={{ color: "red", marginTop: "55px", fontSize:'2rem' }}>Current Plan</h2>
//           <div className="current-plan">
//             <p className="plan-title">3 months weight loss plan</p>
//             <div className="plan-details">
//               <p>Goal: Weight loss</p>
//               <p>Duration: 182 days</p>
//               <p>Level: Beginner</p>
//             </div>
//           </div>

//           <div className="edit-section" >
//             {!isEditing ? (
//               <button className="edit-button" onClick={handleEditClick}>
//                 EDIT
//               </button>
//             ) : (
//               <button className="save-button" onClick={handleSaveClick}>
//                 SAVE
//               </button>
//             )}
//             {saveMessage && <p className="save-message">{saveMessage}</p>}
//           </div>
//         </div>
//           {/* Edit/Save Button at bottom of left column */}

//         {/* Right column: avatar */}
//         <div className="profile-avatar">
//           <div className="avatar-box">
//             {/* You can place an actual img tag here if you have an avatar image */}
//           </div>
//         </div>
//       </div>
//        <br />
//        <br />
//        <br />
//       {/* Charts (below the profile-content) */}
//       <Charts />
//     </div>
//   );
// }

// export default ProfileSection;
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProfileSection.css";
import Charts from "./Charts/Charts";
import Userbg from "./Userbg";

function ProfileSection() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "99999999", // Manual field; not fetched from backend
    weight: "",
    height: "",
    profilePic: null, // This will store the profile picture object from backend
  });

  const [isEditing, setIsEditing] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");

  // Fetch the user profile on component mount
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // For now, we use the user's email as the identifier.
        const userId = "choo@gmail.com";
        const response = await axios.get(
          `http://localhost:5000/api/auth/profile?userId=${userId}`
        );
        const data = response.data;
        setUserData((prev) => ({
          ...prev,
          name: data.name,
          email: data.email,
          weight: data.weight,
          height: data.height,
          profilePic: data.profilePic, // { data: base64 string, contentType: "image/png", etc. }
        }));
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

  // Calculate BMI using weight and height from the fetched data
  const calculateBMI = () => {
    if (!userData.height || !userData.weight) return "";
    const heightInMeters = userData.height / 100;
    return (userData.weight / (heightInMeters * heightInMeters)).toFixed(2);
  };

  const handleInputChange = (e, field) => {
    setUserData({ ...userData, [field]: e.target.value });
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setSaveMessage(""); // Reset message when editing starts
  };

  const handleSaveClick = async () => {
    try {
      // Prepare the data to update (excluding the phone number)
      const updateData = {
        name: userData.name,
        email: userData.email,
        weight: userData.weight,
        height: userData.height,
        // You could also include other fields (e.g., bodyFat) if desired
      };

      // For testing, we use the same identifier (email) in the query string
      const userId = "choo@gmail.com";
      const response = await axios.put(
        `http://localhost:5000/api/auth/profile?userId=${userId}`,
        updateData
      );

      // Update the state with the returned data
      setUserData((prev) => ({
        ...prev,
        name: response.data.name,
        email: response.data.email,
        weight: response.data.weight,
        height: response.data.height,
        profilePic: response.data.profilePic,
      }));
      setIsEditing(false);
      setSaveMessage("✅ Changes saved successfully!");
      setTimeout(() => setSaveMessage(""), 3000);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  // Build the image source URL from the profilePic data if available
  let profilePicSrc = "";
  if (userData.profilePic && userData.profilePic.data && userData.profilePic.contentType) {
    profilePicSrc = `data:${userData.profilePic.contentType};base64,${userData.profilePic.data}`;
  }

  return (
    <div className="profile-page">
      <Userbg />
      <br />
      <br />
      <br />
      <br />
      <div className="profile-content">
        {/* Header */}
        <header className="profile-header">
          <h1>Welcome {userData.name ? userData.name : "User"},</h1>
        </header>

        {/* Left Column: User Details & Current Plan */}
        <div className="left-section">
          <div className="profile-info">
            <div className="info-item">
              <label>Name</label>
              <input
                type="text"
                value={userData.name}
                onChange={(e) => handleInputChange(e, "name")}
                disabled={!isEditing}
              />
            </div>
            <div className="info-item">
              <label>Email</label>
              <input
                type="email"
                value={userData.email}
                onChange={(e) => handleInputChange(e, "email")}
                disabled={!isEditing}
              />
            </div>
            <div className="info-item">
              <label>Phone</label>
              <input
                type="text"
                value={userData.phone}
                disabled
              />
            </div>
            <div className="info-row">
              <div>
                <label>Weight</label>
                <input
                  type="number"
                  value={userData.weight}
                  onChange={(e) => handleInputChange(e, "weight")}
                  disabled={!isEditing}
                />
              </div>
              <div>
                <label>Height</label>
                <input
                  type="number"
                  value={userData.height}
                  onChange={(e) => handleInputChange(e, "height")}
                  disabled={!isEditing}
                />
              </div>
              <div>
                <label>BMI</label>
                <p style={{ padding: "5px 12px", borderRadius: "12px" }}>
                  {calculateBMI()}
                </p>
              </div>
            </div>
          </div>

          {/* Current Plan */}
          <h2 style={{ color: "red", marginTop: "55px", fontSize: "2rem" }}>
            Current Plan
          </h2>
          <div className="current-plan">
            <p className="plan-title">3 months weight loss plan</p>
            <div className="plan-details">
              <p>Goal: Weight loss</p>
              <p>Duration: 182 days</p>
              <p>Level: Beginner</p>
            </div>
          </div>

          {/* Edit / Save Buttons */}
          
        </div>

        {/* Right Column: Avatar */}
        <div className="profile-avatar">
          <div className="avatar-box">
            {profilePicSrc ? (
              <img
                src={profilePicSrc}
                alt="Profile"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            ) : (
              <p>No Avatar</p>
            )}
          </div>
          <div className="edit-section">
            {!isEditing ? (
              <button className="edit-button" onClick={handleEditClick}>
                EDIT
              </button>
            ) : (
              <button className="save-button" onClick={handleSaveClick}>
                SAVE
              </button>
            )}
            {saveMessage && <p className="save-message">{saveMessage}</p>}
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <Charts />
    </div>
  );
}

export default ProfileSection;
