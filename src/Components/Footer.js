import React from 'react';
import styled from 'styled-components';

const CSSGridFooter = styled.div`
  .wrapper {
        display: grid;
        grid-gap: 5px;
        grid-template-columns: repeat(auto-fill, minmax(350px, 310px) ) ;
        background-color: #E6F7FF;
        color: #444;
        justify-content: center;
        text-align: center;
        justify-items: center;
    }

    .box {
      padding: 5px;
      background-color : #E6F7FF;
    }  

    h1 {
      font-size: 20px;
    }
    span {
      gap: 5px;
      margin: 5px;
    }
`


export const FooterInfo = () =>
  <React.Fragment>
    <CSSGridFooter>
      <div className="wrapper">
        <div className="box">
          <h1>Nuestra Mision</h1>
          <p>Ad id tempor duis aute eu fugiat veniam quis Sit ut in qui adipisicing aliqua id consequat amet dolore.</p>
        </div>

        <div className="box">
          <h1>Horarios de Atencion</h1>
          <p>Lunes a Viernes 05:30 am - 08:00 pm</p>
          <p>Sabados 06:30 am - 06:00 pm</p>
          <p>Domingos 07:30 am - 12:00 pm</p>
        </div>

        <div className="box">
          <h1>Contactenos</h1>
          <span>
            <img src="https://image.flaticon.com/icons/svg/174/174876.svg" alt="twitter" width="32" />
          </span>
          <span>
            <img src="https://image.flaticon.com/icons/svg/174/174879.svg" alt="whatsapp" width="32" />
          </span>
          <span>
            <img src="https://image.flaticon.com/icons/svg/174/174848.svg" alt="face" width="32" />
          </span>
          <span>
            <img src="https://image.flaticon.com/icons/svg/174/174855.svg" alt="instagram" width="32" />
          </span>
          <hr />
          <span>
            <h1>(506) 7890-3456</h1>
          </span>
        </div>


        <div className="box">
          <h1>Body Works</h1>
          <img src='https://i.ibb.co/zsx9LNC/logoshape.png' alt='' width='200' />
          <p>La forma de trabajar tu salud</p>
        </div>

        <div className="box">
          <h1>Enlaces Utiles</h1>
          <span><a>Instructores</a></span><hr />
          <span><a>Gimnasios</a></span><hr />
          <span><a>Otras Sedes</a></span><hr />
          <span><a>Contacta Administrador</a></span><hr />
        </div>

        <div className="box">
          <h1>Prototipo Analisis Sistemas</h1>
          <h3>Universidad Americana</h3>
          <p>Brandon Arias</p>
          <p>Cesar Arroyo Victor</p>
          <p>Cesar Arroyo Fallas</p>
          <p>Junior Lopez Aguilar</p>
          <p> </p>
          <h5>Agosto 30, 2019</h5>
        </div>

      </div>
    </CSSGridFooter>
  </React.Fragment>

