import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';
import BackendDevelopment from './BackendDevelopment';
import FrontendDevelopment from './FrontendDevelopment';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<><Header /><Main /><Services /><Footer /></>} />
                <Route path="/services" element={<Services />} />
                <Route path="/backend-development" element={<BackendDevelopment />} />
                <Route path="/frontend-development" element={<FrontendDevelopment />} />
                <Route path="/contact" element={<Contact />} />
                <Route 
                    path="/header-contact-footer" 
                    element={
                        <>
                            <Header />
                            <Contact />
                            <Footer />
                        </>
                    } 
                />
            </Routes>
        </Router>
    );
}

export default App;
