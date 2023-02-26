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
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa enim fugiat debitis deleniti molestias obcaecati! Voluptatum consequatur repudiandae quia obcaecati tenetur enim tempora consequuntur quo necessitatibus ex quam atque beatae veritatis, sequi nisi unde a natus praesentium possimus animi quae vel vitae et accusamus. Ipsum delectus nemo hic cum voluptates.</p>
            </div>
          </section>

          <section className='contenedor-100 seccion beneficios'>
            <h2 className='subtitulo-serif'>¿Por qué elegirnos?</h2>
            <div className='lista-beneficios'>
              <div className='beneficio'>
                <svg strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M13.9 18h-3.8a.6.6 0 01-.6-.6v-2.3a.6.6 0 00-.6-.6H6.6a.6.6 0 01-.6-.6v-3.8a.6.6 0 01.6-.6h2.3a.6.6 0 00.6-.6V6.6a.6.6 0 01.6-.6h3.8a.6.6 0 01.6.6v2.3a.6.6 0 00.6.6h2.3a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-2.3a.6.6 0 00-.6.6v2.3a.6.6 0 01-.6.6z" strokeWidth="1.5"></path><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                <div className='texto-beneficio'>
                  <h3>Beneficio</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, aliquam!</p>
                </div>
              </div>

              <div className='beneficio'>
                <svg strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.9 18h-3.8a.6.6 0 01-.6-.6v-2.3a.6.6 0 00-.6-.6H6.6a.6.6 0 01-.6-.6v-3.8a.6.6 0 01.6-.6h2.3a.6.6 0 00.6-.6V6.6a.6.6 0 01.6-.6h3.8a.6.6 0 01.6.6v2.3a.6.6 0 00.6.6h2.3a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-2.3a.6.6 0 00-.6.6v2.3a.6.6 0 01-.6.6z" strokeWidth="1.5"></path><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                <div className='texto-beneficio'>
                  <h3>Beneficio</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, aliquam!</p>
                </div>
              </div>

              <div className='beneficio'>
                <svg strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.9 18h-3.8a.6.6 0 01-.6-.6v-2.3a.6.6 0 00-.6-.6H6.6a.6.6 0 01-.6-.6v-3.8a.6.6 0 01.6-.6h2.3a.6.6 0 00.6-.6V6.6a.6.6 0 01.6-.6h3.8a.6.6 0 01.6.6v2.3a.6.6 0 00.6.6h2.3a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-2.3a.6.6 0 00-.6.6v2.3a.6.6 0 01-.6.6z" strokeWidth="1.5"></path><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                <div className='texto-beneficio'>
                  <h3>Beneficio</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, aliquam!</p>
                </div>
              </div>
            </div>
          </section>

          <section className='contenedor-70 seccion resumen-servicios'>
              <div className='resumen-servicios-texto'>
                <h2 className='subtitulo-serif resumen-servicios-titulo'>Proveemos servicios de terapia física de la mayor calidad</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae temporibus maiores adipisci earum dolor repellat quas ipsum incidunt dolores culpa voluptatum blanditiis, id harum deserunt eius obcaecati itaque aut tenetur.</p>
                <div className="datos">
                  <div className="dato">
                    <p className='numero'>10</p>
                    <p className="etiqueta">Lorem, ipsum.</p>
                  </div>

                  <div className="dato">
                    <p className='numero'>+50</p>
                    <p className="etiqueta">Lorem, ipsum.</p>
                  </div>

                  <div className="dato">
                    <p className='numero'>17</p>
                    <p className="etiqueta">Lorem, ipsum.</p>
                  </div>

                  <div className="dato">
                    <p className='numero'>20</p>
                    <p className="etiqueta">Lorem, ipsum.</p>
                  </div>
                </div>
              </div>
              <img src="./src/assets/resumen-servicios.jpg" alt="Mujer recibiendo terapia" />
          </section>
        </div>
    </>
  )
}