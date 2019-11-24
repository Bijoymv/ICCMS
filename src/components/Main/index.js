import React, { useRef, useEffect } from 'react';
import { TweenMax, Power3 } from 'gsap';
import videoPlaceholder from './../../assets/iccms.png';
import './style.css';

const Main = ({ msg }) => {
  let videoImg = useRef(null);
  let logText = useRef(null);

  useEffect(() => {
    TweenMax.to(videoImg, 5, {
      opacity: 1,
      y: -10,
      ease: Power3.easeOut
    });
    TweenMax.to(logText, 5, {
      opacity: 1,
      y: -10,
      ease: Power3.easeOut
    });
  }, []);

  let hideImg = '';
  let hideText = 'hidden';
  if (msg === '') {
    hideImg = '';
    hideText = 'hidden';
  } else {
    hideImg = 'hidden';
    hideText = '';
  }
  return (
    <React.Fragment>
      <div className={`img-container ${hideImg}`}>
        <img
          ref={el => {
            videoImg = el;
          }}
          src={videoPlaceholder}
          alt="video placeholder"
          className="img-fluid video-img"
        />
      </div>
      <div className={`img-container ${hideText}`}>
        <div
          className="img-text"
          ref={el => {
            logText = el;
          }}
        >
          User clicked the button : <b>{msg}</b>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Main;
