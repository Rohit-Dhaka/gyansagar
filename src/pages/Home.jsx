import SEO from "../components/common/SEO";
import AboutSection from "../components/home/AboutSection";
import ContactSection from "../components/home/ContactSection";
import ExamPreparationSection from "../components/home/ExamPreparationSection";
import Hero from "../components/home/Hero";
import LearningEnvironment from "../components/home/LearningEnvironment";
import ResultsTestimonials from "../components/home/ResultsTestimonials";
import WhyChooseUs from "../components/home/WhyChooseUs";
import FacultySection from "./FacultySection";

const Home = () => {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
         <SEO
        title="Best UGC NET & CSIR NET Coaching in Hisar"
        description="Join Gyan Sagar NET Classes in Hisar for UGC NET, CSIR NET, HTET, CTET, DSSSB and teaching exam preparation. Focused academic guidance since 2018."
        keywords={[
          "UGC NET coaching in Hisar",
          "CSIR NET coaching in Hisar",
          "NET classes in Hisar",
          "HTET preparation",
          "CTET coaching",
        ]}
        path="/"
      />      
      <Hero />
      <AboutSection/>
      <WhyChooseUs/>      
      <ExamPreparationSection/>
      <FacultySection/>
      <ResultsTestimonials/>
      <LearningEnvironment/>
      <ContactSection/>
    </div>
  );
};

export default Home;