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