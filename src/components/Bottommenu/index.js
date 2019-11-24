import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { Readqib2 } from './../../Utils/read-json';
import BottomList from './../../components/BottomList';
import './style.css';

const Bottommenu = ({ handleClick }) => {
  const [qib2Data, setqib2Data] = useState(null);
  const [showPlaylist, setShowPlaylist] = useState('hideplaylist');

  useEffect(() => {
    Readqib2().then(data => {
      setqib2Data(data);
    });
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
      <div className="py-3 navListContainer">
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
      <div>
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
