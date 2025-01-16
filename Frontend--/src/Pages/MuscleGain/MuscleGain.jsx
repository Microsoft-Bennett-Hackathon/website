import React, { useState, useEffect } from 'react';
import './MuscleGain.css';

const MuscleGainPage = () => {
    const [userData, setUserData] = useState({
        name: '',
        currentWeight: '',
        targetWeight: '',
        target: ''
    });
    const [showTargetForm, setShowTargetForm] = useState(false);
    const [showRecommendations, setShowRecommendations] = useState(false);
    const [recommendations, setRecommendations] = useState({
        exercises: [],
        diet: []
    });

    const handleInputChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    };

    const handleTargetSubmit = () => {
        setShowTargetForm(true);
    };

    const handleFormSubmit = () => {
        // Based on target, fetch recommended exercises and diet
        setRecommendations({
            exercises: ['Push-ups', 'Squats', 'Pull-ups'],
            diet: ['High-protein meals', 'Protein shakes', 'Carb loading']
        });
        setShowRecommendations(true);
    };

    useEffect(() => {
        // Maybe perform API calls here or trigger animations when page loads
    }, []);

    return (
        <div className="muscle-gain-container">
            {/* <video autoPlay muted loop>
                <source src="Website\Frontend--\public\muscle\1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video> */}
            <h1 className="heading">
                Muscle Gain Plan for <span>{userData.name || 'User'}</span>
            </h1>

            <div className="form-container">
                {!showTargetForm ? (
                    <>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={userData.name}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            name="currentWeight"
                            placeholder="Current weight (kg)"
                            value={userData.currentWeight}
                            onChange={handleInputChange}
                        />
                        <button onClick={handleTargetSubmit}>Set Target</button>
                    </>
                ) : (
                    <div className="target-form">
                        <input
                            type="number"
                            name="targetWeight"
                            placeholder="Enter your target weight (kg)"
                            value={userData.targetWeight}
                            onChange={handleInputChange}
                        />
                        <select
                            name="target"
                            value={userData.target}
                            onChange={handleInputChange}
                        >
                            <option value="">Select Target</option>
                            <option value="muscleGain">Muscle Gain</option>
                            <option value="fatLoss">Fat Loss</option>
                        </select>
                        <button onClick={handleFormSubmit}>Submit</button>
                    </div>
                )}
            </div>

            {showRecommendations && (
                <div className="recommendations-container">
                    <h2>Recommended Plan:</h2>
                    <h3>Exercises</h3>
                    <ul>
                        {recommendations.exercises.map((exercise, index) => (
                            <li key={index}>{exercise}</li>
                        ))}
                    </ul>

                    <h3>Diet</h3>
                    <ul>
                        {recommendations.diet.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default MuscleGainPage;
