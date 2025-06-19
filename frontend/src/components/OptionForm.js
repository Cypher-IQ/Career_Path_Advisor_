// frontend/src/components/OptionForm.js
import React, { useState } from 'react';

const OptionForm = ({ onSubmit }) => {
    const [educationLevel, setEducationLevel] = useState('');
    const [optionType, setOptionType] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (educationLevel && optionType) {
            onSubmit({ educationLevel, optionType });
        } else {
            alert('Please select both Education Level and Option Type');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Choose Your Option</h3>
            <div>
                <label>Education Level:</label>
                <select
                    value={educationLevel}
                    onChange={(e) => setEducationLevel(e.target.value)}
                >
                    <option value="">Select Education Level</option>
                    <option value="3rd Class">3rd Class</option>
                    <option value="10th Class">10th Class</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Degree">Degree</option>
                    <option value="Postgraduate">Postgraduate</option>
                    {/* Add other education levels as needed */}
                </select>
            </div>

            <div>
                <label>Option Type:</label>
                <select
                    value={optionType}
                    onChange={(e) => setOptionType(e.target.value)}
                >
                    <option value="">Select Option Type</option>
                    <option value="Study Option">Study Option</option>
                    <option value="Career Option">Career Option</option>
                </select>
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

export default OptionForm;
