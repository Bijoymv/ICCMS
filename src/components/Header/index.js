import React, { useRef, useEffect } from 'react';
import { Col } from 'react-bootstrap';
import { TweenMax, Power3 } from 'gsap';
import './style.css';

const Header = ({ handleClick }) => {
  let logoText = useRef(null);

  useEffect(() => {
    TweenMax.to(logoText, 8, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut
    });
  }, []);
  return (
    <React.Fragment>
      <Col xs={12} className="header-menu py-3 fixed-top">
        <a
          ref={el => {
            logoText = el;
          }}
          href="/"
          onClick={handleClick}
          name=""
          className="headeText"
        >
          IC Control Media & Sport
        </a>
      </Col>
    </React.Fragment>
  );
};

export default Header;
