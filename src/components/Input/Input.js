import React, { Component } from 'react';
import Result from '../resultBox/resultBox';
import './Input.css';
import Sentiment from 'sentiment';

export class Input extends Component {
  state = {
    searchTerm: '',
    finalResult: '',
  };

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    var sentiment = new Sentiment();
    const result = sentiment.analyze(this.state.searchTerm);
    console.log(result);
    let emotions;
    if (result.score > 0) emotions = 'Positive';
    else if (result.score < 0) emotions = 'Negative';
    else emotions = 'Neutral';
    this.setState({ finalResult: emotions });
  };

  render() {
    return (
      <div>
        <div className='container'>
          <div className='container__item'>
            <form className='form'>
              <input
                type='text'
                className='form__field'
                placeholder='Enter the text to analyze the sentiment'
                value={this.state.searchTerm}
                onChange={this.handleChange}
              />
              <button
                id='myInput'
                type='submit'
                className='btn btn--primary btn--inside uppercase'
                value='Submit'
                onClick={this.handleSubmit}
              >
                Predict
              </button>
            </form>
          </div>
        </div>
        <Result emotion={this.state.finalResult} text={this.state.searchTerm} />
      </div>
    );
  }
}

export default Input;
