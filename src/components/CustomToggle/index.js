import React from 'react';
import { useAccordionToggle } from 'react-bootstrap';
import './style.css';

const CustomToggle = ({ children, eventKey, eventName, handleClick }) => {
  const decoratedOnClick = useAccordionToggle(eventKey, handleClick);

  return (
    <button
      type="button"
      name={eventName}
      className="list-button"
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
};

export default CustomToggle;
