import React from 'react';
import moment from 'moment';
import { Heart } from './Heart';
import './happyThoughts.css';

// This component displays the list of posted messages
export const HappyThoughts = (props) => {
  const { message, hearts, createdAt, name } = props.thought;

  return (
    <div className="cardContainer">
      <div>
        <p className="userName">{name}</p>
        <p className="userMessage">{message}</p>
      </div>
      <div className="heartTime">
        <Heart hearts={hearts}
          id={props.thought._id}
        />
        <div className="postedTime">
          <span> {moment(createdAt).fromNow()} </span>
        </div>
      </div>
    </div >
  )
}