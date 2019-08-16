
import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Input } from 'antd';

export const { Search } = Input;


  <div>
    <Search
      placeholder="ID - Nombres"
      enterButton="Busqueda Cliente | Instructor"
      size="large"
      onSearch={value => console.log(value)}
    />
  </div>
          