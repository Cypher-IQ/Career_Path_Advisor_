// frontend/src/App.js
import React, { useState, useEffect, useRef } from 'react';
import { getOptions } from './api';
import './styles.css';

function App() {
  const [educationLevel, setEducationLevel] = useState("");
  const [optionType, setOptionType] = useState("");
  const [options, setOptions] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const resultsRef = useRef(null);
  
  // Add education levels from your CSV
  const educationLevels = [
    "3rd Class",
    "4th Class",
    "5th Class",
    "6th Class",
    "7th Class",
    "8th Class",
    "9th Class",
    "10th Fail",
    "10th Completed",
    "Diploma Fail",
    "Diploma Pass"
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset animations if already showing results
    if (showResults) {
      setShowResults(false);
      setTimeout(() => {
        animateResults();
      }, 300); // Wait for hide animation to complete
    } else {
      animateResults();
    }
  };
  
  const animateResults = async () => {
    if (educationLevel && optionType) {
      // Show loading animation
      setShowResults(true);
      document.documentElement.style.setProperty('--loading', 'true');
      
      // Get options from API
      const result = await getOptions(educationLevel, optionType);
      setOptions(result);
      
      // Trigger animations after results are loaded
      setTimeout(() => {
        document.documentElement.style.setProperty('--loading', 'false');
        
        if (resultsRef.current) {
          // Add entrance animation to container first
          resultsRef.current.classList.add('container-animate');
          
          // Then animate each option with a staggered delay
          const optionElements = resultsRef.current.querySelectorAll('li');
          optionElements.forEach((option, index) => {
            setTimeout(() => {
              option.classList.add('animate-in');
            }, 500 + (index * 150)); // Start after container animation with staggered delay
          });
        }
      }, 600); // Give API time to respond + animation buffer
    }
  };

  return (
    <div className="container">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
  <img src="/logo.png" alt="Logo" style={{ height: '40px', width: '40px', objectFit: 'contain' }} />
  <h1 style={{ fontSize: '2rem', color: '#4a90e2', fontWeight: 'bold', margin: 0 }}>
    Career & Study Advisor
  </h1>
</div>

      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Education Level: </label>
          <select 
            value={educationLevel}
            onChange={(e) => setEducationLevel(e.target.value)}
            required
            className="form-select"
          >
            <option value="">-- Select --</option>
            {educationLevels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Option Type: </label>
          <select 
            value={optionType}
            onChange={(e) => setOptionType(e.target.value)}
            required
            className="form-select"
          >
            <option value="">-- Select --</option>
            <option value="Study Option">Study Option</option>
            <option value="Career Option">Career Option</option>
          </select>
        </div>

        <button type="submit" className="btn-submit">Get Options</button>
      </form>

      <div 
        className={`results-container ${showResults ? 'active' : ''}`}
        ref={resultsRef}
      >
        <h2>Suggested {optionType}s:</h2>
        {options.length > 0 ? (
          <ul className="options-list">
            {options.map((option, index) => (
              <li key={index} className="option-item">
                <div className="option-content">
                  <span className="option-icon">
                    {optionType === "Study Option" ? "📚" : "💼"}
                  </span>
                  <span className="option-text">{option}</span>
                </div>
                <div className="option-badge">{index + 1}</div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-options">Select your education level and option type to see recommendations</p>
        )}
      </div>
    </div>
  );
}

export default App;