import * as React from 'react';

import './Card.css';

const Card = ({ children, title }) => {
  return (
    <div className="card">
      <h1 className="card__title">{title}</h1>
      {children}
    </div>
  );
}

export default Card;
