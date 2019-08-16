import React, { Component } from 'react';
import styled from 'styled-components';
import { QuickTab } from '../Components/QuickTab';
import CollapsePanel from '../Components/Collapse';



const Grid = styled.div`
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
      padding: 5px;
    }  
`



class Instructores extends Component {
  render() {
    return (
      <Grid>
        <QuickTab
          icon1="heart" icon2="like" icon3="picture"
          title1="Nutricionistas" title2="Cardio" title3="Zumba"
          component1={<CollapsePanel />} component2={<CollapsePanel />} component3={<CollapsePanel />}
        ></QuickTab>
      </Grid>
    );
  }
}

export default Instructores;

