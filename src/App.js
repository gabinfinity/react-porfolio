import './App.css';
import BotaoCv from './componentes/botao-cv';
import BotaoGithub from './componentes/botao-github';
import BotaoLinkedin from './componentes/botao-linkedin';
import BotaoMail from './componentes/botao-mail';

import { Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function App() {
  const { actualPage } = useParams();
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
        <Outlet />
        <img className="profile-image" src="https://github.com/gabinfinity.png" alt="Foto de Gabriel" />
      </section>
    </div>
  );
}

export default App;
