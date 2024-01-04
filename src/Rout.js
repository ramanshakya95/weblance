import React from 'react';
import {Routes,Route} from "react-router-dom";
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
    return (
        <>
             <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/services" element={<Services/>}></Route>

                <Route path="/portfolio" element={<PortfolioCat/>}></Route>
                
                <Route path="/portfolio/all-websites" element={<AllWebsites/>}></Route>
                <Route path="/portfolio/bootstrap-websites" element={<BootstrapWebsites/>}></Route>
                <Route path="/portfolio/E-Catalogues" element={<ECatalogues/>}></Route>
                <Route path="/portfolio/emailer-design" element={<EmailerDesign/>}></Route>
                <Route path="/portfolio/newsletter-design" element={<NewsletterDesign/>}></Route>
                <Route path="/portfolio/php-websites" element={<PhpWebsites/>}></Route>
                <Route path="/portfolio/shopify" element={<Shopify/>}></Route>
                <Route path="/portfolio/woocommerce-websites" element={<WoocommerceWebsites/>}></Route>
                <Route path="/portfolio/wordpress-websites" element={<WordpressWebsites/>}></Route>
                <Route path="/portfolio/XD-templates" element={<XDTemplates/>}></Route>

                <Route path="/portfolio/animation" element={<Animation/>}></Route>
                <Route path="/portfolio/banner-design" element={<BannerDesign/>}></Route>
                <Route path="/portfolio/brochure-design" element={<BrochureDesign/>}></Route>
                <Route path="/portfolio/business-card" element={<BusinessCard/>}></Route>
                <Route path="/portfolio/company-profile" element={<CompanyProfile/>}></Route>
                <Route path="/portfolio/ebook-cover" element={<EbookCover/>}></Route>
                <Route path="/portfolio/flyer" element={<Flyer/>}></Route>
                <Route path="/portfolio/infograhic-design" element={<InfograhicDesign/>}></Route>
                <Route path="/portfolio/label-design" element={<LabelDesign/>}></Route>
                <Route path="/portfolio/letter-heads" element={<LetterHeads/>}></Route>
                <Route path="/portfolio/logo-design" element={<LogoDesign/>}></Route>
                <Route path="/portfolio/menu-design" element={<MenuDesign/>}></Route>
                <Route path="/portfolio/packaging-design" element={<PackagingDesign/>}></Route>
                <Route path="/portfolio/PPT-designs" element={<PPTDesigns/>}></Route>
                <Route path="/portfolio/standy-design" element={<StandyDesign/>}></Route>
                <Route path="/portfolio/Tshirt-design" element={<TshirtDesign/>}></Route>

                <Route path="/portfolio/article-writing" element={<ArticleWriting/>}></Route>
                <Route path="/portfolio/business-writing" element={<BusinessWriting/>}></Route>
                <Route path="/portfolio/product-descriptions" element={<ProductDescriptions/>}></Route>
                <Route path="/portfolio/content-writing" element={<ContentWriting/>}></Route>
                <Route path="/portfolio/blog-writing" element={<BlogWriting/>}></Route>
                <Route path="/portfolio/essay-writing" element={<EssayWriting/>}></Route>
                <Route path="/portfolio/proofreading" element={<Proofreading/>}></Route>

                <Route path="*" element={<Error/>}></Route>
            </Routes>
        </>
    );
};

export default Rout;