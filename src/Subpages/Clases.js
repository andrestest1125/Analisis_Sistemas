import React, { Component } from 'react';
import { MiniCalendar } from '../Components/MiniCalendar';
import { QuickTab } from '../Components/QuickTab';
import VerticalList from '../Components/VerticalList';
import { Tooltip, Progress, Card } from 'antd';
import '../Welcome/Welcome.css';
import styled from 'styled-components';


const CSSGrid = styled.div`
  .wrapper {
        display: grid;
        grid-gap: 5px;
        grid-template-columns: repeat(auto-fill, minmax(350px, 310px) ) ;
        color: #444;
        justify-content: center;
        text-align: center;
        justify-items: center;
    }

    .box {
      padding: 5px;
    }  

    h1 {
      font-size: 20px;
    }
    span {
      gap: 5px;
      margin: 5px;
    }
`





const Comp1 = (props) =>
  <div >
    <MiniCalendar />
  </div>

const Comp2 = (props) =>
  <div>
    <VerticalList />
  </div>



//historial agregar progress de antD
const Comp3 = (props) => {
  return (
    <React.Fragment>
      <CSSGrid>
        <div className='wrapper'>
          <div className='box'>
            <Card title="Zumba" bordered={true} style={{ width: 350 }}>
              <p>Consectetur occaecat est anim qui non do aliquip quis mollit tempor id est.</p>
              <Tooltip title="3 done / 3 in progress / 4 to do">
                <Progress percent={60} successPercent={30} />
              </Tooltip>
              <Tooltip title="3 done / 3 in progress / 4 to do">
                <Progress percent={60} successPercent={30} type="circle" />
              </Tooltip>
              <Tooltip title="3 done / 3 in progress / 4 to do">
                <Progress percent={60} successPercent={30} type="dashboard" />
              </Tooltip>
            </Card>
          </div>

          <div className='box'>
            <Card title="Funcional" bordered={true} style={{ width: 350 }}>
              <div style={{ width: 310 }}>
                <p>Cupidatat incididunt adipisicing aute reprehenderit ut exercitation deserunt dolore elit consectetur dolor culpa.</p>
                <Progress percent={30} size="small" />
                <Progress percent={50} size="small" status="active" />
                <Progress percent={70} size="small" status="exception" />
                <Progress percent={100} size="small" />
              </div>
            </Card>
          </div>

          <div className='box'>
            <Card title="Incremento Masa Muscular" bordered={true} style={{ width: 350 }}>
              <p>Lorem tempor id pariatur nulla cillum aute consequat ut deserunt minim.</p>
              <Progress type="dashboard" percent={75} />
            </Card>
          </div>

          <div className='box'>
            <Card title="Objetivos Completados" bordered={true} style={{ width: 350 }}>
              <p>Sit magna mollit id ea proident magna ipsum elit elit dolore.</p>
              <div>
                <Progress type="circle" percent={75} format={percent => `${percent} Grasa`} />
                <Progress type="circle" percent={100} format={() => 'Aerobicos'} />
              </div>
            </Card>
          </div>

          <div className='box'>
            <Card title="Otro progreso" bordered={true} style={{ width: 350 }}>
              <p>Anim aute sunt consequat amet sint consectetur sit consectetur nulla..</p>
              <Progress type="dashboard" percent={45} />
            </Card>
          </div>
          <div className='box'>
            <Card title="actividad fisica" bordered={true} style={{ width: 350 }}>
              <p>Officia nostrud mollit mollit ea..</p>
              <Progress type="dashboard" percent={5} />
            </Card>
          </div>
          <div className='box'>
            <Card title="Incremento Masa Muscular" bordered={true} style={{ width: 350 }}>
              <p>Lorem tempor id pariatur nulla cillum aute consequat ut deserunt minim.</p>
              <Progress type="dashboard" percent={75} />
            </Card>
          </div>

        </div>
      </CSSGrid>
    </React.Fragment>
  )
}







export default class Clases extends Component {
  render() {
    return (
      <React.Fragment>
        <QuickTab
          icon1="heart" icon2="like" icon3="picture"
          title1="Agendar mediciones" title2="Promociones" title3="Mi historial"
          component1={<Comp1 />} component2={<Comp2 />} component3={<Comp3 />}
        ></QuickTab>
      </React.Fragment>
    );
  }
}


