import ExerciseCard from '../src/comp/ExerciseCard';
import SFChiclet from '../src/comp/SFChiclet';
import RepsScroller from '../src/comp/RepsScroller';
import React from 'react';
class ExampleChiclets extends React.PureComponent {
  state = {
    isSelected1: true,
    isSelected2: false
  };

  handleClick1 = () => {
    this.setState(state => {
      return { isSelected1: !state.isSelected1 };
    });
  };
  handleClick2 = () => {
    this.setState(state => {
      return { isSelected2: !state.isSelected2 };
    });
  };

  render() {
    return (
      <div>
        <SFChiclet
          onClick={this.handleClick1}
          selected={this.state.isSelected1}
        >
          10
        </SFChiclet>
        <SFChiclet
          onClick={this.handleClick2}
          selected={this.state.isSelected2}
        >
          9
        </SFChiclet>
        <SFChiclet onClick={this.handleClick} outline>
          8
        </SFChiclet>
      </div>
    );
  }
}

export default function DisplayAll() {
  return (
    <div>
      <div style={{ margin: '30px' }}>
        <h2>Example SFScroller</h2>
        <RepsScroller />
      </div>
      <div style={{ margin: '30px' }}>
        <h2>Example Chiclets</h2>
        <ExampleChiclets />
      </div>
      <div style={{ margin: '30px' }}>
        <h2>SFCard</h2>
        <ExerciseCard />
      </div>
    </div>
  );
}
