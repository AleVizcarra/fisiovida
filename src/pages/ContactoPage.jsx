import './generalStyles.css';
import './contactoPage.css';
import { Helmet } from 'react-helmet';

export const ContactoPage = () => {
  return (
    <>
        <Helmet>
          <title>Fisiovida | Contacto</title>
        </Helmet>
        <main className="contenedor main-contacto">
          <h1 className="titulo-pag-secundaria titulo-azul">Ponte en contacto con nosotros</h1>
          <p>Envíanos un mensaje para resolver tus dudas o recibir más información.</p>
          
          <form className="formulario" action="https://formsubmit.co/clinicafisiovidamzt@gmail.com" method="POST">
              {/* <img className="formulario-img" src="./src/assets/form-img.png" alt="Paciente recibiendo terapia" /> */}
              <div className="inputs-nombre">
                <div>
                  <label htmlFor="nombre">Nombre</label>
                  <input id="nombre" type="text" name="nombre-usuario" autoComplete='off'/>
                </div>
                <div>
                  <label htmlFor="apellidos">Apellidos</label>
                  <input id="apellidos" type="text" name="apellidos-usuario" autoComplete='off' />
                </div>
              </div>
              <div className="input-email">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email-usuario" autoComplete='off' />
              </div>
              <div className="input-mensaje">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea id="mensaje" name="mensaje-usuario" ></textarea>
              </div>
              <input className='submit-btn' type="submit" value="Enviar" />
            </form>
        </main>
    </>
  )
}