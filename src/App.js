import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./App.css";
import imagemFundo from "./media/fundoPrincipal.mp4";
import aws from './media/aws.png'
import bootstrap from './media/bootstrap.png'
import docker  from './media/docker.png'
import figma  from './media/figma.png'
import git from './media/git.png'
import github from './media/githun.png'
import gitlab from './media/gitlab.png'
import html from './media/htmlcss.png'
import java from './media/java.png'
import javascript from './media/javascript.png'
import jira from './media/jira.png'
import linux from './media/linux.png'
import mongodb from './media/mongodb.png'
import mysql from './media/mysql.png'
import node from './media/node.png'
import oracle from './media/oracle.png'
import outsystems from './media/outsystems.png'
import postgresql from './media/postgresql.png'
import python from './media/python.png'
import react from './media/react.png'
import reactnative from './media/reactnative.png'
import seta from './media/seta.gif'
import springboot from './media/springboot.png'
import sqlite from './media/sqlite.png'
import sqlserver from './media/sqlserver.png'
import vue from './media/vue.png'
import work1 from './media/work/work1.png'
import work2 from './media/work/work2.mp4'
import work3 from './media/work/work3.png'
import work4 from './media/work/work4.png'
import work5 from './media/work/work5.png'
import work6 from './media/work/work6.png'
import gmail from './media/icons-redes/gmail.png'
import whats from './media/icons-redes/whats.png'
import linkedin from './media/icons-redes/linkedin.png'
import clip from './media/clip.png'

