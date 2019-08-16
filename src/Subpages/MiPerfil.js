import React, { Component } from 'react';
import { RegistrationInfo } from '../Components/RegistrationInfo';
import { Divider } from 'antd';
import { QuickTab } from '../Components/QuickTab';
import { TemplateInput } from '../Components/RegistrationInfo';



const Comp1 = () =>
  <div>
    <div align="center">Bienvenido, Edita la informacion cuando sea necesario</div>
    <Divider />
    <RegistrationInfo />
  </div>

const Comp2 = () =>
  <div>
    <div align="center">Bienvenido, Edita clases y horarios preferidos</div>
    <Divider />
    <TemplateInput
      label="Mis Clases y/o Horario"
    ></TemplateInput>
  </div>

const Comp3 = () =>
  <div>
    <div align="center">
      <h1>Busqueda de Clientes por Numero de Cedula o Identificacion</h1>
      <TemplateInput
        label="Busqueda de Clientes"
      ></TemplateInput>
    </div>
    <Divider />
    <RegistrationInfo />
  </div>


export default class MiPerfil extends Component {

  render() {
    return (
      <React.Fragment>
        <QuickTab
          icon1="aliwangwang" icon2="user" icon3="control"
          title1="Cliente" title2="Instructor" title3="Administrador"
          component1={<Comp1 />} component2={<Comp2 />} component3={<Comp3 />}
        ></QuickTab>
        <div className="wrapper">
          <div className="box"></div>
          <div className="box"></div>
        </div>
        <br />
      </React.Fragment>
    );
  }
}