import React from 'react';
import './style.css';

const BottomList = props => {
  const { list, handleClick } = props;
  if (!list.length) {
    return null;
  }

  return list.map(items => {
    return (
      <React.Fragment key={items.QuickButtonOid}>
        <div className="navItemContainer">
          <button
            type="button"
            className="navItemBtn"
            name={items.ButtonText}
            onClick={handleClick}
          >
            <span>
              <img
                src={`data:image/png;base64,${items.Icon}`}
                alt={items.ButtonText}
                className="navImg"
              />
            </span>
            {items.ButtonText}
          </button>
        </div>
      </React.Fragment>
    );
  });
};

export default BottomList;
