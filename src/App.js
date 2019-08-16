import React, { useState } from 'react';
import Main from './Pages/Main';
import { Button, Row, Col } from 'antd';
import RegistrationForm from './Welcome/Registration';
import Welcome from './Welcome/Welcome';

const ButtonComponents = (props) => {
  return (
    <div className='box'>
      <Button type="primary" block shape="round" onClick={props.onClick} >{props.buttonName}</Button>
    </div>
  )
}

export default function App() {
  const [screen, setScreen] = useState(<Main />);

  return (
    <React.Fragment>
      <Row>
        <Col span={8}><ButtonComponents
          buttonName="Welcome"
          onClick={() => setScreen(<Welcome />)} /></Col>
        <Col span={8}><ButtonComponents
          buttonName="Formulario"
          onClick={() => setScreen(<RegistrationForm />)} /></Col>
        <Col span={8}><ButtonComponents
          buttonName="SPA Main"
          onClick={() => setScreen(<Main />)} /></Col>
      </Row>
      {screen}
    </React.Fragment>
  );
}
