import React from 'react';
import 'antd/dist/antd.css';
import { Card, Icon, Avatar } from 'antd';
import styled from 'styled-components';

const { Meta } = Card;


export const CSSGridProfileCard = styled.div`
  &&{
        justify-content: center;
        text-align: center;
        justify-items: center;
  }
  .wrapper {
        display: grid;
        grid-gap: 5px;
        grid-template-columns: repeat(auto-fill, minmax(300px, 310px) ) ;
        background-color: #fff;
        color: #444;
        justify-content: center;
        text-align: center;
        justify-items: center;
    }

    .box {
      padding: 2px;
      justify-content: center;
      text-align: center;
      justify-items: center;
    }  
    .search {
      border-color : red;
      border-width: 2px;
    }
`


export const InstructoresCard = (props) =>
  <React.Fragment>
    <Card
      style={{ width: 300 }}
      cover={
        <img alt="" src="https://cdn.pixabay.com/photo/2018/10/12/21/03/silhouette-3743001_960_720.png" width="100" />}
      actions={[
        <Icon type="heart" style={{ color: '#F55CE5' }}  />,
        <Icon type="notification" theme="filled" />,
        <Icon type="calendar" theme="filled" />]} >
      <Meta avatar={<Avatar src="http://www.kluneo.com/static/avatar.svg" />} title="Nombre Instructor" description="Descripcion de la actividad Ut magna exercitation ea proident nostrud dolore sit nisi id." />
    </Card>
  </React.Fragment>