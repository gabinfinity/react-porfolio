import React from 'react'
import './style.css';
import BotaoVerMenos from '../botao-vermenos';
import { Link } from 'react-router-dom';

function CompleteAbout() {
  return (
    <div className="profile-infos" >


    <p>EU SEMPRE FUI ENTUSIASTA DE BACKEND DESDE PEQUENO, ONDE EU FUÇAVA EM EMULADORES DE JOGOS DE NAVEGADORES FEITOS EM PYTHON E JAVA. MAS SOMENTE EM 2019 QUE DECIDI DE FATO APRENDER BACKEND E OPTEI PELA LINGUAGEM LUA. AGORA, EM 2023 DECIDI INICIAR MINHA JORNADA PELO MUNDO DO FRONTEND E TEM SIDO UMA GRANDE AVENTURA DE MUITO APRENDIZADO. CASO TENHA INTERESSE EM ME CONHECER MELHOR, MEU CURRÍCULO ESTÁ LOGO ALI EM BAIXO, ASSIM COMO MEU GITHUB E LINKEDIN. MUITO OBRIGADO PELO SEU TEMPO E VOLTE SEMPRE QUE QUISER {':)'}</p>
    <div className="about-button">
        <Link to="/"><BotaoVerMenos /></Link>
      </div>
    </div>
  )
}

export default CompleteAbout