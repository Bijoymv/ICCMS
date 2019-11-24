import React from 'react';
import videoPlaceholder from './../../assets/iccms.png';
import './style.css';

const Main = ({ msg }) => {
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
          src={videoPlaceholder}
          alt="video placeholder"
          className="img-fluid"
        />
      </div>
      <div className={`img-container ${hideText}`}>
        <div className=" img-text ">
          User clicked the button : <b>{msg}</b>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Main;
