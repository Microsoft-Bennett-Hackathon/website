// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./SignUp.css";
// import Modal from "./Modal";
// import Carousel from "./Carousel";

// const SignUpPage = () => {
//   const [step, setStep] = useState(1); // Step tracker
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const [extraData, setExtraData] = useState({
//     age: "",
//     weight: "",
//     height: "",
//     bodyFat: null,
//   });

//   const navigate = useNavigate();

//   const handleFormDataChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleExtraDataChange = (e) => {
//     const { name, value } = e.target;

//     // Ensure age and weight cannot be negative
//     if ((name === "age" || name === "weight") && value < 0) {
//       alert(`${name} cannot be negative!`);
//       return;
//     }

//     setExtraData({ ...extraData, [name]: value });
//   };

//   const handleSignUp = async () => {
//     try {
//       // Send data to backend
//       const response = await axios.post("http://localhost:5000/api/auth/signup", {
//         ...formData,
//         extra: extraData,
//       });
//       alert(response.data.message || "Sign-up successful!");
//       navigate("/login"); // Redirect to login
//     } catch (error) {
//       alert(error.response?.data?.message || "Sign-up failed.");
//     }
//   };

//   return (
//     <div className="auth-container">
//       {/* Step 1: Basic Details */}
//       {step === 1 && (
//         <form className="auth-form">
//           <h1 className="auth-title">Sign Up</h1>
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={formData.name}
//             onChange={handleFormDataChange}
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleFormDataChange}
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleFormDataChange}
//             required
//           />
//           <div className="navigation-buttons">
//             <button type="button" className="auth-button" onClick={() => setStep(2)}>
//               Next
//             </button>
//           </div>
//         </form>
//       )}

//       {/* Step 2: Additional Details */}
//       {step === 2 && (
//         <Modal onClose={() => setStep(1)}>
//           <h2>Enter Additional Details</h2>
//           <input
//             type="number"
//             name="age"
//             placeholder="Age"
//             value={extraData.age}
//             onChange={handleExtraDataChange}
//             required
//           />
//           <input
//             type="number"
//             name="weight"
//             placeholder="Weight (kg)"
//             value={extraData.weight}
//             onChange={handleExtraDataChange}
//             required
//           />
//           <input
//             type="number"
//             name="height"
//             placeholder="Height (cm)"
//             value={extraData.height}
//             onChange={handleExtraDataChange}
//             required
//           />
//           <div className="navigation-buttons">
//             <button type="button" className="auth-button" onClick={() => setStep(1)}>
//               Back
//             </button>
//             <button type="button" className="auth-button" onClick={() => setStep(3)}>
//               Next
//             </button>
//           </div>
//         </Modal>
//       )}

//       {/* Step 3: Body Fat and Submission */}
//       {step === 3 && (
//         <Carousel
//           onSelect={(bodyFat) => setExtraData({ ...extraData, bodyFat })}
//           onFinish={handleSignUp}
//         >
//           <div className="navigation-buttons">
//             <button type="button" className="auth-button" onClick={() => setStep(2)}>
//               Back
//             </button>
//             <button type="button" className="auth-button" onClick={handleSignUp}>
//               Sign Up
//             </button>
//           </div>
//         </Carousel>
//       )}
//     </div>
//   );
// };

// export default SignUpPage;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./SignUp.css";
import Modal from "./Modal";
import Carousel from "./Carousel";

const SignUpPage = () => {
  const [step, setStep] = useState(1); // Step tracker
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    weight: "",
    height: "",
    bodyFat: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Ensure age and weight are not negative
    if ((name === "age" || name === "weight") && value < 0) {
      alert(`${name} cannot be negative!`);
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = async () => {
    try {
<<<<<<< HEAD
      // Send form data to backend
      const response = await axios.post("http://localhost:5000/api/auth/signup", formData);
=======
      const response = await axios.post(
        "http://localhost:5000/api/auth/signup",
        formData
      );
>>>>>>> bd679e510e96ba43edb9c50ce448b43b86f6389c
      alert(response.data.message || "Sign-up successful!");
      navigate("/login"); // Redirect to login page
    } catch (error) {
      alert(error.response?.data?.message || "Sign-up failed.");
    }
  };

  return (
    <div className="auth-container">
      {/* Step 1: Basic Details */}
      {step === 1 && (
        <form className="auth-form">
          <h1 className="auth-title">Sign Up</h1>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
<<<<<<< HEAD
          <div className="navigation-buttons">
            <button type="button" className="auth-button" onClick={() => setStep(2)}>
              Next
            </button>
          </div>
=======
          <button type="button" className="auth-button " onClick={handleNext}>
            Next
          </button>
>>>>>>> bd679e510e96ba43edb9c50ce448b43b86f6389c
        </form>
      )}

      {/* Step 2: Additional Details */}
      {step === 2 && (
<<<<<<< HEAD
        <Modal onClose={() => setStep(1)}>
          <h2>Enter Additional Details</h2>
=======
        <Modal onClose={handleNext}>
          <h2 className="font-bold text-2xl text-white">
            <span className="text-[#FF0000]">Enter</span> Additional Details
          </h2>
>>>>>>> bd679e510e96ba43edb9c50ce448b43b86f6389c
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="weight"
            placeholder="Weight (kg)"
            value={formData.weight}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="height"
            placeholder="Height (cm)"
            value={formData.height}
            onChange={handleChange}
            required
          />
<<<<<<< HEAD
          <div className="navigation-buttons">
            <button type="button" className="auth-button" onClick={() => setStep(1)}>
              Back
            </button>
            <button type="button" className="auth-button" onClick={() => setStep(3)}>
              Next
            </button>
          </div>
=======
          <button type="button" className="auth-button " onClick={handleNext}>
            Next
          </button>
>>>>>>> bd679e510e96ba43edb9c50ce448b43b86f6389c
        </Modal>
      )}

      {/* Step 3: Body Fat and Submission */}
      {step === 3 && (
        <Carousel
          onSelect={(bodyFat) => setFormData({ ...formData, bodyFat })}
          onFinish={handleSignUp}
        >
          <div className="navigation-buttons">
            <button type="button" className="auth-button" onClick={() => setStep(2)}>
              Back
            </button>
            <button type="button" className="auth-button" onClick={handleSignUp}>
              Sign Up
            </button>
          </div>
        </Carousel>
      )}
    </div>
  );
};

export default SignUpPage;
