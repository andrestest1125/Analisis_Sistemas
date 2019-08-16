import React from 'react'
import { Card, TimePicker, DatePicker, Divider } from 'antd';

export const TimeCard = () =>
  <React.Fragment>
    <Card style={{ width: 300 }}>
      <h1>🏋️ Titulo de clase</h1>
      <div >
        <TimePicker use12Hours format="h:mm a" minuteStep="30" />
      </div>
      <Divider></Divider>
      <DatePicker size="default"></DatePicker>
      <Divider></Divider>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum.</p>
    </Card>,
  </React.Fragment>

