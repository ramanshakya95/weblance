import React from 'react';
import {Routes,Route} from "react-router-dom";
import Home from './pages/home/Home';
import About from './pages/about/About';
import Services from './pages/services/Services';
import PortfolioCat from './pages/portfolioCat/PortfolioCat_';
import BootstrapWebsites from './pages/portfolio/BootstrapWebsites';
import ECatalogues from './pages/portfolio/E-Catalogues';
import EmailerDesign from './pages/portfolio/EmailerDesign';
import NewsletterDesign from './pages/portfolio/NewsletterDesign';
import PhpWebsites from './pages/portfolio/PhpWebsites';
import Shopify from './pages/portfolio/Shopify';
import WoocommerceWebsites from './pages/portfolio/WoocommerceWebsites';
import WordpressWebsites from './pages/portfolio/WordpressWebsites';
import XDTemplates from './pages/portfolio/XD_Templates';
import Error from './pages/Error';

const Rout = () => {
    return (
        <>
             <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/services" element={<Services/>}></Route>
                <Route path="/portfolio" element={<PortfolioCat/>}></Route>
                <Route path="/portfolio/bootstrap-websites" element={<BootstrapWebsites/>}></Route>
                <Route path="/portfolio/E-Catalogues" element={<ECatalogues/>}></Route>
                <Route path="/portfolio/emailer-design" element={<EmailerDesign/>}></Route>
                <Route path="/portfolio/newsletter-design" element={<NewsletterDesign/>}></Route>
                <Route path="/portfolio/php-websites" element={<PhpWebsites/>}></Route>
                <Route path="/portfolio/shopify" element={<Shopify/>}></Route>
                <Route path="/portfolio/woocommerce-websites" element={<WoocommerceWebsites/>}></Route>
                <Route path="/portfolio/wordpress-websites" element={<WordpressWebsites/>}></Route>
                <Route path="/portfolio/XD-templates" element={<XDTemplates/>}></Route>
                <Route path="*" element={<Error/>}></Route>
            </Routes>
        </>
    );
};

export default Rout;