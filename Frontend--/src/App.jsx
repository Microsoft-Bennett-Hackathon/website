import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import WebCam from './Pages/WebCam/Webcam';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/camera" element={<WebCam />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
