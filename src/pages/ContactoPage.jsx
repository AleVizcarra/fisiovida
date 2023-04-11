export const ContactoPage = () => {
  return (
    <>
        <h1 className="titulo">Ponte en contacto con nosotros</h1>
        <p>Envíanos un mensaje para resolver tus dudas o recibir más información.</p>

        <section className="seccion-formulario">
          <img className="formulario-img" src="./src/assets/form-img.png" alt="Paciente recibiendo terapia" />
          <form className="formulario" action="">
            <div className="inputs-nombre">
              <label htmlFor="nombre">Nombre</label>
              <input id="nombre" type="text" name="nombre-usuario" placeholder="Escribe tu nombre" />

              <label htmlFor="apellidos">Apellidos</label>
              <input id="apellidos" type="text" name="apellidos-usuario" placeholder="Escribe tus apellidos" />
            </div>
            
            <div className="input-email">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email-usuario" placeholder="Escribe tu correo" />
            </div>

            <div className="input-mensaje">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea id="mensaje" name="mensaje-usuario" cols="55" rows="8" placeholder="Déjanos tu mensaje"></textarea>
            </div>

            <input type="submit" value="Enviar" />
          </form>
        </section>
    </>
  )
}