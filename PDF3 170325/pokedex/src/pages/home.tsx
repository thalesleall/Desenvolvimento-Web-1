import React from 'react';
import styled from 'styled-components';
import Pokedex from '../components/pokedex';

const FullScreenBackground = styled.div`
  position: fixed; /* Garante que o background cubra a tela mesmo com rolagem */
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh; /* 100% da altura da viewport */
  background: radial-gradient(circle, rgb(248, 132, 132) 0%, rgb(248, 125, 125) 50%, rgb(255, 0, 0) 100%);;
  z-index: -1; /* Coloca o background atrás de outros elementos */
`;


const Home: React.FC = () => {
  return (
    <div>
      <FullScreenBackground />
      <div style={{margin: "auto", width: "50%", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
        <Pokedex/>
      </div>
      <div style={{ padding: '20px', position: 'relative', zIndex: 1 }}>
      </div>
    </div>
  );
};

export default Home;