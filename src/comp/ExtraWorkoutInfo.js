import React from 'react';
import PropTypes from 'prop-types';

export default function ExtraWorkoutInfo() {
  return (
    <div className="extra-workout-info">
      <h3>Potential Other Features To Add:</h3>
      <ul>
        <li>Equipment Selection w/Weight Calculator</li>
        <li>Variation Selection</li>
        <li>History</li>
        <li>Rest Timer Config</li>
        <li>Difficulty</li>
      </ul>
      <style jsx>{`
        .extra-workout-info {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .extra-workout-info h3 {
          padding: 0;
          margin: 0;
        }
      `}</style>
    </div>
  );
}

ExtraWorkoutInfo.propTypes = {};
