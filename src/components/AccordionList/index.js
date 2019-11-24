import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import './index.css';

const AccordionList = props => {
  const { list, indexval, handleClick } = props;
  if (!list.length) {
    return null;
  }

  return list.map(items => {
    return (
      <Accordion.Collapse eventKey={indexval} key={items.QuickButtonOid}>
        <Card.Body className="listItemContainer">
          <button
            type="button"
            className="listItemBtn"
            name={items.ButtonText}
            onClick={handleClick}
          >
            <span>
              <img
                src={`data:image/png;base64,${items.Icon}`}
                alt={items.ButtonText}
                className="iconImg"
              />
            </span>
            {items.ButtonText}
          </button>
        </Card.Body>
      </Accordion.Collapse>
    );
  });
};

export default AccordionList;
