import React from 'react';
import Link from 'next/link';
import ExerciseCard from '../src/comp/ExerciseCard';
import { polar2 } from '../src/colors';

const Copy = () => {
  return (
    <div>
      <h1>Fitness App</h1>
      <p>
        Exercise Tracker App. Records performance on user-entered exercises,
        tracks performance over time.
      </p>
      <p>
        Each exercise will get its own card. Each time the user does an
        exercises, they can input their performance for record keeping.
      </p>
      <p>
        When a user wants to add a new exercise, they can click the "Add
        Exercise" link and go through a data collection flow that will specify
        the name, variations, weights, and set/rep schema they aim to do for
        that exercise.
      </p>
    </div>
  );
};

const BottomCopy = () => {
  return (
    <div>
      <h3>TODO</h3>
      This app is a work in progress. Goal is to add a database that will be
      able to persist user exercise data over time and keep track of exercises
      over an extended period.
    </div>
  );
};

const Index = () => (
  <div className="fitness-root--container">
    <Copy />
    <ExerciseCard
      exerciseWeight={180}
      exerciseName={'Bench Press'}
      equipment={'Bench Press'}
      variations={['15 deg Incline', '45 deg Incline']}
    />
    <Link href="/addEquipment">
      <a>Add New Exercise (Screen 1)</a>
    </Link>
    <Link href="/addVariations">
      <a>Add Exercise Variations (Screen 2)</a>
    </Link>
    <Link href="/addWorkoutSchema">
      <a>Add Exercise Schema (Screen 3)</a>
    </Link>
    <BottomCopy />
    <style jsx>{`
      padding: 10px;
      background: ${polar2};
      .fitness-root--container {
        display: flex;
        flex-direction: column;
        height: 100vh;
      }
      .fitness-root--container a {
        margin: 5px;
      }
    `}</style>
  </div>
);

export default Index;
