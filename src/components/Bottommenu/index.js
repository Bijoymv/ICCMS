import React, { useState, useEffect, useRef } from 'react';
import { Form } from 'react-bootstrap';
import { Readqib2 } from './../../Utils/read-json';
import BottomList from './../../components/BottomList';
import { TweenMax, Power3 } from 'gsap';
import './style.css';

const Bottommenu = ({ handleClick }) => {
  const [qib2Data, setqib2Data] = useState(null);
  const [showPlaylist, setShowPlaylist] = useState('hideplaylist');
  let bottomMenu = useRef(null);
  let bottomList = useRef(null);

  useEffect(() => {
    Readqib2().then(data => {
      setqib2Data(data);
    });
    console.log(bottomMenu.children);
    TweenMax.to(bottomMenu, 6, {
      opacity: 1,
      y: -10,
      ease: Power3.easeOut
    });
    let easeTime = 1;
    for (let i = 0; i < bottomList.children.length; i++) {
      easeTime += 0.6;
      TweenMax.to(bottomList.children[i], easeTime, {
        opacity: 1,
        y: 10,
        ease: Power3.easeOut
      });
    }
  });

  const handleSelect = (eventKey, e) => {
    if (e) {
      setShowPlaylist('hideplaylist');
      handleClick(e);
    } else {
      if (
        (eventKey.target.name === 'dropdown' &&
          eventKey.target.value === 'PlayList1') ||
        eventKey.target.type === 'checkbox'
      ) {
        setShowPlaylist('');
      } else {
        setShowPlaylist('hideplaylist');
      }
      handleClick(eventKey);
    }
  };

  return (
    <React.Fragment>
      <div
        className="py-3 navListContainer"
        ref={el => {
          bottomList = el;
        }}
      >
        {qib2Data &&
          qib2Data.map((items, index) => {
            const filter = [1, 2];
            if (filter.includes(index)) {
              return (
                <BottomList
                  list={items.Buttons}
                  indexval={index}
                  handleClick={handleClick}
                  key={index}
                />
              );
            } else {
              return null;
            }
          })}
      </div>
      <div
        className="menu-list"
        ref={el => {
          bottomMenu = el;
        }}
      >
        {qib2Data &&
          qib2Data.map((items, index) => {
            const filter = [3];
            if (filter.includes(index)) {
              return (
                <div className="menu-container" key={index}>
                  <Form>
                    <Form.Group controlId="ControlSelect1">
                      <Form.Control
                        type="dropdown"
                        name="dropdown"
                        as="select"
                        onChange={handleSelect}
                      >
                        <option value="">--Select PlayList--</option>
                        <option value="PlayList1">
                          {items.Buttons[0].ButtonText}
                        </option>
                      </Form.Control>
                    </Form.Group>
                    <div className={`form-check-container ${showPlaylist}`}>
                      {items.Buttons.map((items, index) => {
                        const filter = [0];
                        if (!filter.includes(index)) {
                          return (
                            <Form.Check
                              type="checkbox"
                              name={items.ButtonText}
                              id={items.QuickButtonOid}
                              label={items.ButtonText}
                              onChange={handleSelect}
                              key={index}
                              className="form-check-items"
                            />
                          );
                        } else {
                          return null;
                        }
                      })}
                    </div>
                  </Form>
                </div>
              );
            } else {
              return null;
            }
          })}
      </div>
    </React.Fragment>
  );
};

export default Bottommenu;
