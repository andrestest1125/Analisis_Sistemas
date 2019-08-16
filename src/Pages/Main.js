
import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Icon} from 'antd';
import MiPerfil from '../Subpages/MiPerfil';
import Instructores from '../Subpages/Instructores';
import Horarios from '../Subpages/Horarios';
import Clases from '../Subpages/Clases';
import { FooterInfo } from '../Components/Footer';


// ############################################### layout

const { Header, Sider, Content, Footer } = Layout;


// ############################################### styles

const footerstyle = {
  fontSize: '12px',
  textAlign: 'center',
  backgroundColor: '#E6F7FF'
};

const headerstyle = {
  fontSize: '20px',
  backgroundColor: '#E6F7FF'
};

const trigger = {
  fontSize: '18px',
  padding: '0 -2px',
};

const logo = {
  height: '64px',
  background: 'white',
  margin: '16px',
  textAlign: 'center',
};

// ############################################### props list

const List = (props) =>
  <React.Fragment>
    <Icon type={props.icon} />
    <span>{props.label}</span>
  </React.Fragment>


// ############################################### main class











export default class Main extends React.Component {
  // ******************************************** para el sidebar
  state = {
    collapsed: false,
    contentbutton: 'Cargando'
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  // ******************************************** individual arrow functions
  showPerfil = () => {
    this.setState({ contentbutton: <MiPerfil /> })
  }

  showInstructores = () => {
    this.setState({ contentbutton: <Instructores /> })
  }

  showHorarios = () => {
    this.setState({ contentbutton: <Horarios /> })
  }

  showClases = () => {
    this.setState({ contentbutton: <Clases /> })
  }



  // ******************************************** para el sidebar

  render() {
    return (

      <Layout>

        <Sider trigger={null} collapsible collapsed={this.state.collapsed} theme="light">
          <div style={logo}  >
            <img src="https://cdn4.iconfinder.com/data/icons/linecon/512/photo-512.png" alt="" width="54" />
          </div>
          <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" onClick={this.showPerfil}>
              <List icon="user" label="Mi Perfil" ></List>
            </Menu.Item>
            <Menu.Item key="2" onClick={this.showInstructores}>
              <List icon="usergroup-delete" label="Instructores"></List>
            </Menu.Item>
            <Menu.Item key="3" onClick={this.showHorarios}>
              <List icon="carry-out" label="Horarios"></List>
            </Menu.Item>
            <Menu.Item key="4" onClick={this.showClases}>
              <List icon="schedule" label="Clases"></List>
            </Menu.Item>
          </Menu>
        </Sider>

        {/* ********************************************  Layout Header and content */}
        <Layout>
          <Header style={headerstyle}>
            <Icon style={trigger} type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.toggle}>
            </Icon>
            . Hola Nombre de Usuario! . Bienvenido
          </Header>

          <Content
            style={{
              margin: '18px 16px',
              padding: 3,
              background: '#fff',
              minHeight: 600,
            }}
          >
            {this.state.contentbutton}
          </Content> 
          <Footer style={footerstyle}>
            <FooterInfo />
          </Footer>

        </Layout>
        {/* ********************************************  Layout Header and content */}

      </Layout>
    );
  }
}


