import React from 'react';
import './Announcements.css';

function card(props){
  return (
    <div class="card border-primary mb-3" >
      <div class="card-header"><img src={props.image} class="card-img-top announcements-img announcements-card" alt="..."></img></div>
      <div class="card-body text-primary announcements-card">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.message}</p>
      </div>
    </div>
  );
}

export default card;
