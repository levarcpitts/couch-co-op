import React from 'react';
import '../styles/EventsCard.css';
import gameImage from './assets/images/supersmash.jpg';
import profileImage from './assets/images/profile_image.webp';

function EventCard() {
  return (
    <div class="event-card">
   <div class="event-header">
  <span>Birmingham Museum of Art</span>
  <div class="user-info">
    <img src={profileImage} alt="User" class="profile-pic" />
    <div>
        <div className="user-det">
      <span>@CovidGamer</span>
      <span>Miami, FL</span>
      </div>
    </div>
  </div>
</div>
    <div class="event-body">
      <img src={gameImage} alt="Super Smash" class="game-image" />
      <div class="event-details">
  <h3>Super Smash Tournament</h3>
  <p class="event-date">Nov. 9, 2024 @ 9 PM</p>
</div>
    </div>
    <div class="event-footer">
      <button class="btn attend">Attend</button>
      <button class="btn decline">Decline</button>
    </div>
  </div>
  );
}

export default EventCard;
