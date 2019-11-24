import React, { useState, useEffect } from 'react';
import { Col, Accordion, Card } from 'react-bootstrap';
import { Readqib2 } from './../../Utils/read-json';
import CustomToggle from './../../components/CustomToggle';
import AccordionList from './../../components/AccordionList';

const Sidemenu = ({ handleClick }) => {
  const [qib2Data, setqib2Data] = useState(null);

  useEffect(() => {
    Readqib2().then(data => {
      setqib2Data(data);
    });
  });

  return (
    <React.Fragment>
      <Col xs={12} md={4} className="pl-0 pr-0 mt-3">
        <Accordion defaultActiveKey="0">
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
