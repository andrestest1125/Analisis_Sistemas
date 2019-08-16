import React, { Component } from 'react';
import { Tag } from 'antd';
import BigCalendar from '../Components/BigCalendar';


const divcenter = {
  textAlign: 'center'
}


export default class Horarios extends Component {
  render() {
    return (
      <React.Fragment>
        <div style={divcenter}>
          <Tag color="#f50">Kickboxing</Tag>
          <Tag color="#2db7f5">Funcional</Tag>
          <Tag color="#87d068">Cardio</Tag>
          <Tag color="#108ee9">Bicleta</Tag>
          <Tag color="#f59">Zumba</Tag>
        </div>
        <BigCalendar></BigCalendar>

      </React.Fragment>
    );
  }
}
