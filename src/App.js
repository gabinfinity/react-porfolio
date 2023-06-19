import './App.css';
import BotaoCv from './componentes/botao-cv';
import BotaoGithub from './componentes/botao-github';
import BotaoLinkedin from './componentes/botao-linkedin';
import BotaoMail from './componentes/botao-mail';

function App() {
  return (
    <div className="app">
      <section className="profile-container">
        <div className="profile-icons">
          <a href="https://www.linkedin.com/in/gabriel-manzoni-bb4796249" target='blank'>
            <BotaoLinkedin />
          </a>
          <a href="https://github.com/gabinfinity" target='blank'>
            <BotaoGithub />
          </a>
          <a href="mailto:gabmzni@gmail.com" target='blank'>
            <BotaoMail />
          </a>
          <a href="Curriculo.pdf" target='blank'>
            <BotaoCv />
          </a> 
        </div>
        <div className="profile-infos" >

          <h1>OLÁ, MEU NOME É GABRIEL</h1>
          <h2>FULLSTACK DEVELOPER</h2>
          <h3>TENHO 23 ANOS E JÁ SOU DESENVOLVEDOR BACKEND FREELANCER HÁ ALGUNS ANOS. ESTOU INICIANDO AGORA A MINHA JORNADA COM FRONT-END.</h3>

        </div>
        <img className="profile-image" src="https://github.com/gabinfinity.png" alt="Foto de Gabriel" />
      </section>    
    </div>
  );
}

export default App;
