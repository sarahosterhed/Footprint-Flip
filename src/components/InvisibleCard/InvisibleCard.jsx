// InvisibleCard.js
import React from 'react';

const InvisibleCard = ({ droppedLast }) => (
  <div
    id="invisible"
    style={{
      width: droppedLast ? '50px' : 'auto',
      borderLeft: droppedLast ? '30px dashed black' : '',
    }}
  >
    INVISIBLE CARD
  </div>
);

export default InvisibleCard;
