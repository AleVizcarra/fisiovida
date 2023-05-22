import './generalStyles.css';
import './quienesSomos.css';
import { Helmet } from 'react-helmet';


export const QuienesSomosPage = () => {
  return (
    <>
        <Helmet>
          <title>Fisiovida | Quiénes somos</title>
        </Helmet>
        {/* SECCIÓN CON BACKGROUND IMAGE */}
        <section className="hero-pag-secundaria hero-pag-quienes-somos">
          <div className='texto-hero-pag-secundaria'>
            <h1 className="titulo">¿QUIÉNES SOMOS?</h1>
          </div>
        </section>

        {/* contenedor es una clase de home.css */}
        <main>
          <section className="historia contenedor">
            <h2 className="subtitulo-pag-secundaria subtitulo-centrado subtitulo-azul">HISTORIA</h2>
            <p>Fisiovida nace en 2015 con el propósito de ofrecer servicios de terapia física oportunos a la población mexicana, con la misión de contribuir a que cada día más personas, en más lugares, tengan acceso a cuidados de salud de calidad, contando con el mejor equipo humano y tecnológico.</p>
          </section>
          {/* contenedor-100 y section son clases de home.css */}
          <section className="mision-vision contenedor-100">
            <div className="contenedor">
              <div className="mision">
                <div className="mision-texto">
                  <h2 className="subtitulo-pag-secundaria blanco">MISIÓN</h2>
                  <p>Brindar al paciente la más alta calidad y profesionalismo en terapia física de acuerdo a sus necesidades específicas, rodeado de un trato amable y personalizado bajo la supervisión y control de terapeutas especializadas.</p>
                </div>
                <svg strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#fff"><path d="M8.5 11.5l3 3 5-5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M5 18L3.13 4.913a.996.996 0 01.774-1.114l7.662-1.703a2 2 0 01.868 0L20.096 3.8c.51.113.848.596.774 1.114L19 18c-.07.495-.5 3.5-7 3.5S5.07 18.495 5 18z" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              </div>
              <div className="vision">
                <div className="vision-texto">
                  <h2 className="subtitulo-pag-secundaria blanco">VISIÓN</h2>
                  <p>Ser reconocida como una de las mejores clínicas de Sinaloa con un liderazgo eficiente, a través de la personalización en los tratamientos y la constante adquisición de los conocimientos y habilidades del personal.</p>
                </div>
                <svg viewBox="0 0 24 24" strokeWidth="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#fff"><path d="M10.586 10.586L16.95 7.05l-3.536 6.364L7.05 16.95l3.536-6.364z" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              </div>
            </div>
          </section>
          <section className="valores">
            <h2 className="subtitulo-pag-secundaria subtitulo-centrado">Valores</h2>
            <div className="lista-valores">
              <div className="valor">
                <svg width="60px" height="60px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#0466c8"><path d="M13.667 16h-3.334v-2.333H8v-3.334h2.333V8h3.334v2.333H16v3.334h-2.333V16z" stroke="#0466c8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M5 18L3.13 4.913a.996.996 0 01.774-1.114l7.662-1.703a2 2 0 01.868 0L20.096 3.8c.51.113.848.596.774 1.114L19 18c-.07.495-.5 3.5-7 3.5S5.07 18.495 5 18z" stroke="#0466c8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                <div className="valor-info">
                  <h3 className="valor-titulo">Compromiso</h3>
                  <p className="valor-texto">Nos comprometemos en dar lo mejor de nosotros para satisfacer tus necesidades</p>
                </div>
              </div>
              <div className="valor">
                <svg width="60px" height="60px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#0466c8"><path d="M16 6.28a2.28 2.28 0 01-.662 1.606c-.976.984-1.923 2.01-2.936 2.958a.597.597 0 01-.822-.017l-2.918-2.94a2.281 2.281 0 010-3.214 2.277 2.277 0 013.232 0L12 4.78l.106-.107A2.276 2.276 0 0116 6.28z" stroke="#0466c8" strokeWidth="1.5" strokeLinejoin="round"></path><path d="M18 20l3.824-3.824a.6.6 0 00.176-.424V10.5A1.5 1.5 0 0020.5 9v0a1.5 1.5 0 00-1.5 1.5V15" stroke="#0466c8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M18 16l.858-.858a.484.484 0 00.142-.343v0a.485.485 0 00-.268-.433l-.443-.221a2 2 0 00-2.308.374l-.895.895a2 2 0 00-.586 1.414V20M6 20l-3.824-3.824A.6.6 0 012 15.752V10.5A1.5 1.5 0 013.5 9v0A1.5 1.5 0 015 10.5V15" stroke="#0466c8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6 16l-.858-.858A.485.485 0 015 14.799v0c0-.183.104-.35.268-.433l.443-.221a2 2 0 012.308.374l.895.895a2 2 0 01.586 1.414V20" stroke="#0466c8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                <div className="valor-info">
                  <h3 className="valor-titulo">Integridad</h3>
                  <p className="valor-texto">Actuar con rectitud, honestidad, transparencia, respeto y lealtad</p>
                </div>
              </div>
              <div className="valor">
                <svg width="60px" height="60px" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#0466c8"><g clipPath="url(#bright-star_svg__clip0_3057_14628)" stroke="#0466c8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9.952 9.623l1.559-3.305a.535.535 0 01.978 0l1.559 3.305 3.485.533c.447.068.625.644.302.974l-2.522 2.57.595 3.631c.077.467-.391.822-.791.602L12 16.218l-3.117 1.715c-.4.22-.868-.135-.791-.602l.595-3.63-2.522-2.571c-.323-.33-.145-.906.302-.974l3.485-.533zM22 12h1M12 2V1M12 23v-1M20 20l-1-1M20 4l-1 1M4 20l1-1M4 4l1 1M1 12h1"></path></g><defs><clipPath id="bright-star_svg__clip0_3057_14628"><path fill="#fff" d="M0 0h24v24H0z"></path></clipPath></defs></svg>
                <div className="valor-info">
                  <h3 className="valor-titulo">Calidad</h3>
                  <p className="valor-texto">Otorgar servicios con el máximo de nuestras capacidades y recursos </p>
                </div>
              </div>
              <div className="valor">
              <svg width="60px" height="60px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#0466c8"><path d="M2 20v-1a7 7 0 017-7v0" stroke="#0466c8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15.804 12.313a1.618 1.618 0 012.392 0v0c.325.357.79.55 1.272.527v0a1.618 1.618 0 011.692 1.692v0c-.023.481.17.947.526 1.272v0c.705.642.705 1.75 0 2.392v0c-.356.325-.549.79-.526 1.272v0a1.618 1.618 0 01-1.692 1.692v0a1.618 1.618 0 00-1.272.526v0a1.618 1.618 0 01-2.392 0v0a1.618 1.618 0 00-1.272-.526v0a1.618 1.618 0 01-1.692-1.692v0a1.618 1.618 0 00-.527-1.272v0a1.618 1.618 0 010-2.392v0c.357-.325.55-.79.527-1.272v0a1.618 1.618 0 011.692-1.692v0c.481.023.947-.17 1.272-.527v0z" stroke="#0466c8" strokeWidth="1.5"></path><path d="M15.364 17l1.09 1.09 2.182-2.18M9 12a4 4 0 100-8 4 4 0 000 8z" stroke="#0466c8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                <div className="valor-info">
                  <h3 className="valor-titulo">Profesionalismo</h3>
                  <p className="valor-texto">Otorgar servicios con el máximo de nuestras capacidades y recursos </p>
                </div>
              </div>
            </div>
          </section>

          <section className="equipo contenedor-100">
            <h2 className="subtitulo-pag-secundaria subtitulo-centrado subtitulo-azul">NUESTRO EQUIPO DE TERAPEUTAS</h2>
            <div className="lista-terapeutas">
              <div className="fila">
                <div className="terapeuta">
                  <img className="terapeuta-img" src="./src/assets/terapeuta1.jpg" alt="Eduardo Bernal" />
                  <div className="terapeuta-texto">
                    <h3 className="nombre-terapeuta">Eduardo Bernal</h3>
                    <p className="puesto">Co-fundador y Terapeuta</p>
                    <div className="redes-sociales">
                      <a className="link-rs bg-gris" href="#">
                        <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#0466c8"><path d="M17 2h-3a5 5 0 00-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" stroke="#0466c8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                      </a>
                      <a className="link-rs bg-gris" href="#">
                        <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#0466c8"><path d="M23 3.01s-2.018 1.192-3.14 1.53a4.48 4.48 0 00-7.86 3v1a10.66 10.66 0 01-9-4.53s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83C21.94 5.674 23 3.01 23 3.01z" stroke="#0466c8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                      </a>
                      <a className="link-rs bg-gris" href="#">
                        <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#0466c8"><path d="M12 16a4 4 0 100-8 4 4 0 000 8z" stroke="#0466c8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 16V8a5 5 0 015-5h8a5 5 0 015 5v8a5 5 0 01-5 5H8a5 5 0 01-5-5z" stroke="#0466c8" strokeWidth="1.5"></path><path d="M17.5 6.51l.01-.011" stroke="#0466c8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="terapeuta">
                  <img className="terapeuta-img" src="./src/assets/terapeuta2.jpg" alt="Valeria Osuna" />
                  <div className="terapeuta-texto">
                    <h3 className="nombre-terapeuta">Valeria Osuna</h3>
                    <p className="puesto">Co-fundador y Terapeuta</p>
                    <div className="redes-sociales">
                      <a className="link-rs bg-gris" href="#">
                        <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#0466c8"><path d="M17 2h-3a5 5 0 00-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" stroke="#0466c8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                      </a>
                      <a className="link-rs bg-gris" href="#">
                        <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#0466c8"><path d="M23 3.01s-2.018 1.192-3.14 1.53a4.48 4.48 0 00-7.86 3v1a10.66 10.66 0 01-9-4.53s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83C21.94 5.674 23 3.01 23 3.01z" stroke="#0466c8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                      </a>
                      <a className="link-rs bg-gris" href="#">
                        <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#0466c8"><path d="M12 16a4 4 0 100-8 4 4 0 000 8z" stroke="#0466c8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 16V8a5 5 0 015-5h8a5 5 0 015 5v8a5 5 0 01-5 5H8a5 5 0 01-5-5z" stroke="#0466c8" strokeWidth="1.5"></path><path d="M17.5 6.51l.01-.011" stroke="#0466c8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="fila">
                <div className="terapeuta">
                  <img className="terapeuta-img" src="./src/assets/terapeuta3.jpeg" alt="Roberto García" />
                  <div className="terapeuta-texto">
                    <h3 className="nombre-terapeuta">Roberto García</h3>
                    <p className="puesto">Terapeuta</p>
                    <div className="redes-sociales">
                      <a className="link-rs bg-gris" href="#">
                        <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#0466c8"><path d="M17 2h-3a5 5 0 00-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" stroke="#0466c8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                      </a>
                      <a className="link-rs bg-gris" href="#">
                        <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#0466c8"><path d="M23 3.01s-2.018 1.192-3.14 1.53a4.48 4.48 0 00-7.86 3v1a10.66 10.66 0 01-9-4.53s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83C21.94 5.674 23 3.01 23 3.01z" stroke="#0466c8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                      </a>
                      <a className="link-rs bg-gris" href="#">
                        <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#0466c8"><path d="M12 16a4 4 0 100-8 4 4 0 000 8z" stroke="#0466c8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 16V8a5 5 0 015-5h8a5 5 0 015 5v8a5 5 0 01-5 5H8a5 5 0 01-5-5z" stroke="#0466c8" strokeWidth="1.5"></path><path d="M17.5 6.51l.01-.011" stroke="#0466c8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="terapeuta">
                  <img className="terapeuta-img" src="./src/assets/terapeuta4.jpg" alt="Mónica Gómez" />
                  <div className="terapeuta-texto">
                    <h3 className="nombre-terapeuta">Mónica Gómez</h3>
                    <p className="puesto">Terapeuta</p>
                    <div className="redes-sociales">
                      <a className="link-rs bg-gris" href="#">
                        <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#0466c8"><path d="M17 2h-3a5 5 0 00-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" stroke="#0466c8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                      </a>
                      <a className="link-rs bg-gris" href="#">
                        <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#0466c8"><path d="M23 3.01s-2.018 1.192-3.14 1.53a4.48 4.48 0 00-7.86 3v1a10.66 10.66 0 01-9-4.53s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83C21.94 5.674 23 3.01 23 3.01z" stroke="#0466c8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                      </a>
                      <a className="link-rs bg-gris" href="#">
                        <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#0466c8"><path d="M12 16a4 4 0 100-8 4 4 0 000 8z" stroke="#0466c8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 16V8a5 5 0 015-5h8a5 5 0 015 5v8a5 5 0 01-5 5H8a5 5 0 01-5-5z" stroke="#0466c8" strokeWidth="1.5"></path><path d="M17.5 6.51l.01-.011" stroke="#0466c8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
    </>
  )
}