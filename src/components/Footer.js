import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const footer = (
    <footer>
      <div>
        <h1 className='license'>
          Nazwa firmy - wszelkie prawa zastrzeżone,2021
        </h1>
      </div>
      <div className='icons'>
        <div className='instagram'>
          <FontAwesomeIcon icon={faInstagram} />
        </div>
        <div className='facebook'>
          <FontAwesomeIcon icon={faFacebook} />
        </div>
      </div>
    </footer>
  );

  return footer;
}

export default Footer;
