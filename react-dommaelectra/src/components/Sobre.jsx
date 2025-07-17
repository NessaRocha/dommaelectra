import React, { useEffect, useState } from "react";
import "./Sobre.css";

const Sobre = () => {
  const [animar, setAnimar] = useState(false);
  const [mostrarLogo, setMostrarLogo] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimar(true), 200); // inicia o deslizamento
    setTimeout(() => setMostrarLogo(true), 1400); // mostra o logo após animação
  }, []);

  return (
    <section id="quem" className="sobre-retangulo">
      <div className="sobre-texto-bloco">
        <h2>Conectar • Proteger • Cuidar</h2>
        <h3>Tecnologia com alma feminina</h3>
        <p>
          A Domma Electra nasceu com o propósito de transformar casas em lares inteligentes, acolhedores e seguros. Nossa marca foi pensada para unir tecnologia de ponta à experiência humana, tornando a automação acessível, intuitiva e realmente útil no dia a dia.
        </p>
        <p>
          <strong>Conectar</strong><br/>
          Representa a tecnologia inteligente, a automação residencial e a integração entre dispositivos e pessoas. Queremos que tudo esteja ao seu alcance: luzes, sensores, câmeras, pessoas — tudo conectado ao toque de um botão, facilitando sua rotina e aproximando você do que realmente importa.
        </p>
        <p>
          <strong>Cuidar</strong><br/>
          Mostra o lado humano e acolhedor da tecnologia. Para nós, automação é sobre bem-estar, conforto e qualidade de vida. Ambientes que se ajustam ao seu humor, luzes que contribuem para o seu descanso, sistemas pensados para cuidar de quem está em casa — tudo isso faz parte do nosso compromisso.
        </p>
        <p>
          <strong>Proteger</strong><br/>
          Representa a segurança inteligente, prevenção de riscos e o controle à distância com confiança. Sensores de movimento, travas automáticas, alertas em tempo real: nossa tecnologia está sempre atenta, protegendo você, sua família e seu patrimônio, mesmo quando você não está por perto.
        </p>
        <p>
          A Domma Electra foi criada para que você viva com mais praticidade, conforto e tranquilidade, aproveitando o melhor que a tecnologia pode oferecer, sem perder o toque humano e personalizado.
        </p>
        <p>
          Sou <strong>Vanessa Rocha</strong>, fundadora da Domma Electra, uma empresa que nasceu do meu propósito de levar tecnologia de forma humanizada, segura e funcional aos lares brasileiros — com um olhar feminino, sensível e altamente técnico.
        </p>
        <p>
          Tenho formação superior em Sistemas para Internet e sou pós-graduada em Automação Industrial e Robótica, com foco em soluções inteligentes para residências modernas.
        </p>
        <p>
          A Domma Electra é especializada em automação residencial personalizada, trazendo praticidade, conforto e segurança para o dia a dia — sem complicação e com muito cuidado. Cada projeto é pensado para atender as necessidades reais de quem vive no espaço, respeitando crianças, pets, idosos e o ritmo da casa.
        </p>
        <p>
          Mais do que instalar equipamentos, eu ajudo você a transformar sua casa em um lar inteligente, com autonomia, eficiência e acolhimento.
        </p>
      </div>
    </section>
  );
};

export default Sobre; 