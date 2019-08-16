import React, { useState } from 'react';
import { Button, Icon, Divider, Input, Row, Col } from 'antd';
import './Welcome.css';
import 'antd/dist/antd.css';

const SocialMediaButtons = () => {
  return (
    <div>
      <Icon
        type="facebook"
        style={{ fontSize: "26px", color: "#08c" }}
        theme="outlined"
      />
      <Icon
        type="twitter"
        style={{ fontSize: "26px", color: "#08c" }}
        theme="outlined"
      />
      <Icon
        type="apple"
        style={{ fontSize: "26px", color: "#08c" }}
        theme="outlined"
      />
      <Icon
        type="google"
        style={{ fontSize: "26px", color: "#08c" }}
        theme="outlined"
      />
      <Icon
        type="instagram"
        style={{ fontSize: "26px", color: "#08c" }}
        theme="outlined"
      />
    </div>
  )
}

const LoginPic = () => {
  return (
    <div className='box part1'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Man_Lifting_Barbell_Cartoon.svg/640px-Man_Lifting_Barbell_Cartoon.svg.png" alt='' width='500' />
    </div>
  )
}

const SignupPic = () => {
  return (
    <div className='box part1'>
      <img src="http://semrc.blogs.latrobe.edu.au/wp-content/uploads/2018/08/Man_on_Weighing_Scale_.png" alt='' width='512' />
    </div>
  )
}

const InputEmail = (status) => {
  return (
    <div className='box'>
      <Row>
        <Col span={12}><Input
          placeholder='Correo Electrónico'
          prefix={<Icon type='edit' />}
        /></Col>
        <Col span={12}><Input.Password
          placeholder='Contraseña'
          prefix={<Icon type='edit' />}
        /></Col>
      </Row>
    </div>
  )
}

const ButtonComponents = (props) => {
  return (
    <div className='box'>
      <Button type="primary" block shape="round" onClick={props.onClick} >{props.buttonName}</Button>
    </div>
  )
}

export default function Welcome(props) {
  const [status, setStatus] = useState('Inicia Sesión');

  return (
    <div className="wrapper">
      <div className="box part1">
        <h1>{status}</h1>
        <img src='https://i.ibb.co/N6qQBjw/logo.jpg' alt='' width='250' />
        {status === 'Inicia Sesión' ? <LoginPic /> : <SignupPic />}
      </div>
      <div className="box part2">
        <InputEmail />
        <ButtonComponents
          buttonName="Inicia Sesión"
          onClick={() => setStatus('Inicia Sesión')} />
        <ButtonComponents
          buttonName="Registrate"
          onClick={() => setStatus('Registrate')} />
        <Divider>Usa redes sociales</Divider>
        <SocialMediaButtons />
      </div>
    </div>
  );
}

