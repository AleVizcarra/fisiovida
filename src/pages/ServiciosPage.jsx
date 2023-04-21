import './generalStyles.css';
import './serviciosPage.css';

export const ServiciosPage = () => {
  return (
    <>
         {/* SECCIÓN CON BACKGROUND IMAGE */}
         <section className="hero-pag-secundaria hero-pag-servicios">
          <div className='texto-hero-pag-secundaria'>
            <h1 className="titulo">SERVICIOS</h1>
          </div>
        </section>

        <main className='main-servicios contenedor'>
          <h2 className="subtitulo-pag-secundaria subtitulo-azul">Ofrecemos diferentes tipos de fisioterapia</h2>
          <p>Los medios y técnicas utilizados en la fisioterapia  son muy variados e incluso pueden determinar el tipo de terapia física  utilizada.
          Principalmente se dividen en técnicas de terapia manual -utilizando las manos como principal medio de rehabilitación- o de terapia mediante otras herramientas físicas o naturales.</p>

          <section className="tipos-terapia">
            {/* TIPO DE TERAPIA */}
            <div className="tipo-terapia">
              <div className="terapia-icono">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff" class="bi bi-lungs" viewBox="0 0 16 16">
                  <path d="M8.5 1.5a.5.5 0 1 0-1 0v5.243L7 7.1V4.72C7 3.77 6.23 3 5.28 3c-.524 0-1.023.27-1.443.592-.431.332-.847.773-1.216 1.229-.736.908-1.347 1.946-1.58 2.48-.176.405-.393 1.16-.556 2.011-.165.857-.283 1.857-.241 2.759.04.867.233 1.79.838 2.33.67.6 1.622.556 2.741-.004l1.795-.897A2.5 2.5 0 0 0 7 11.264V10.5a.5.5 0 0 0-1 0v.764a1.5 1.5 0 0 1-.83 1.342l-1.794.897c-.978.489-1.415.343-1.628.152-.28-.25-.467-.801-.505-1.63-.037-.795.068-1.71.224-2.525.157-.82.357-1.491.491-1.8.19-.438.75-1.4 1.44-2.25.342-.422.703-.799 1.049-1.065.358-.276.639-.385.833-.385a.72.72 0 0 1 .72.72v3.094l-1.79 1.28a.5.5 0 0 0 .58.813L8 7.614l3.21 2.293a.5.5 0 1 0 .58-.814L10 7.814V4.72a.72.72 0 0 1 .72-.72c.194 0 .475.11.833.385.346.266.706.643 1.05 1.066.688.85 1.248 1.811 1.439 2.249.134.309.334.98.491 1.8.156.814.26 1.73.224 2.525-.038.829-.224 1.38-.505 1.63-.213.19-.65.337-1.628-.152l-1.795-.897A1.5 1.5 0 0 1 10 11.264V10.5a.5.5 0 0 0-1 0v.764a2.5 2.5 0 0 0 1.382 2.236l1.795.897c1.12.56 2.07.603 2.741.004.605-.54.798-1.463.838-2.33.042-.902-.076-1.902-.24-2.759-.164-.852-.38-1.606-.558-2.012-.232-.533-.843-1.571-1.579-2.479-.37-.456-.785-.897-1.216-1.229C11.743 3.27 11.244 3 10.72 3 9.77 3 9 3.77 9 4.72V7.1l-.5-.357V1.5Z"/>
                </svg>
              </div>
              <div className="terapia-texto">
                <h3>Fisioterapia respiratoria</h3>
                <p>La fisioterapia pulmonar utiliza un conjunto de técnicas manuales  para tratar enfermedades neuromusculares o distrofias, así como realizar rehabilitaciones post-quirúrgicas. Su objetivo es el de mejorar el funcionamiento de los músculos del aparato respiratorio</p>
              </div>
            </div>

            {/* TIPO DE TERAPIA */}
            <div className="tipo-terapia">
              <div className="terapia-icono">
                <svg width="30px" height="30px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#fff"><path d="M15 7a2 2 0 100-4 2 2 0 000 4zM12.613 8.267l-3.308 4.135 4.135 4.135-2.067 4.55" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6.41 9.508l3.387-3.309 2.816 2.068 2.895 3.308h3.722M8.892 15.71l-1.241.827H4.343" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              </div>
              <div className="terapia-texto">
                <h3>Fisioterapia deportiva</h3>
                <p>Se trata de una especialidad de la fisioterapia que busca la terapia física y rehabilitación, así como atención de deportistas o personas que practican actividades físicas. En general, suele abordar lesiones del aparato locomotor.</p>
              </div>
            </div>

            {/* TIPO DE TERAPIA */}
            <div className="tipo-terapia">
              <div className="terapia-icono">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff" class="bi bi-lightning" viewBox="0 0 16 16">
                  <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1H6.374z"/>
                </svg>
              </div>
              <div className="terapia-texto">
                <h3>Electroterapia y ultrasonidos</h3>
                <p>La electroterapia y la ultrasonoterapia en la fisioterapia utiliza agentes físicos como la aplicación de corrientes eléctricas  o ultrasonidos en el cuerpo de la persona con el fin de potenciar la acción neuromuscular.</p>
              </div>
            </div>

            {/* TIPO DE TERAPIA */}
            <div className="tipo-terapia">
              <div className="terapia-icono">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff" class="bi bi-water" viewBox="0 0 16 16">
                  <path d="M.036 3.314a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 3.964a.5.5 0 0 1-.278-.65zm0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 6.964a.5.5 0 0 1-.278-.65zm0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 9.964a.5.5 0 0 1-.278-.65zm0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.757-.703a.5.5 0 0 1-.278-.65z"/>
                </svg>
              </div>
              <div className="terapia-texto">
                <h3>Hidroterapia</h3>
                <p>Hace referencia al conjunto de procedimientos que  utilizan el agua como método terapéutico. Mediante este tipo de terapia física se puede llegar a reducir la inflamación y ciertos dolores musculares.</p>
              </div>
            </div>

            {/* TIPO DE TERAPIA */}
            <div className="tipo-terapia">
              <div className="terapia-icono">
                <svg width="30px" height="30px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#fff"><path d="M18 20l3.824-3.824a.6.6 0 00.176-.424V10.5A1.5 1.5 0 0020.5 9v0a1.5 1.5 0 00-1.5 1.5V15" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M18 16l.858-.858a.484.484 0 00.142-.343v0a.485.485 0 00-.268-.433l-.443-.221a2 2 0 00-2.308.374l-.895.895a2 2 0 00-.586 1.414V20M6 20l-3.824-3.824A.6.6 0 012 15.752V10.5A1.5 1.5 0 013.5 9v0A1.5 1.5 0 015 10.5V15" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6 16l-.858-.858A.485.485 0 015 14.799v0c0-.183.104-.35.268-.433l.443-.221a2 2 0 012.308.374l.895.895a2 2 0 01.586 1.414V20M13.667 12h-3.334V9.667H8V6.333h2.333V4h3.334v2.333H16v3.334h-2.333V12z" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              </div>
              <div className="terapia-texto">
                <h3>Masoterapia</h3>
                <p>Incluye la  aplicación de técnicas relacionadas con el masaje  tales como el drenaje linfático terapéutico o procedimientos manuales neuromusculares.</p>
              </div>
            </div>

            {/* TIPO DE TERAPIA */}
            <div className="tipo-terapia">
              <div className="terapia-icono">
                <svg width="30px" height="30px" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color=""><path d="M7 14a3 3 0 101 5.83M4.264 15.605a4 4 0 01-.874-6.636M3.42 8.888A2.5 2.5 0 017 5.5M7.238 5.565A2.5 2.5 0 1112 4.5V20M8 20a2 2 0 104 0M12 7a3 3 0 003 3M17 14a3 3 0 11-1 5.83M19.736 15.605a4 4 0 00.874-6.636M20.58 8.888A2.5 2.5 0 0017 5.5M12 4.5a2.5 2.5 0 114.762 1.065M16 20a2 2 0 11-4 0" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              </div>
              <div className="terapia-texto">
                <h3>Fisioterapia neurológica</h3>
                <p>Es de tipo manual y consiste en la realización de técnicas para  intervenir en afecciones relacionadas con el sistema nervioso  y tratar el tono postural y ciertos patrones neuromotores asociados.</p>
              </div>
            </div>

            {/* TIPO DE TERAPIA */}
            <div className="tipo-terapia">
              <div className="terapia-icono">
                <svg width="30px" height="30px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#fff" stroke="#fff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="var(--ci-primary-color, #fff)" d="M224,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,224,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,224,48Z" class="ci-primary"></path> <path fill="var(--ci-primary-color, #fff)" d="M353.959,251.37c-15.021-16.9-35.063-27.659-62.61-33.506L266.551,160H178.123L152,342.863V400h56v96h96V400h80V352C384,307.028,374.174,274.112,353.959,251.37ZM352,368H272v96H240V368H184V345.137L205.877,192h39.572l23.291,54.344,8.629,1.438c24.5,4.083,41.233,11.979,52.672,24.848C344.817,289.253,352,315.215,352,352Z" class="ci-primary"></path> </g></svg>
              </div>
              <div className="terapia-texto">
                <h3>Fisioterapia obstétrica</h3>
                <p>Implica la realización de  ejercicios de gimnasia miasténica hipopresiva para potenciar el suelo pélvico. Se suele recomendar en periodos de gestación, en el momento del parto y del postparto para prevenir disfunciones del suelo pélvico.</p>
              </div>
            </div>

            {/* TIPO DE TERAPIA */}
            <div className="tipo-terapia">
              <div className="terapia-icono">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff" class="bi bi-universal-access" viewBox="0 0 16 16">
                  <path d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM6 5.5l-4.535-.442A.531.531 0 0 1 1.531 4H14.47a.531.531 0 0 1 .066 1.058L10 5.5V9l.452 6.42a.535.535 0 0 1-1.053.174L8.243 9.97c-.064-.252-.422-.252-.486 0l-1.156 5.624a.535.535 0 0 1-1.053-.174L6 9V5.5Z"/>
                </svg>
              </div>
              <div className="terapia-texto">
                <h3>Kinesioterapia</h3>
                <p>La kinesioterapia o kinesiterapia corresponde a un método curativo para el tratamiento de ciertas deformidades óseas  y que consiste en la realización de movimientos activos o pasivos del cuerpo.</p>
              </div>
            </div>

            {/* TIPO DE TERAPIA */}
            <div className="tipo-terapia">
              <div className="terapia-icono">
                <svg width="30px" height="30px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#fff"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.5 14.5s-1.5 2-4.5 2-4.5-2-4.5-2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15.5 9a.5.5 0 110-1 .5.5 0 010 1zM8.5 9a.5.5 0 110-1 .5.5 0 010 1z" fill="#fff" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              </div>
              <div className="terapia-texto">
                <h3>Fisioterapia pediátrica</h3>
                <p>Consiste en aquella rama de la fisioterapia encargada del asesoramiento, tratamiento y cuidado de niños que presentan un retraso general en su desarrollo, así como desórdenes en el movimiento.</p>
              </div>
            </div>
          </section>
        </main>
    </>
  )
}