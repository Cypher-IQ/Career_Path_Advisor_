// frontend/src/components/Results.js
import React from 'react';

const Results = ({ options }) => {
    return (
        <div>
            <h3>Available Options</h3>
            {options && options.length > 0 ? (
                <ul>
                    {options.map((option, index) => (
                        <li key={index}>{option}</li>
                    ))}
                </ul>
            ) : (
                <p>No options available</p>
            )}
        </div>
    );
};

export default Results;
