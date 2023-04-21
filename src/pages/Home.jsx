import { NavLink } from 'react-router-dom';
import './home.css';

export const Home = () => {
  return (
    <>
        <section className="hero">
          <div className='texto-hero'>
            <h1>Tu cuerpo es tu compañero de vida, cuídalo, escúchalo y atiéndelo</h1>
            <h2>Visítanos y conoce los tratamientos que ofrecemos</h2>
            <NavLink to="/quienessomos" className='conocenos-btn'>Conócenos <span><svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#fff"><path d="M9 6l6 6-6 6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></span></NavLink>
          </div>

          <img src="./src/assets/hero-img.png" alt="" />
        </section>

        <div className="contenido-home">

          <section className='contenedor seccion bienvenida'>
            <img className='bienvenida-img' src="./src/assets/terapeuta.jpg" alt="Terapia de un paciente" />
            <div className="bienvenida-texto">
              <h2 className='subtitulo-serif'>Bienvenido a Fisiovida</h2>
              <p>En Fisiovida contamos con más de 5 años de experiencia en las diferentes áreas de terapia física y de rehabilitación. Creemos en abrir nuestras puertas para ofrecerle una grata experiencia durante su recuperación trabajando con profesionales con gran experiencia en terapia física y rehabilitación que cubrirán las necesidades específicas de cada paciente...</p>
            </div>
          </section>

          <section className='contenedor-100 seccion beneficios'>
            <h2 className='subtitulo-serif'>¿Por qué elegirnos?</h2>
            <div className='lista-beneficios'>
              <div className='beneficio'>
                <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M7 12.5l3 3 7-7" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                <div className='texto-beneficio'>
                  <h3>Calidad</h3>
                  <p>Contamos con terapeutas altamente especializados que ofrecen las mejores técnicas de terapia física</p>
                </div>
              </div>

              <div className='beneficio'>
                <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.5 14.5s-1.5 2-4.5 2-4.5-2-4.5-2" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15.5 9a.5.5 0 110-1 .5.5 0 010 1zM8.5 9a.5.5 0 110-1 .5.5 0 010 1z" fill="#ffffff" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                <div className='texto-beneficio'>
                  <h3>Calidez</h3>
                  <p>Nuestro personal estará esperándote siempre con una sonrisa</p>
                </div>
              </div>

              <div className='beneficio'>
                <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M9 21h6m-6 0v-5m0 5H3.6a.6.6 0 01-.6-.6v-3.8a.6.6 0 01.6-.6H9m6 5V9m0 12h5.4a.6.6 0 00.6-.6V3.6a.6.6 0 00-.6-.6h-4.8a.6.6 0 00-.6.6V9m0 0H9.6a.6.6 0 00-.6.6V16" stroke="#ffffff" strokeWidth="1.5"></path></svg>
                <div className='texto-beneficio'>
                  <h3>Mejora continua</h3>
                  <p>Buscamos mejorar día con día para ofrecer los mejores servicios</p>
                </div>
              </div>
            </div>
          </section>

          <section className='contenedor-70 seccion resumen-servicios'>
              <div className='resumen-servicios-texto'>
                <h2 className='subtitulo-serif resumen-servicios-titulo'>Proveemos servicios de terapia física de la mayor calidad</h2>
                <p>En Fisiovida nos esforzamos por mantenernos a la vanguardia, ofreciendo las mejores técnicas de terapia física pensando en tu salud y bienestar.</p>
                <div className="datos">
                  <div className="dato">
                    <p className='numero'>+200</p>
                    <p className="etiqueta">pacientes rehabilitados</p>
                  </div>

                  <div className="dato">
                    <p className='numero'>9</p>
                    <p className="etiqueta">técnicas de terapia física</p>
                  </div>

                  <div className="dato">
                    <p className='numero'>4</p>
                    <p className="etiqueta">terapeutas especializados</p>
                  </div>

                  <div className="dato">
                    <p className='numero'>+5</p>
                    <p className="etiqueta">años ayudando</p>
                  </div>
                </div>
              </div>
              <img src="./src/assets/resumen-servicios.jpg" alt="Mujer recibiendo terapia" />
          </section>
        </div>
    </>
  )
}