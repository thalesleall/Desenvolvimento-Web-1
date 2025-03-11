// Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={footerStyle}>
      <p>Feito por Thales Vinicius Leal Barcelos - 24740</p>
    </footer>
  );
};

const footerStyle: React.CSSProperties = {
  width: '100%',
  backgroundColor: '#333',
  color: 'white',
  textAlign: 'center',
  padding: '10px 0',
  marginTop: '20px',
};

export default Footer;
