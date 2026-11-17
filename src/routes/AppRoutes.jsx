import { Routes, Route } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";

// Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Courses from "../pages/Courses";
// import CourseDetails from "../pages/CourseDetails";
// import Teachers from "../pages/Teachers";
// import Admissions from "../pages/Admissions";
// import Gallery from "../pages/Gallery";
// import Events from "../pages/Events";
// import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Faculty from "../pages/Faculty";
import NotFound from "../pages/NotFound";
import TermsAndConditions from "../pages/TermsAndConditions";
import PrivacyPolicy from "../pages/PrivacyPolicy";
// import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Main Website Layout */}
      <Route element={<MainLayout />}>
        {/* Home */}
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />        
        <Route path="*" element={<NotFound />} />

        {/*
        <Route path="/course-details" element={<CourseDetails />}/>        
        <Route path="/teachers" element={<Teachers />} />        
        <Route path="/admissions" element={<Admissions />} />        
        <Route path="/gallery" element={<Gallery />} />        
        <Route path="/events" element={<Events />} />        
        <Route path="/blog" element={<Blog />} />        
        <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
