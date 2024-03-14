import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import SearchPage from "../Pages/SearchPage/SearchPage";
import Articles from "../Pages/Articles/Articles";
import ArticleDetails from "../Pages/ArticleDetails/ArticleDetails";
import Teams from "../Pages/Teams/Teams";
import Clients from "../Pages/Clients/Clients";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import PropertyContact from "../Pages/PropertyContact/PropertyContact";
import PropertyContactForm from "../Pages/PropertyContactForm/PropertyContactForm";
import Csr from "../Pages/Csr/Csr";
import MandatedPropertiesResults from "../Pages/MandatedPropertiesResults/MandatedPropertiesResults";
import Career from "../Pages/Career/Career";
import CareerDetails from "../Pages/CareerDetails/CareerDetails";
import Rewards from "../Pages/Rewards/Rewards";
import ContactUs from "../Pages/ContactUs/ContactUs";
import NewsRoom from "../Pages/NewsRoom/NewsRoom";
import ErrorPage from "../Pages/404/ErrorPage";
import MandatedProperties from "../Pages/MandatedProperties/MandatedProperties";
import MandatedPropertiesInternal from "../Pages/MandatedPropertiesInternal/MandatedPropertiesInternal";
import Account from "../Components/Account/Account";
import InteriorManagement from "../Pages/Services/InteriorManagement";
import CorporateService from "../Pages/Services/CorporateServices";
import RetailServices from "../Pages/Services/RetailServices";
import InvestmentAdvisory from "../Pages/Services/InvestmentAdvisory";
import HomeSlider from "../Pages/Home/HomeSlider";
import Warehousesservices from "../Pages/Services/Warehouseservices";
import Listyourproperty from "../Components/Listyourproperty";
import Megaheader from "../Components/Header/Megaheader";
import Mainbaner from "../Pages/Home/Mainbaner";
import ApplyJob from "../Pages/Career/ApplyJob";
import CaseStudiesDetails from "../Pages/ArticleDetails/CaseStudiesDetails";
import MultipalSlider from "../Pages/Testingpages/MultipalSlider";
import DetailsSlider from "../Pages/Testingpages/DetailsSlider";
import CaseStudies from "../Pages/Articles/CaseStudies";
import Propertiesforlease from "../Pages/MandatedProperties/Propertiesforlease";
import Propertiesforsale from "../Pages/MandatedProperties/Propertiesforsale";
import PropertyContactFormWarehouse from "../Pages/PropertyContactForm/PropertyContactFormWarehouse";
import PropertyContactFormCorporate from "../Pages/PropertyContactForm/PropertyContactFormCorporate";
import PropertyContactFormInterior from "../Pages/PropertyContactForm/PropertyContactFormInterior";
import PropertyContactFormInvestmentAdvisory from "../Pages/PropertyContactForm/PropertyContactFormInvestmentAdvisory";
import PropertyContactFormRetail from "../Pages/PropertyContactForm/PropertyContactFormRetail";
import Csrimgdetail from "../Pages/Csr/Csrimgdetail";
import ListPopup from "../Components/ListPopup";

const ScreenRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/banner_image" element={<Home />} />

        <Route path="/aboutus" element={<About />} />
        <Route path="/life@rr" element={<About />} />

        <Route path="/insight" element={<About />} />

        <Route path="/search" element={<SearchPage />} />
        <Route path="/market_trends" element={<Articles />} />
        <Route path="/article-details" element={<ArticleDetails />} />
        <Route path="/team@rr" element={<Teams />} />
        <Route path="/team@rr_category" element={<Teams />} />

        <Route path="/leadership" element={<Teams />} />

        <Route path="/executives" element={<Teams />} />

        <Route path="/our-clients" element={<Clients />} />
        <Route path="/services" element={<Home />} />
        <Route path="/interior_management" element={<InteriorManagement />} />
        <Route
          path="/interior_service_gallery"
          element={<InteriorManagement />}
        />

        <Route path="/corporate_leasing" element={<CorporateService />} />
        <Route
          path="/corporate_service_gallery"
          element={<CorporateService />}
        />

        <Route path="/retail_services" element={<RetailServices />} />
        <Route path="/investment_advisory" element={<InvestmentAdvisory />} />
        <Route
          path="/investment_service_gallery"
          element={<InvestmentAdvisory />}
        />

        <Route path="/warehouse_services" element={<Warehousesservices />} />
        <Route
          path="/warehouse_service_gallery"
          element={<Warehousesservices />}
        />

        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/propertycontact" element={<PropertyContact />} />
        <Route path="/propertycontactform" element={<PropertyContactForm />} />
        <Route path="/csr" element={<Csr />} />
        <Route path="retail_service_gallery" element={<RetailServices />} />
        <Route path="retail_services_gallery" element={<RetailServices />} />

        <Route path="/career" element={<Career />} />
        <Route path="/career-details" element={<CareerDetails />} />
        <Route path="/awards" element={<Rewards />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/media" element={<NewsRoom />} />
        <Route path="/news" element={<NewsRoom />} />

        <Route path="/articles" element={<NewsRoom />} />

        <Route path="/properties" element={<MandatedProperties />} />
        <Route path="/property_type" element={<MandatedProperties />} />

        <Route path="/property_location" element={<MandatedProperties />} />

        <Route path="/property_experts" element={<MandatedProperties />} />

        <Route path="/create_property" element={<MandatedProperties />} />

        <Route
          path="/mandated-properties-results"
          element={<MandatedPropertiesResults />}
        />
        <Route
          path="/mandated-properties-internal"
          element={<MandatedPropertiesInternal />}
        />
        <Route path="/404" element={<ErrorPage />} />
        <Route path="/account" element={<Account />} />
        <Route path="/HomeSlider" element={<HomeSlider />} />
        <Route path="/form" element={<Listyourproperty />} />
        <Route path="/Listyourproperty" element={<Home />} />

        <Route path="/ListPopup" element={<ListPopup />} />
        <Route path="/Megaheader" element={<Megaheader />} />
        <Route path="/Mainbaner" element={<Mainbaner />} />
        <Route path="/ApplyJob" element={<ApplyJob />} />
        <Route path="/MultipalSlider" element={<MultipalSlider />} />
        <Route path="/DetailsSlider" element={<DetailsSlider />} />
        <Route path="/CaseStudiesDetails" element={<CaseStudiesDetails />} />
        <Route path="/casestudy" element={<CaseStudies />} />


        <Route path="/Propertiesforlease" element={<Propertiesforlease />} />
        <Route path="/Propertiesforsale" element={<Propertiesforsale />} />
        <Route
          path="/PropertyContactFormRetail"
          element={<PropertyContactFormRetail />}
        />
        <Route
          path="/PropertyContactFormInvestmentAdvisory"
          element={<PropertyContactFormInvestmentAdvisory />}
        />
        <Route
          path="/PropertyContactFormInterior"
          element={<PropertyContactFormInterior />}
        />
        <Route
          path="/PropertyContactFormCorporate"
          element={<PropertyContactFormCorporate />}
        />
        <Route
          path="/PropertyContactFormWarehouse"
          element={<PropertyContactFormWarehouse />}
        />
        <Route path="/Csrimgdetail" element={<Csrimgdetail />} />
      </Routes>
    </BrowserRouter>
  );
};


export default ScreenRouter;

