import React from 'react';
import PropTypes from 'prop-types';
import SFCard from './SFCard';
import ExerciseCardHeader from './ExerciseCardHeader';
import ExerciseCardFooter from './ExerciseCardFooter';
import ExtraWorkoutInfo from './ExtraWorkoutInfo';

export default class ExerciseCard extends React.PureComponent {
  state = { isExpanded: true };

  toggleExpand = () => {
    this.setState(state => {
      return {
        isExpanded: !state.isExpanded
      };
    });
  };

  render() {
    const { exerciseName, exerciseWeight, equipment, variations } = this.props;
    return (
      <div className="exercise-card">
        <SFCard>
          <ExerciseCardHeader
            exerciseName={exerciseName}
            equipment={equipment}
            variations={variations}
            onClick={this.toggleExpand}
            withChiclets
          />
          {this.state.isExpanded && <ExtraWorkoutInfo />}
          <ExerciseCardFooter exerciseWeight={exerciseWeight} />
        </SFCard>
        <style jsx>{`
          .exercise-card {
            max-width: 600px;
          }
        `}</style>
      </div>
    );
  }
}

ExerciseCard.propTypes = {
  exerciseName: PropTypes.string,
  exerciseWeight: PropTypes.number,
  equipment: PropTypes.string,
  variations: PropTypes.arrayOf(PropTypes.string)
};
