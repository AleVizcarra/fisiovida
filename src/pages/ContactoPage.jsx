import './generalStyles.css';
import './contactoPage.css';

export const ContactoPage = () => {
  return (
    <>
        <main className="main-contacto contenedor">
          <h1 className="titulo-pag-secundaria titulo-azul">Ponte en contacto con nosotros</h1>
          <p>Envíanos un mensaje para resolver tus dudas o recibir más información.</p>
          
          <section className="seccion-formulario">
            <img className="formulario-img" src="./src/assets/form-img.png" alt="Paciente recibiendo terapia" />
            <form className="formulario" action="">
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
                <textarea id="mensaje" name="mensaje-usuario" cols="55" rows="8" ></textarea>
              </div>
              <input className='submit-btn' type="submit" value="Enviar" />
            </form>
          </section>
        </main>
    </>
  )
}