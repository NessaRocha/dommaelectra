import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sobre from './components/Sobre';
import Servicos from './components/Servicos';
import AutomacaoResidencial from './components/AutomacaoResidencial';
import ShowcaseAlternado from './components/ShowcaseAlternado';
import { useState } from 'react';
import { servicesArray } from './data/services';
import './styles/animations.css';
import './index.css';

function App() {
  const [slideAtivo, setSlideAtivo] = useState('');

  return (
    <>
      <Navbar slideAtivo={slideAtivo} />
      <AutomacaoResidencial setSlideAtivo={setSlideAtivo} />
      <Servicos />
      <ShowcaseAlternado sections={servicesArray} />
      <Sobre />
      <Footer />
    </>
  );
}

export default App;
