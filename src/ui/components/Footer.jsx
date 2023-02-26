import './footer.css';

export const Footer = () => {
  return (
    <footer>
        <div className="contenedor-footer">
            <p>Fisiovida &copy;</p>
            <div className="conoce-mas">
                <p>Conoce más sobre nosotros</p>
                <div className="redes-sociales">
                    <a href="#">
                        <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M23 3.01s-2.018 1.192-3.14 1.53a4.48 4.48 0 00-7.86 3v1a10.66 10.66 0 01-9-4.53s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83C21.94 5.674 23 3.01 23 3.01z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </a>
                    <a href="#">
                        <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 2h-3a5 5 0 00-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </a>
            
                    <a href="#">
                        <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 16a4 4 0 100-8 4 4 0 000 8z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 16V8a5 5 0 015-5h8a5 5 0 015 5v8a5 5 0 01-5 5H8a5 5 0 01-5-5z" strokeWidth="1.5"></path><path d="M17.5 6.51l.01-.011" stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </a>
                    <a href="#">
                        <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 8v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8a5 5 0 015-5h8a5 5 0 015 5zM7 17v-7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M11 17v-3.25M11 10v3.75m0 0c0-3.75 6-3.75 6 0V17M7 7.01l.01-.011" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </a>
                </div>
            </div>
        </div>
    </footer>
  )
}