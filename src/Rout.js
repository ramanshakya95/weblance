import React, { useEffect } from 'react';
import {Routes,Route, useLocation} from "react-router-dom";
import Home from './pages/home/Home';
import About from './pages/about/About';
import Services from './pages/services/Services';

import PortfolioCat from './pages/portfolioCat/PortfolioCat_';

import AllWebsites from './pages/portfolio/AllWebsites';
import BootstrapWebsites from './pages/portfolio/BootstrapWebsites';
import ECatalogues from './pages/portfolio/E_Catalogues';
import EmailerDesign from './pages/portfolio/EmailerDesign';
import NewsletterDesign from './pages/portfolio/NewsletterDesign';
import PhpWebsites from './pages/portfolio/PhpWebsites';
import Shopify from './pages/portfolio/Shopify';
import WoocommerceWebsites from './pages/portfolio/WoocommerceWebsites';
import WordpressWebsites from './pages/portfolio/WordpressWebsites';
import XDTemplates from './pages/portfolio/XD_Templates';

import Animation from './pages/portfolio/Animation';
import BannerDesign from './pages/portfolio/BannerDesign';
import BrochureDesign from './pages/portfolio/BrochureDesign';
import BusinessCard from './pages/portfolio/BusinessCard';
import CompanyProfile from './pages/portfolio/CompanyProfile';
import EbookCover from './pages/portfolio/EbookCover';
import Flyer from './pages/portfolio/Flyer';
import InfograhicDesign from './pages/portfolio/InfograhicDesign';
import LabelDesign from './pages/portfolio/LabelDesign';
import LetterHeads from './pages/portfolio/LetterHeads';
import LogoDesign from './pages/portfolio/LogoDesign';
import MenuDesign from './pages/portfolio/MenuDesign';
import PackagingDesign from './pages/portfolio/PackagingDesign';
import PPTDesigns from './pages/portfolio/PPT_Designs';
import StandyDesign from './pages/portfolio/StandyDesign';
import TshirtDesign from './pages/portfolio/TshirtDesign';

import ArticleWriting from './pages/portfolio/ArticleWriting';
import BusinessWriting from './pages/portfolio/BusinessWriting';
import ProductDescriptions from './pages/portfolio/ProductDescriptions';
import ContentWriting from './pages/portfolio/ContentWriting';
import BlogWriting from './pages/portfolio/BlogWriting';
import EssayWriting from './pages/portfolio/EssayWriting';
import Proofreading from './pages/portfolio/Proofreading';

import Error from './pages/Error';

const Rout = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0,0);
    },[pathname]);

    return (
        <>
             <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>} exact></Route>
                <Route path="/services" element={<Services/>} exact></Route>

                <Route path="/portfolio" element={<PortfolioCat/>} exact></Route>

                <Route path="/portfolio/all-websites" element={<AllWebsites/>} exact></Route>
                <Route path="/portfolio/bootstrap-websites" element={<BootstrapWebsites/>} exact></Route>
                <Route path="/portfolio/E-Catalogues" element={<ECatalogues/>} exact></Route>
                <Route path="/portfolio/emailer-design" element={<EmailerDesign/>} exact></Route>
                <Route path="/portfolio/newsletter-design" element={<NewsletterDesign/>} exact></Route>
                <Route path="/portfolio/php-websites" element={<PhpWebsites/>} exact></Route>
                <Route path="/portfolio/shopify" element={<Shopify/>} exact></Route>
                <Route path="/portfolio/woocommerce-websites" element={<WoocommerceWebsites/>} exact></Route>
                <Route path="/portfolio/wordpress-websites" element={<WordpressWebsites/>} exact></Route>
                <Route path="/portfolio/XD-templates" element={<XDTemplates/>} exact></Route>

                <Route path="/portfolio/animation" element={<Animation/>} exact></Route>
                <Route path="/portfolio/banner-design" element={<BannerDesign/>} exact></Route>
                <Route path="/portfolio/brochure-design" element={<BrochureDesign/>} exact></Route>
                <Route path="/portfolio/business-card" element={<BusinessCard/>} exact></Route>
                <Route path="/portfolio/company-profile" element={<CompanyProfile/>} exact></Route>
                <Route path="/portfolio/ebook-cover" element={<EbookCover/>} exact></Route>
                <Route path="/portfolio/flyer" element={<Flyer/>} exact></Route>
                <Route path="/portfolio/infograhic-design" element={<InfograhicDesign/>} exact></Route>
                <Route path="/portfolio/label-design" element={<LabelDesign/>} exact></Route>
                <Route path="/portfolio/letter-heads" element={<LetterHeads/>} exact></Route>
                <Route path="/portfolio/logo-design" element={<LogoDesign/>} exact></Route>
                <Route path="/portfolio/menu-design" element={<MenuDesign/>} exact></Route>
                <Route path="/portfolio/packaging-design" element={<PackagingDesign/>} exact></Route>
                <Route path="/portfolio/PPT-designs" element={<PPTDesigns/>} exact></Route>
                <Route path="/portfolio/standy-design" element={<StandyDesign/>} exact></Route>
                <Route path="/portfolio/Tshirt-design" element={<TshirtDesign/>} exact></Route>

                <Route path="/portfolio/article-writing" element={<ArticleWriting/>} exact></Route>
                <Route path="/portfolio/business-writing" element={<BusinessWriting/>} exact></Route>
                <Route path="/portfolio/product-descriptions" element={<ProductDescriptions/>} exact></Route>
                <Route path="/portfolio/content-writing" element={<ContentWriting/>} exact></Route>
                <Route path="/portfolio/blog-writing" element={<BlogWriting/>} exact></Route>
                <Route path="/portfolio/essay-writing" element={<EssayWriting/>} exact></Route>
                <Route path="/portfolio/proofreading" element={<Proofreading/>} exact></Route>

                <Route path="*" element={<Error/>}></Route>
            </Routes>
        </>
    );
};

export default Rout;