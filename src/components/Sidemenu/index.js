import React, { useState, useEffect, useRef } from 'react';
import { Col, Accordion, Card } from 'react-bootstrap';
import { Readqib2 } from './../../Utils/read-json';
import CustomToggle from './../../components/CustomToggle';
import AccordionList from './../../components/AccordionList';
import { TweenMax, Power3 } from 'gsap';
import './style.css';

const Sidemenu = ({ handleClick }) => {
  const [qib2Data, setqib2Data] = useState(null);
  let menuItems = useRef(null);

  useEffect(() => {
    Readqib2().then(data => {
      setqib2Data(data);
    });
    TweenMax.to(menuItems, 5, {
      opacity: 1,
      y: 0,
      ease: Power3.easeOut
    });
  });

  return (
    <React.Fragment>
      <Col xs={12} md={4} className="pl-0 pr-0 mt-3">
        <Accordion
          defaultActiveKey="0"
          ref={el => {
            menuItems = el;
          }}
          className="accordian"
        >
          {qib2Data &&
            qib2Data.map((items, index) => {
              const filter = [1, 2, 3];
              if (!filter.includes(index)) {
                return (
                  <Card key={items.QuickButtonGroupOid}>
                    <Card.Header>
                      <CustomToggle
                        eventKey={index}
                        eventName={items.ButtonText}
                        handleClick={handleClick}
                        className="accordianText"
                      >
                        {items.ButtonText}
                      </CustomToggle>
                    </Card.Header>

                    <AccordionList
                      list={items.Buttons}
                      indexval={index}
                      handleClick={handleClick}
                    />
                  </Card>
                );
              } else {
                return null;
              }
            })}
        </Accordion>
      </Col>
    </React.Fragment>
  );
};

export default Sidemenu;
