import React, { useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Sidemenu from './components/Sidemenu';
import Header from './components/Header';
import Main from './components/Main';
import Bottommenu from './components/Bottommenu';

function App() {
  const [msg, setMsg] = useState('');

  function handleBtnClick(e) {
    if (e.target.type === 'checkbox') {
      if (e.target.checked) {
        console.log(`User clicked the selection : ${e.target.name}`);
        setMsg(e.target.name);
      } else {
        console.log(`User removed the selection : ${e.target.name}`);
        setMsg('');
      }
    } else {
      e.preventDefault();
      if (e.target.name === 'dropdown') {
        console.log(`User selected the dropdown option : ${e.target.value}`);
        setMsg(e.target.value);
      } else {
        console.log(`User clicked the button : ${e.target.name}`);
        setMsg(e.target.name);
      }
    }
  }
  return (
    <React.Fragment>
      <Row className="header">
        <Header handleClick={handleBtnClick} />
      </Row>
      <Container className="wrapper">
        <Row className="grow py-3">
          <Sidemenu handleClick={handleBtnClick} />
          <Col xs={12} md={8} className="py-3">
            <Main msg={msg} />
            <Bottommenu handleClick={handleBtnClick} />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default App;
