import React from 'react';
import 'antd/dist/antd.css';
import { Collapse, Icon, Rate } from 'antd';
import CommentsPanel from './Comments';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const text = `
  The semiotics of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses. Strata of cigarette smoke rose from the tiers, drifting until it struck currents set up by the blowers and the chassis of a gutted game console. The last Case saw of Chiba were the dark angles of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses. 

`;

const genExtra = () => (
  <Icon
    type="setting"
    onClick={event => {
      // If you don't want click extra trigger collapse, you can prevent this:
      event.stopPropagation();
    }}
  />
);

export default class CollapsePanel extends React.Component {
  state = {
    expandIconPosition: 'left',
  };

  onPositionChange = expandIconPosition => {
    this.setState({ expandIconPosition });
  };

  render() {
    const { expandIconPosition } = this.state;
    return (
      <div>
        <Collapse
          defaultActiveKey={['1']}
          onChange={callback}
          expandIconPosition={expandIconPosition}
        >
          <Panel header="Nombre Apellido" key="1" extra={genExtra()}>
            <div>{text}</div>
            <CommentsPanel />
            <Rate />
          </Panel>
          <Panel header="Nombre Apellido" key="2" extra={genExtra()}>
            <div>{text}</div>
            <CommentsPanel />
            <Rate />
          </Panel>
          <Panel header="Nombre Apellido" key="3" extra={genExtra()}>
            <div>{text}</div>
            <CommentsPanel />
            <Rate />
          </Panel>
        </Collapse>
        <br />
      </div>
    );
  }
}

