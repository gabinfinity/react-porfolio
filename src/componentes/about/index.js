
import './style.css';

import { Link } from 'react-router-dom';
import BotaoVerMais from '../botao-vermais';

function About() {
  return (
  
    <div className="profile-infos" >

    <h1>OLÁ, MEU NOME É GABRIEL</h1>
    <h2>FULLSTACK <strong style={{
        color: '#7AB1E3'
    }}>{'<DEV />'}</strong></h2>
    <p>TENHO 23 ANOS E JÁ TRABALHO COM DESENVOLVIMENTO HÁ 3 ANOS. ESTE É MEU PRIMEIRO PROJETO COMO DEV FRONTEND</p>

      <div className="about-button">
        <Link to="about"><BotaoVerMais /></Link>
      </div>
    </div>
  )
}

export default About;