import React, { Component } from 'react';

export class resultBox extends Component {
  render() {
    return (
      <div style={{ padding: '10px 10px 20px 400px' }}>
        <div className='row'>
          <div className='col s12 m7'>
            <div className='card'>
              <div className='card-image'>
                <span className='card-title'>Result</span>
              </div>
              <div className='card-content'>
                <p>{this.props.text}</p>
              </div>
              <div className='card-action'>
                <p style={{ fontWeight: 'bold' }}>
                  {this.props.emotion.toUpperCase()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default resultBox;