function App() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [telaPequena, setTelaPequena] = useState(window.innerWidth < 1350);

  useEffect(() => {
    const handleResize = () => {
      setTelaPequena(window.innerWidth < 1350);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [whatsappText, setWhatsappText] = useState('Whatsapp');
  const [gmailText, setGmailinText] = useState('Gmail');

  const handleMouseEnter = () => {
    setWhatsappText('+55 (85) 98138-1056'); // Altera para o número do WhatsApp
  };

  const handleMouseLeave = () => {
    setWhatsappText('Whatsapp'); // Restaura para o texto original
  };
  const handleMouseEnter2 = () => {
    setGmailinText('afelipe1405@gmail.com'); // Altera para o número do WhatsApp
  };

  const handleMouseLeave2 = () => {
    setGmailinText('Gmail'); // Restaura para o texto original
  };
  
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomedImage, setZoomedImage] = useState(null);
  const [isVideo, setIsVideo] = useState(false);
  
  // Função para abrir o zoom com a imagem selecionada
  // const openZoom = (imgSrc) => {
  //   setZoomedImage(imgSrc);
  //   setIsZoomed(true);
  // };

  // Função para fechar o zoom
  // const closeZoom = () => {
  //   setIsZoomed(false);
  //   setZoomedImage(null);
  // };

  const openZoom = (mediaSrc, isVideo) => {
    setZoomedImage(mediaSrc);
    setIsZoomed(true);
    setIsVideo(isVideo); // Definir se é um vídeo ou uma imagem
  };
  
  // Função para fechar o zoom
  const closeZoom = () => {
    setIsZoomed(false);
    setZoomedImage(null);
    setIsVideo(false);
  };

  
  return (
    <div className="App" id="home">
      <video className="img-fundo" autoPlay loop muted>
        <source src={imagemFundo} type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      <div className="menu-superior">
        <div className="title-name">
          <h3>//:andrenobree</h3>
        </div>

        {!telaPequena ? (
          <div className="combo-links">
            <h3><a href="#home">// home</a></h3>
            <h3><a href="#tecnologias">// about</a></h3>
            <h3><a href="#works">// projects</a></h3>
            <h3><a href="#contact">// contact</a></h3>
          </div>
        ) : (
          <button className="menu-toggle" onClick={() => setMenuAberto(!menuAberto)}>
            {menuAberto ? "→" : "←"}
          </button>
        )}
      </div>

      {telaPequena && (
        <div className={`menu-lateral ${menuAberto ? "aberto" : ""}`}>
          <h3><a href="#">// home</a></h3>
          <h3><a href="#tecnologias">// about</a></h3>
          <h3><a href="#works">// projects</a></h3>
          <h3><a href="#contact">// contact</a></h3>
        </div>
      )}

      <div className="container-svg">
        <img
          src="https://readme-typing-svg.herokuapp.com/?color=fff&size=52&center=true&vCenter=true&width=1000&lines=HELLO,+My+name+is+André+Nobre;I'm+25+years+old;I'm+from+Brazil;I+Graduated+systems+Development;Be+Welcome!+:%29"
          className="info-pessoais"
          alt="Typing SVG"
        />
        <h3 className="cargos">SOFTWARE DEVELOPER, FRONT END, BACK END & APP DEVELOPER</h3>
      </div>
      
      <div className="seta" id="tecnologias">
        <a href="#tecnologias"><img src={seta} className="seta-img"></img></a>
      </div>

      <div className="title-tecnologias" >
        <h1>About Me:</h1>
      </div>

      <div className="sobre-mim">
        <div className="espacamento-sobre">

          <p>
          I have a degree in Systems Analysis and Development and have been working in the Information Technology field for over 4 years.<br></br>

          I have knowledge and experience in both Front-end and Back-end technologies such as: HTML5, CSS3, JavaScript, NodeJS, Java 8+, Python, relational and non-relational databases. I am also experienced with frameworks such as: ReactJS, Bootstrap, Spring Boot, Angular, React Native, and it's worth mentioning that I also have experience with the low-code technology Outsystems.<br></br>

          I have the ability to solve complex problems and design scalable and efficient solutions, with a focus on principles like TDD, SOLID, Clean Code, and Clean Architecture.
          </p>
        </div>
      </div>

      <div className="cards-container">
        <div className="row">
          <div className="card1">
            <h3>//:Skills</h3>
            <div className="tecnologias">
            <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            color="#00cccc"
          >
            <SwiperSlide>
              <img src={javascript} alt="Imagem 1" />
              <img src={react} alt="Imagem 1" />     
            </SwiperSlide>
            <SwiperSlide>
              <img src={bootstrap} alt="Imagem 1" />
              <img src={reactnative} alt="Imagem 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={vue} alt="Imagem 1" />
              <img src={figma} alt="Imagem 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={html} alt="Imagem 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={java} alt="Imagem 1" />
              <img src={node} alt="Imagem 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={python} alt="Imagem 1" />
              <img src={springboot} alt="Imagem 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={mongodb} alt="Imagem 1" />
              <img src={mysql} alt="Imagem 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={oracle} alt="Imagem 1" />
              <img src={postgresql} alt="Imagem 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={sqlite} alt="Imagem 1" />
              <img src={sqlserver} alt="Imagem 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={aws} alt="Imagem 1" />
              <img src={docker} alt="Imagem 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={linux} alt="Imagem 1" />
              <img src={outsystems} alt="Imagem 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={git} alt="Imagem 1" />
              <img src={github} alt="Imagem 1" />
            </SwiperSlide>
            <SwiperSlide id="works">
              <img src={gitlab} alt="Imagem 1" />
              <img src={jira} alt="Imagem 1" />
            </SwiperSlide>
          </Swiper>
            </div>
          </div>
        </div>
      </div>

      <div className="works" >
        <h1>My Projects:</h1>
      </div>
      <div className="projetos">
        <a>
          <div className="card" onClick={() => openZoom(work1)}>
            <div class="card-content"><img src={work1} ></img></div>
            <p class="card-caption">Parking Control System. Developed with the technology <a style={{ color: 'rgb(14, 206, 14)' }}>Outsystems.</a></p>
          </div>
        </a>

        <div className="card" onClick={() => openZoom(work2, true)}>
          <div className="card-content">
            <video autoPlay loop muted>
              <source src={work2} type="video/mp4" />
            </video>
          </div>
          <p className="card-caption">
            Portuguese Voice Recognition System. Developed with the technologies
            <a style={{ color: 'rgb(14, 206, 14)' }}>ReactJs, NodeJs, Express, PostgreSql.</a>
            <a href="https://github.com/AndreNobree/Spectro" target="_blank">
              <img className="clipe" src={clip} />
            </a>
          </p>
        </div>

        <div class="card"  onClick={() => openZoom(work3)}>
          <div class="card-content"><img src={work3}></img></div>
          <p class="card-caption">Appointment System. Developed with the technology <a style={{ color: 'rgb(14, 206, 14)' }}>Java 17 </a>and<a style={{ color: 'rgb(14, 206, 14)' }}> Web Scrapping.</a><a href="https://github.com/AndreNobree/Sistema-Eventos" target="_blank"><img className="clipe" src={clip}></img></a></p>
        </div>
      </div>

      <div className="projetos">
        <div class="card" onClick={() => openZoom(work4)}>
          <div class="card-content"><img src={work4}></img></div>
          <p class="card-caption">Brazilian ZIP Code Query System. Developed with the technology <a style={{ color: 'rgb(14, 206, 14)' }}>ReactJs.</a><a href="https://github.com/AndreNobree/BuscaCep" target="_blank"><img className="clipe" src={clip}></img></a></p>
        </div>
        <div class="card" onClick={() => openZoom(work5)}>
          <div class="card-content"><img src={work5}></img></div> 
          <p class="card-caption">.mp3 (music) and .mp4 (video) file conversion system. Developed with the technology <a style={{ color: 'rgb(14, 206, 14)' }}>Python.</a><a href="https://github.com/AndreNobree/Transformer-Media" target="_blank"><img className="clipe" src={clip}></img></a></p>
        </div>
        <div class="card" onClick={() => openZoom(work6)}>
          <div class="card-content" id="contact"><img src={work6}></img></div>
          <p class="card-caption">Back-end of a secure login system. Developed with the technologies <a style={{ color: 'rgb(14, 206, 14)' }}>Java 17, Docker, MySql, Spring Boot</a> + <a style={{ color: 'rgb(14, 206, 14)' }}>Spring Security </a>+ <a style={{ color: 'rgb(14, 206, 14)' }}>JWT </a>+<a style={{ color: 'rgb(14, 206, 14)' }}> OAUTH2.</a><a href="https://github.com/AndreNobree/Login-SpringBoot" target="_blank"><img className="clipe" src={clip}></img></a></p>
        </div>
      </div>

      {isZoomed && (
        <div className="zoom-modal" onClick={closeZoom}>
          <div className="zoom-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeZoom}>X</button>
            {isVideo ? (
              <video className="zoomed-media" controls autoPlay loop>
                <source src={zoomedImage} type="video/mp4"/>
              </video>
            ) : (
              <img src={zoomedImage} alt="Zoomed" className="zoomed-image" />
            )}
          </div>
        </div>
      )}


      <div className="contact" >
        <h1>Contact:</h1>
      </div>

      <div className="div-inferior-btn">
        <div className="botoes-contato">
          <a id="tag-a">
            <a  href="https://wa.me/5585981381056" target="_blank" >
              <div
                className="whatsapp"
                id="whats"
                onMouseEnter={handleMouseEnter} // Evento para quando o mouse entra
                onMouseLeave={handleMouseLeave}  // Evento para quando o mouse sai
              >
                <img src={whats} alt="WhatsApp" />
                <p id="whatsapp-text">{whatsappText}</p>
              </div>
            </a>

            <a  href="mailto:afelipe1405@gmail.com" target="_blank" >
              <div 
                className="email"
                id="gmail"
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
                >
                  <img src={gmail} alt="Mail" />
                  <p id="gmail-text">{gmailText}</p>
              </div>
            </a>

            <a  href="https://www.linkedin.com/in/andr%C3%A9-nobre-b61397140/" target="_blank" >
              <div className="linkedin">
                <img src={linkedin} alt="Linkedin" />
                Linkedin
              </div>
            </a>
          </a>
        </div>
      </div>

      <div className="footer">
        <h4>Me acompanhe nas redes sociais</h4>
        <ul>
          <li><a href="https://www.linkedin.com/in/andr%C3%A9-nobre-b61397140/" target="_blank">LinkedIn</a></li>
          <li><a href="https://github.com/AndreNobree" target="_blank">GitHub</a></li>
          <li><a href="https://www.instagram.com/andre_nobree/" target="_blank">Instagram</a></li>
        </ul>
        <div className="copy"><h5>&copy; 2025 André Nobre. Todos os direitos reservados.</h5></div>
        
      </div>


    </div>
  );
}

export default App;


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

window.addEventListener('scroll', function() {
  const menu = document.querySelector('.menu-superior');
  if (window.scrollY > 50) {  // Se o usuário rolou para baixo mais de 50px
    menu.style.transition = '.6s';
    menu.style.backgroundColor = 'black';  // Adiciona o fundo preto
    menu.style.height = '35px';  // Adiciona o fundo preto
  } else {
    menu.style.backgroundColor = '';  // Remove o fundo (ou define outro valor)
  }
});
