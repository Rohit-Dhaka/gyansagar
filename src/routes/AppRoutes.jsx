import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Faculty from "../pages/Faculty";
import NotFound from "../pages/NotFound";
import TermsAndConditions from "../pages/TermsAndConditions";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import ExamPreparation from "../pages/ExamPreparation";
import ExamDetailContent from "../components/examPreparation/ExamDetailContent";
import ExamDetail from "../pages/ExamDetail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/exam-preparation" element={<ExamPreparation />} />
        <Route path="/exam-preparation/:examSlug" element={<ExamDetail />}/>
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
