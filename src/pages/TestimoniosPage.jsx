import { Helmet } from 'react-helmet';
import './generalStyles.css';
import './testimoniosPage.css';

export const TestimoniosPage = () => {
  return (
    <>
        <Helmet>
          <title>Fisiovida | Testimonios</title>
        </Helmet>
        {/* SECCIÓN CON BACKGROUND IMAGE */}
        <section className="hero-pag-testimonios hero-pag-secundaria">
          <div className='texto-hero-pag-secundaria'>
            <h1 className="titulo">TESTIMONIOS</h1>
          </div>
        </section>

        <main className='main-testimonios contenedor'>
          <h2 className="subtitulo-pag-secundaria subtitulo-centrado">Descubre lo que nuestros clientes opinan de nosotros</h2>

          <section className="lista-testimonios">
            {/* TESTIMONIO */}
            <div className="testimonio">

              <img className='testimonio-img' src="./src/assets/testimonio1.jpg" alt="María de Guadalupe Quintanilla" />
              <div className="testimonio-info">
                <p className="testimonio-texto">Fisiovida es lo mejor que me ha pasado en la vida. Al ser diagnosticada con esclerosis me sentía muy deseperanzada ante la vida pero con los tratamientos que me han ofrecido en la clínia soy una mujer que puede disfrutar de la vida.</p>
                <p className="testimonio-nombre">María de Guadalupe Quintanilla</p>
              </div>

              <svg className='quotes' width="80px" height="80px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#C5D6EB"><path d="M10 12H5a1 1 0 01-1-1V7.5a1 1 0 011-1h4a1 1 0 011 1V12zm0 0c0 2.5-1 4-4 5.5M20 12h-5a1 1 0 01-1-1V7.5a1 1 0 011-1h4a1 1 0 011 1V12zm0 0c0 2.5-1 4-4 5.5" stroke="#C5D6EB" strokeWidth="1.5" strokeLinecap="round"></path></svg>
            </div>

            {/* TESTIMONIO */}
            <div className="testimonio">

              <img className='testimonio-img' src="./src/assets/testimonio2.jpg" alt="Víctor Manuel Herrera" />
              <div className="testimonio-info">
                <p className="testimonio-texto">Conozco la clínica desde su fundación. Mis padecimientos requieren de atención permanentes, así que desde entonces hasta la fecha he sido su paciente. Más de 5 años de satisfacción no pueden resumirse en unas cuantas palabras.</p>
                <p className="testimonio-nombre">Víctor Manuel Herrera</p>
              </div>

              <svg className='quotes' width="80px" height="80px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#C5D6EB"><path d="M10 12H5a1 1 0 01-1-1V7.5a1 1 0 011-1h4a1 1 0 011 1V12zm0 0c0 2.5-1 4-4 5.5M20 12h-5a1 1 0 01-1-1V7.5a1 1 0 011-1h4a1 1 0 011 1V12zm0 0c0 2.5-1 4-4 5.5" stroke="#C5D6EB" strokeWidth="1.5" strokeLinecap="round"></path></svg>
            </div>

            {/* TESTIMONIO */}
            <div className="testimonio">

              <img className='testimonio-img' src="./src/assets/testimonio3.jpg" alt="Mario Rodriguez" />
              <div className="testimonio-info">
                <p className="testimonio-texto">Fisiovida cuenta con terapeutas altamente calificados que te brindan siempre la mejor atención.</p>
                <p className="testimonio-nombre">Mario Rodriguez</p>
              </div>

              <svg className='quotes' width="80px" height="80px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#C5D6EB"><path d="M10 12H5a1 1 0 01-1-1V7.5a1 1 0 011-1h4a1 1 0 011 1V12zm0 0c0 2.5-1 4-4 5.5M20 12h-5a1 1 0 01-1-1V7.5a1 1 0 011-1h4a1 1 0 011 1V12zm0 0c0 2.5-1 4-4 5.5" stroke="#C5D6EB" strokeWidth="1.5" strokeLinecap="round"></path></svg>

            </div>

            {/* TESTIMONIO */}
            <div className="testimonio">

              <img className='testimonio-img' src="./src/assets/testimonio4.jpg" alt="Patricia Montoya" />
              <div className="testimonio-info">
                <p className="testimonio-texto">Durante mi embarazo tomé terapia obstétrica lo cual me fue de gran ayuda durante todo el proceso.</p>
                <p className="testimonio-nombre">Patricia Montoya</p>
              </div>

              <svg className='quotes' width="80px" height="80px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#C5D6EB"><path d="M10 12H5a1 1 0 01-1-1V7.5a1 1 0 011-1h4a1 1 0 011 1V12zm0 0c0 2.5-1 4-4 5.5M20 12h-5a1 1 0 01-1-1V7.5a1 1 0 011-1h4a1 1 0 011 1V12zm0 0c0 2.5-1 4-4 5.5" stroke="#C5D6EB" strokeWidth="1.5" strokeLinecap="round"></path></svg>

            </div>

            {/* TESTIMONIO */}
            <div className="testimonio">

              <img className='testimonio-img' src="./src/assets/testimonio5.jpg" alt="Pedro Ordoñez" />
              <div className="testimonio-info">
                <p className="testimonio-texto">Al sufrir una lesión durante un partido de futbol, tomé terapia deportiva con lo cual el proceso de recuperación fue más rápido por lo que estoy muy agradecido con los terapeutas de Fisiovida.</p>
                <p className="testimonio-nombre">Pedro Ordoñez</p>
              </div>

              <svg className='quotes' width="80px" height="80px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#C5D6EB"><path d="M10 12H5a1 1 0 01-1-1V7.5a1 1 0 011-1h4a1 1 0 011 1V12zm0 0c0 2.5-1 4-4 5.5M20 12h-5a1 1 0 01-1-1V7.5a1 1 0 011-1h4a1 1 0 011 1V12zm0 0c0 2.5-1 4-4 5.5" stroke="#C5D6EB" strokeWidth="1.5" strokeLinecap="round"></path></svg>
            </div>
          </section>
        </main>
    </>
  )
}