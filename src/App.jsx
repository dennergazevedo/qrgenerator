/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';

// STYLED COMPONENTS
import {
  Container,
  BackLeft,
  BackRight,
  Navbar,
  Body,
  QrCode
} from './styles.js';

// ASSETS
import backleft from './assets/img/backleft.png';
import backright from './assets/img/backright.png';
import logo from './assets/img/logo.png';
import background from './assets/img/background.png';

// LOTTIE
import * as loadingLottie from './assets/json/loading.json';
import Lottie from 'react-lottie';

// ICONS
import {
  FaQrcode
} from 'react-icons/fa';

function App() {

  const loadingOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingLottie.default,
    rendererSettings:{
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const [texto, setTexto] = useState('');
  const [exibir, setExibir] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [loading, setLoading] = useState(false);

  async function handleGerar(){
    setHidden(true);
    setLoading(true);
    const text = texto.replace(/[/]/g, '----');
    setExibir(text);

    setTimeout(function(){
      setHidden(false);
      setLoading(false);
    }, 3000)
  }

  return (
    <Container>
      {
        screen.width > 600 || window.innerWidth > 600?
        <>
          <BackLeft src={backleft} alt="BACKGROUND"/>
          <BackRight src={backright} alt="BACKGROUND"/>
        </>
        :
        null
      }
      <Navbar>
        <img src={logo} alt="LOGO" />
        <span>GERADOR DE QRCODE</span>
      </Navbar>
      <Body 
        animate={{ y: 15, opacity: 1 }}
        transition={{ ease: 'easeOut', duration: 1 }} >
        <img 
          className="background"
          src={background} 
          alt="background"/>

        <input
          placeholder="Insira aqui o seu site ou texto." 
          value={texto}
          onChange={e => setTexto(e.target.value)}/>

        <button onClick={handleGerar}>
          <FaQrcode className="icon"/>
          GERAR QRCODE
        </button>

        {
          loading?
          <div>
            <Lottie options={loadingOptions} height={'50px'} width={'50px'} />
          </div>
          :
          null
        }

        <QrCode 
          style={{visibility: `${hidden? 'hidden': 'visible'}`}}
          width="100px" 
          src={`https://vps-3922624.artcopias.com.br:1498/qr_code/${exibir}`} 
          alt="QRCODE"
          height="100px"/>
      </Body>
    </Container>
  );
}

export default App;
