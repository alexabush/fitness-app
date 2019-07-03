import React from 'react';
import PropTypes from 'prop-types';
import { polar2 } from '../colors';

export default class WordInputField extends React.Component {
  state = { value: '', giveHelp: false };
  handleChange = e => {
    this.setState({ value: e.target.value });
  };
  handleSubmit = e => {
    const { spanishWord = '', handleSuccess } = this.props;
    const { value } = this.state;
    e.preventDefault();
    if (value !== spanishWord) {
      this.setState({ value: '', giveHelp: true });
    } else {
      handleSuccess();
    }
  };
  generateLetters = spanishWord => {
    return spanishWord.split('').map((letter, i) => {
      return (
        <span key={i} className="sf-spans">
          {letter}
        </span>
      );
    });
  };

  render() {
    const { value, giveHelp } = this.state;
    const { spanishWord = '' } = this.props;
    console.log(spanishWord.length);
    const letterEls = this.generateLetters(spanishWord);
    return (
      <div className="sf-WordInputField">
        <form onSubmit={this.handleSubmit}>
          {giveHelp && (
            <span className="sf-WordInputField--letterContainer">
              {letterEls}
            </span>
          )}
          <input
            className="sf-WordInputField--input"
            type="text"
            value={value}
            onChange={this.handleChange}
          />
        </form>
        <style jsx>{`
          .sf-WordInputField {
            display: inline-block;
            font-family: monospace;
          }
          .sf-WordInputField--letterContainer {
            position: absolute;
          }
          .sf-WordInputField--input {
            font-family: monospace;
            font-size: 1.5rem;
            color: green;
            padding: 5px;
            outline: none;
            border: none;
            background: ${polar2};
            box-sizing: border-box;
            width: calc(${spanishWord.length} * 1rem + 5px);
          }
          sf-WordInputField--input:focus {
            outline: none;
          }
          .sf-WordInputField span {
            opacity: 0.5;
            pointer-events: none;
          }
        `}</style>
      </div>
    );
  }
}

WordInputField.propTypes = {
  spanishWord: PropTypes.string,
  handleSuccess: PropTypes.func,
  value: PropTypes.string,
  giveHelp: PropTypes.bool
};
