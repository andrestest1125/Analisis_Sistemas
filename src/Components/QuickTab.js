import React from 'react';
import 'antd/dist/antd.css';
import { Tabs, Icon } from 'antd';


const { TabPane } = Tabs;

export const QuickTab = (props) =>
  <React.Fragment>
    <Tabs>
      <TabPane key="1"
        tab={<span><Icon type={props.icon1}></Icon>{props.title1}</span>}>
        {props.component1}
    </TabPane>
      <TabPane key="2"
        tab={<span><Icon type={props.icon2}></Icon>{props.title2}</span>}>
        {props.component2}
    </TabPane>
      <TabPane key="3"
        tab={<span><Icon type={props.icon3}></Icon>{props.title3}</span>}>
        {props.component3}
    </TabPane>
    </Tabs>
  </React.Fragment>