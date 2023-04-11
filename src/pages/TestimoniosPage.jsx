export const TestimoniosPage = () => {
  return (
    <>
        {/* SECCIÓN CON BACKGROUND IMAGE */}
        <section className="hero-pag-secundaria">
          <div className='texto-hero-pag-secundaria'>
            <h1 className="titulo">TESTIMONIOS</h1>
          </div>
        </section>

        <main>
          <h2 className="subtitulo-pag-secundaria">Descubre lo que nuestros clientes opinan de nosotros</h2>

          <section className="lista-testimonios">
            {/* TESTIMONIO */}
            <div className="testimonio">
              {/* Opening quotes */}
              <img className="opening-quotes" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAgJJREFUWEftlu1twjAQhs8cRowBkxQmaTNJYZKmkzSdpBkDYZDRVU7kXO5ihxSJSvHPfLx+/Pq+DDzZMk/GAzNQ6kZmh/7cIWvtGwC8kLBzrkhtwN9H/++898Xlcqnib7KubL1eb67X6zsAEEy7EHF7Op3qHKgAQhqb5ntjzPF8Ph9GAa1Wq4P3noR6y3u/5yfkH4XDfADATpConHP7bCBr7Zcm5L0/pmCWy+XOGEMa0ioR8cgdVq9Mg8lxhXYPzvxIriBioV21CBTum2yOVy0FoXT0AEPOtPESvitTidAD0k6W6wxtrMRdEob+7QFJYlI2aJmlHKh2zm1zsrEDNFVMc2fMgTpAQykOAE0B+3TOldpprbUUyDx2qFbRs8oY871YLMqsoE4AxQyVlCkDmSXxF9LBOg4N1B1JsEbEfXzSRN3paSQrtbXW5wSeVvpHONxuw9sPd2gUEKnGgvcAcZcmA8X16R4gCvS4n00GAoA2OO8EojGm5eBAUsqmwmoqUKdociDqX52ZJ0UTX9nYLAvag1dGMLypDjH1WoJSGFUN3iN7vWyMoNRwQxy9CtVarGW8x2njR04siZV2oNtzoN60KHb7aLiisZXGTt6XIGcUCfHUaHAYdRRJDvlB+BcKEavcob4hiP+nZ0ONWXUolVmPfJ906JGbS9ozUMrx2aF/59AN2adQNPnQE5wAAAAASUVORK5CYII="/>

              <img src="./src/assets/testimonio1.jpg" alt="María de Guadalupe Quintanilla" />
              <div className="testimonio-info">
                <p className="testimonio-texto">Fisiovida es lo mejor que me ha pasado en la vida. Al ser diagnosticada con esclerosis me sentía muy deseperanzada ante la vida pero con los tratamientos que me han ofrecido en la clínia soy una mujer que puede disfrutar de la vida.</p>
                <p className="testimonio-nombre">María de Guadalupe Quintanilla</p>
              </div>

              {/* Closing quotes */}
              <img className="closing-quotes" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAf1JREFUWEftl21uwjAMhhO5QRwDTjI4ycZJBicZnGTdSdZjIAx4MkpRmsT5qFQJTc1PmliPX79xjFYvtvSL8agZKFeRWaH/p5Ax5qPPioi66/Xa5rJ0vzdNs9Far/g3Pt80TXc+nzsphughY8yXUuoJ4wRoieiQA7MgHOMB460jABxiYAHQcrlc3W43DrRJKaG1Plwul31sj1WVY6RWBwBbHyoAMsZ852CcEm59pWxCv4VlbQFg50INgKzMDFS6WkTcuptrErLndoh47GMMgEYEUwCw7jOsVKdnOCLiTgJiqWMmTCn2zLDQO0EsRHwK4ytUDeSae7FY7Inos7Te/b7JgEZ48MGUApJ6j5i0f/2NMdUqi0DWlHzLin3kA40oW4eI66ip+cfagEQU9KJKlQatI/p02NvC5swq5crdZ1na7Xm/r7D4lnHQ+/3+QURvFiwGN5DbN5pN7N05z4/qIE4xkB88VsrUe+afl5qmr3DRxCgFc7t0rveUJlQEFBtFplDn4akxmSmlkt5xY0qtREooCSQ9trGrHkss8bYFU4LYh/hDYlrkMTToO4nbFRvyRJhoyRIjSM3oGp2pSnwXlCxyG3ioP7lDVM53kU4tztB+rADIvtjcpTsiOuWGecE7rBA3wR8AaFP/MrJAueyn/p699lMDzArVKjyXLKfYH15lPDSi6AN4AAAAAElFTkSuQmCC"/>
            </div>

            {/* TESTIMONIO */}
            <div className="testimonio">
              {/* Opening quotes */}
              <img className="opening-quotes" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAgJJREFUWEftlu1twjAQhs8cRowBkxQmaTNJYZKmkzSdpBkDYZDRVU7kXO5ihxSJSvHPfLx+/Pq+DDzZMk/GAzNQ6kZmh/7cIWvtGwC8kLBzrkhtwN9H/++898Xlcqnib7KubL1eb67X6zsAEEy7EHF7Op3qHKgAQhqb5ntjzPF8Ph9GAa1Wq4P3noR6y3u/5yfkH4XDfADATpConHP7bCBr7Zcm5L0/pmCWy+XOGEMa0ioR8cgdVq9Mg8lxhXYPzvxIriBioV21CBTum2yOVy0FoXT0AEPOtPESvitTidAD0k6W6wxtrMRdEob+7QFJYlI2aJmlHKh2zm1zsrEDNFVMc2fMgTpAQykOAE0B+3TOldpprbUUyDx2qFbRs8oY871YLMqsoE4AxQyVlCkDmSXxF9LBOg4N1B1JsEbEfXzSRN3paSQrtbXW5wSeVvpHONxuw9sPd2gUEKnGgvcAcZcmA8X16R4gCvS4n00GAoA2OO8EojGm5eBAUsqmwmoqUKdociDqX52ZJ0UTX9nYLAvag1dGMLypDjH1WoJSGFUN3iN7vWyMoNRwQxy9CtVarGW8x2njR04siZV2oNtzoN60KHb7aLiisZXGTt6XIGcUCfHUaHAYdRRJDvlB+BcKEavcob4hiP+nZ0ONWXUolVmPfJ906JGbS9ozUMrx2aF/59AN2adQNPnQE5wAAAAASUVORK5CYII="/>

              <img src="./src/assets/testimonio2.jpg" alt="Víctor Manuel Herrera" />
              <div className="testimonio-info">
                <p className="testimonio-texto">Conozco la clínica desde su fundación. Mis padecimientos requieren de atención permanentes, así que desde entonces hasta la fecha he sido su paciente. Más de 5 años de satisfacción no pueden resumirse en unas cuantas palabras.</p>
                <p className="testimonio-nombre">Víctor Manuel Herrera</p>
              </div>

              {/* Closing quotes */}
              <img className="closing-quotes" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAf1JREFUWEftl21uwjAMhhO5QRwDTjI4ycZJBicZnGTdSdZjIAx4MkpRmsT5qFQJTc1PmliPX79xjFYvtvSL8agZKFeRWaH/p5Ax5qPPioi66/Xa5rJ0vzdNs9Far/g3Pt80TXc+nzsphughY8yXUuoJ4wRoieiQA7MgHOMB460jABxiYAHQcrlc3W43DrRJKaG1Plwul31sj1WVY6RWBwBbHyoAMsZ852CcEm59pWxCv4VlbQFg50INgKzMDFS6WkTcuptrErLndoh47GMMgEYEUwCw7jOsVKdnOCLiTgJiqWMmTCn2zLDQO0EsRHwK4ytUDeSae7FY7Inos7Te/b7JgEZ48MGUApJ6j5i0f/2NMdUqi0DWlHzLin3kA40oW4eI66ip+cfagEQU9KJKlQatI/p02NvC5swq5crdZ1na7Xm/r7D4lnHQ+/3+QURvFiwGN5DbN5pN7N05z4/qIE4xkB88VsrUe+afl5qmr3DRxCgFc7t0rveUJlQEFBtFplDn4akxmSmlkt5xY0qtREooCSQ9trGrHkss8bYFU4LYh/hDYlrkMTToO4nbFRvyRJhoyRIjSM3oGp2pSnwXlCxyG3ioP7lDVM53kU4tztB+rADIvtjcpTsiOuWGecE7rBA3wR8AaFP/MrJAueyn/p699lMDzArVKjyXLKfYH15lPDSi6AN4AAAAAElFTkSuQmCC"/>
            </div>

            {/* TESTIMONIO */}
            <div className="testimonio">
              {/* Opening quotes */}
              <img className="opening-quotes" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAgJJREFUWEftlu1twjAQhs8cRowBkxQmaTNJYZKmkzSdpBkDYZDRVU7kXO5ihxSJSvHPfLx+/Pq+DDzZMk/GAzNQ6kZmh/7cIWvtGwC8kLBzrkhtwN9H/++898Xlcqnib7KubL1eb67X6zsAEEy7EHF7Op3qHKgAQhqb5ntjzPF8Ph9GAa1Wq4P3noR6y3u/5yfkH4XDfADATpConHP7bCBr7Zcm5L0/pmCWy+XOGEMa0ioR8cgdVq9Mg8lxhXYPzvxIriBioV21CBTum2yOVy0FoXT0AEPOtPESvitTidAD0k6W6wxtrMRdEob+7QFJYlI2aJmlHKh2zm1zsrEDNFVMc2fMgTpAQykOAE0B+3TOldpprbUUyDx2qFbRs8oY871YLMqsoE4AxQyVlCkDmSXxF9LBOg4N1B1JsEbEfXzSRN3paSQrtbXW5wSeVvpHONxuw9sPd2gUEKnGgvcAcZcmA8X16R4gCvS4n00GAoA2OO8EojGm5eBAUsqmwmoqUKdociDqX52ZJ0UTX9nYLAvag1dGMLypDjH1WoJSGFUN3iN7vWyMoNRwQxy9CtVarGW8x2njR04siZV2oNtzoN60KHb7aLiisZXGTt6XIGcUCfHUaHAYdRRJDvlB+BcKEavcob4hiP+nZ0ONWXUolVmPfJ906JGbS9ozUMrx2aF/59AN2adQNPnQE5wAAAAASUVORK5CYII="/>

              <img src="./src/assets/testimonio3.jpg" alt="Mario Rodriguez" />
              <div className="testimonio-info">
                <p className="testimonio-texto">Fisiovida cuenta con terapeutas altamente calificados que te brindan siempre la mejor atención.</p>
                <p className="testimonio-nombre">Mario Rodriguez</p>
              </div>

              {/* Closing quotes */}
              <img className="closing-quotes" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAf1JREFUWEftl21uwjAMhhO5QRwDTjI4ycZJBicZnGTdSdZjIAx4MkpRmsT5qFQJTc1PmliPX79xjFYvtvSL8agZKFeRWaH/p5Ax5qPPioi66/Xa5rJ0vzdNs9Far/g3Pt80TXc+nzsphughY8yXUuoJ4wRoieiQA7MgHOMB460jABxiYAHQcrlc3W43DrRJKaG1Plwul31sj1WVY6RWBwBbHyoAMsZ852CcEm59pWxCv4VlbQFg50INgKzMDFS6WkTcuptrErLndoh47GMMgEYEUwCw7jOsVKdnOCLiTgJiqWMmTCn2zLDQO0EsRHwK4ytUDeSae7FY7Inos7Te/b7JgEZ48MGUApJ6j5i0f/2NMdUqi0DWlHzLin3kA40oW4eI66ip+cfagEQU9KJKlQatI/p02NvC5swq5crdZ1na7Xm/r7D4lnHQ+/3+QURvFiwGN5DbN5pN7N05z4/qIE4xkB88VsrUe+afl5qmr3DRxCgFc7t0rveUJlQEFBtFplDn4akxmSmlkt5xY0qtREooCSQ9trGrHkss8bYFU4LYh/hDYlrkMTToO4nbFRvyRJhoyRIjSM3oGp2pSnwXlCxyG3ioP7lDVM53kU4tztB+rADIvtjcpTsiOuWGecE7rBA3wR8AaFP/MrJAueyn/p699lMDzArVKjyXLKfYH15lPDSi6AN4AAAAAElFTkSuQmCC"/>
            </div>

            {/* TESTIMONIO */}
            <div className="testimonio">
              {/* Opening quotes */}
              <img className="opening-quotes" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAgJJREFUWEftlu1twjAQhs8cRowBkxQmaTNJYZKmkzSdpBkDYZDRVU7kXO5ihxSJSvHPfLx+/Pq+DDzZMk/GAzNQ6kZmh/7cIWvtGwC8kLBzrkhtwN9H/++898Xlcqnib7KubL1eb67X6zsAEEy7EHF7Op3qHKgAQhqb5ntjzPF8Ph9GAa1Wq4P3noR6y3u/5yfkH4XDfADATpConHP7bCBr7Zcm5L0/pmCWy+XOGEMa0ioR8cgdVq9Mg8lxhXYPzvxIriBioV21CBTum2yOVy0FoXT0AEPOtPESvitTidAD0k6W6wxtrMRdEob+7QFJYlI2aJmlHKh2zm1zsrEDNFVMc2fMgTpAQykOAE0B+3TOldpprbUUyDx2qFbRs8oY871YLMqsoE4AxQyVlCkDmSXxF9LBOg4N1B1JsEbEfXzSRN3paSQrtbXW5wSeVvpHONxuw9sPd2gUEKnGgvcAcZcmA8X16R4gCvS4n00GAoA2OO8EojGm5eBAUsqmwmoqUKdociDqX52ZJ0UTX9nYLAvag1dGMLypDjH1WoJSGFUN3iN7vWyMoNRwQxy9CtVarGW8x2njR04siZV2oNtzoN60KHb7aLiisZXGTt6XIGcUCfHUaHAYdRRJDvlB+BcKEavcob4hiP+nZ0ONWXUolVmPfJ906JGbS9ozUMrx2aF/59AN2adQNPnQE5wAAAAASUVORK5CYII="/>

              <img src="./src/assets/testimonio4.jpg" alt="Patricia Montoya" />
              <div className="testimonio-info">
                <p className="testimonio-texto">Durante mi embarazo tomé terapia obstétrica lo cual me fue de gran ayuda durante todo el proceso.</p>
                <p className="testimonio-nombre">Patricia Montoya</p>
              </div>

              {/* Closing quotes */}
              <img className="closing-quotes" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAf1JREFUWEftl21uwjAMhhO5QRwDTjI4ycZJBicZnGTdSdZjIAx4MkpRmsT5qFQJTc1PmliPX79xjFYvtvSL8agZKFeRWaH/p5Ax5qPPioi66/Xa5rJ0vzdNs9Far/g3Pt80TXc+nzsphughY8yXUuoJ4wRoieiQA7MgHOMB460jABxiYAHQcrlc3W43DrRJKaG1Plwul31sj1WVY6RWBwBbHyoAMsZ852CcEm59pWxCv4VlbQFg50INgKzMDFS6WkTcuptrErLndoh47GMMgEYEUwCw7jOsVKdnOCLiTgJiqWMmTCn2zLDQO0EsRHwK4ytUDeSae7FY7Inos7Te/b7JgEZ48MGUApJ6j5i0f/2NMdUqi0DWlHzLin3kA40oW4eI66ip+cfagEQU9KJKlQatI/p02NvC5swq5crdZ1na7Xm/r7D4lnHQ+/3+QURvFiwGN5DbN5pN7N05z4/qIE4xkB88VsrUe+afl5qmr3DRxCgFc7t0rveUJlQEFBtFplDn4akxmSmlkt5xY0qtREooCSQ9trGrHkss8bYFU4LYh/hDYlrkMTToO4nbFRvyRJhoyRIjSM3oGp2pSnwXlCxyG3ioP7lDVM53kU4tztB+rADIvtjcpTsiOuWGecE7rBA3wR8AaFP/MrJAueyn/p699lMDzArVKjyXLKfYH15lPDSi6AN4AAAAAElFTkSuQmCC"/>
            </div>

            {/* TESTIMONIO */}
            <div className="testimonio">
              {/* Opening quotes */}
              <img className="opening-quotes" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAgJJREFUWEftlu1twjAQhs8cRowBkxQmaTNJYZKmkzSdpBkDYZDRVU7kXO5ihxSJSvHPfLx+/Pq+DDzZMk/GAzNQ6kZmh/7cIWvtGwC8kLBzrkhtwN9H/++898Xlcqnib7KubL1eb67X6zsAEEy7EHF7Op3qHKgAQhqb5ntjzPF8Ph9GAa1Wq4P3noR6y3u/5yfkH4XDfADATpConHP7bCBr7Zcm5L0/pmCWy+XOGEMa0ioR8cgdVq9Mg8lxhXYPzvxIriBioV21CBTum2yOVy0FoXT0AEPOtPESvitTidAD0k6W6wxtrMRdEob+7QFJYlI2aJmlHKh2zm1zsrEDNFVMc2fMgTpAQykOAE0B+3TOldpprbUUyDx2qFbRs8oY871YLMqsoE4AxQyVlCkDmSXxF9LBOg4N1B1JsEbEfXzSRN3paSQrtbXW5wSeVvpHONxuw9sPd2gUEKnGgvcAcZcmA8X16R4gCvS4n00GAoA2OO8EojGm5eBAUsqmwmoqUKdociDqX52ZJ0UTX9nYLAvag1dGMLypDjH1WoJSGFUN3iN7vWyMoNRwQxy9CtVarGW8x2njR04siZV2oNtzoN60KHb7aLiisZXGTt6XIGcUCfHUaHAYdRRJDvlB+BcKEavcob4hiP+nZ0ONWXUolVmPfJ906JGbS9ozUMrx2aF/59AN2adQNPnQE5wAAAAASUVORK5CYII="/>

              <img src="./src/assets/testimonio5.jpg" alt="Pedro Ordoñez" />
              <div className="testimonio-info">
                <p className="testimonio-texto">Al sufrir una lesión durante un partido de futbol, tomé terapia deportiva con lo cual el proceso de recuperación fue más rápido por lo que estoy muy agradecido con los terapeutas de Fisiovida.</p>
                <p className="testimonio-nombre">Pedro Ordoñez</p>
              </div>

              {/* Closing quotes */}
              <img className="closing-quotes" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAf1JREFUWEftl21uwjAMhhO5QRwDTjI4ycZJBicZnGTdSdZjIAx4MkpRmsT5qFQJTc1PmliPX79xjFYvtvSL8agZKFeRWaH/p5Ax5qPPioi66/Xa5rJ0vzdNs9Far/g3Pt80TXc+nzsphughY8yXUuoJ4wRoieiQA7MgHOMB460jABxiYAHQcrlc3W43DrRJKaG1Plwul31sj1WVY6RWBwBbHyoAMsZ852CcEm59pWxCv4VlbQFg50INgKzMDFS6WkTcuptrErLndoh47GMMgEYEUwCw7jOsVKdnOCLiTgJiqWMmTCn2zLDQO0EsRHwK4ytUDeSae7FY7Inos7Te/b7JgEZ48MGUApJ6j5i0f/2NMdUqi0DWlHzLin3kA40oW4eI66ip+cfagEQU9KJKlQatI/p02NvC5swq5crdZ1na7Xm/r7D4lnHQ+/3+QURvFiwGN5DbN5pN7N05z4/qIE4xkB88VsrUe+afl5qmr3DRxCgFc7t0rveUJlQEFBtFplDn4akxmSmlkt5xY0qtREooCSQ9trGrHkss8bYFU4LYh/hDYlrkMTToO4nbFRvyRJhoyRIjSM3oGp2pSnwXlCxyG3ioP7lDVM53kU4tztB+rADIvtjcpTsiOuWGecE7rBA3wR8AaFP/MrJAueyn/p699lMDzArVKjyXLKfYH15lPDSi6AN4AAAAAElFTkSuQmCC"/>
            </div>
          </section>
        </main>
    </>
  )
}