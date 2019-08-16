
import React from 'react';
import 'antd/dist/antd.css';
import { Calendar } from 'antd';

export const MiniCalendar = () =>
  <React.Fragment>
    <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
      <Calendar fullscreen={false}/>
    </div>
  </React.Fragment>