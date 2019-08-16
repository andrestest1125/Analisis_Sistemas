import React from 'react'
import { Input, Tooltip, Icon, Form } from "antd";
import styled from 'styled-components';



const CSSGrid = styled.div`
  .wrapper {
        display: grid;
        grid-gap: 5px;
        grid-template-columns: repeat(auto-fill, minmax(300px, auto) ) ;
        background-color: #fff;
        color: #444;
        justify-content: center;
        text-align: center;
        justify-items: center;
    }

    .box {
      padding: 2px;
      color: #444
    }  
`

export const RegistrationInfo = () =>
  <Form>
    <CSSGrid>
      <div class="wrapper">
        <div className="box">Nombre Completo
        <TemplateInput label="Nombre Completo" value="Andres Cesar Brandon" disabled="true" tooltip="Para editar contacta a Administrador"
        ></TemplateInput></div>
        <div className="box">Numero de Cedula
        <TemplateInput label="Numero de Cedula" value="1-059-85201" disabled="true" tooltip="Para editar contacta a Administrador"
        ></TemplateInput></div>
        <div className="box">Correo Electronico
        <TemplateInput label="Correo Electronico" value="uamcr@uamcr.net"
        ></TemplateInput></div>
        <div className="box">Fecha de Nacimiento
        <TemplateInput label="Fecha de Nacimiento" value="01/01/2000" disabled="true" tooltip="Para editar contacta a Administrador"
        ></TemplateInput></div>
        <div className="box">Contrasena
        <TemplateInputPassword label="Contrasena" value="password123!"
        ></TemplateInputPassword></div>
        {/* <TemplateInputPassword label="Confirma Contrasena"
    ></TemplateInputPassword> */}
        <div className="box">Direccion exacta
        <TemplateInput label="Direccion exacta" value="San Jose Costa Rica America"
        ></TemplateInput></div>
        <div className="box">Telefono Principal
        <TemplateInput label="Telefono Principal" value="6074-8596"
        ></TemplateInput></div>
        <div className="box">Telefono Alternativo
        <TemplateInput label="Telefono Alternativo" value="6041-7410"
        ></TemplateInput></div>
        <div className="box">Peso
        <TemplateInput  label="Peso" value="90 KG"
        ></TemplateInput></div>
        <div className="box">Grasa Corporal
        <TemplateInput label="Grasa Corporal" value="3%"
        ></TemplateInput></div>
        <div className="box">Masa Corporal
        <TemplateInput label="Masa Corporal" value="8%"
        ></TemplateInput></div>
      </div>
    </CSSGrid>
  </Form>




export const TemplateInput = (props) => {
  return (
    <CSSGrid>
      <Form.Item>
        <div class="box">
          <Input
            placeholder={props.label}
            value={props.value}
            disabled={props.disabled}
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            suffix={
              <Tooltip title={props.tooltip}>
                <Icon type="edit" style={{ color: 'rgba(0,0,0,.45)' }} />
              </Tooltip>
            }
          />
        </div>
      </Form.Item>
    </CSSGrid>
  )
}

const TemplateInputPassword = (props) => {
  return (
    <Form.Item>
      <Input.Password
        placeholder={props.label}
        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
        suffix={
          <Tooltip title={props.tooltip}>
            <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
          </Tooltip>
        }
      />
    </Form.Item>
  )
}

