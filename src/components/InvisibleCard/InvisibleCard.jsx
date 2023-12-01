// InvisibleCard.js
import React from 'react';

const InvisibleCard = ({ droppedLast }) => (
  <div
    id="invisible"
    style={{
      width: '50px',
      borderLeft: droppedLast ? '30px dashed lightgray' : '',
    }}
  >
    INVISIBLE CARD
  </div>
);

export default InvisibleCard;
