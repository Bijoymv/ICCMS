import React from 'react';
import { Col } from 'react-bootstrap';
import './style.css';

const Header = ({ handleClick }) => {
  return (
    <React.Fragment>
      <Col xs={12} className="header-menu py-3 fixed-top">
        <a href="/" onClick={handleClick} name="" className="headeText">
          IC Control Media & Sport
        </a>
      </Col>
    </React.Fragment>
  );
};

export default Header;
