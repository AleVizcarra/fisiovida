import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { ContactoPage } from "../pages/ContactoPage"
import { QuienesSomosPage } from "../pages/QuienesSomosPage"
import { ServiciosPage } from "../pages/ServiciosPage"
import { TestimoniosPage } from "../pages/TestimoniosPage"
import { Navbar } from "../ui/components/Navbar";
import { Footer } from "../ui/components/Footer";

export const AppRouter = () => {
  return (
    <>
        <Navbar />
        
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/quienessomos" element={<QuienesSomosPage />} />
            <Route path="/servicios" element={<ServiciosPage />} />
            <Route path="/testimonios" element={<TestimoniosPage />} />
            <Route path="/contacto" element={<ContactoPage />} />
        </Routes>

        <Footer />
    </>
  )
}