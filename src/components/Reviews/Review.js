import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from '../Rating';
import './styles.css';

class Review extends Component {
  render() {
    return (
      <div className="review">
        {this.props.reviewer} <Rating rating={this.props.rating} />
        <p>
          <i>{this.props.content}</i>
        </p>
      </div>
    );
  }
}


export default Review;
