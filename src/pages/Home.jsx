import AboutSection from "../components/home/AboutSection";
import ContactSection from "../components/home/ContactSection";
import CoursesSection from "../components/home/CoursesSection";
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
      <CoursesSection/>
      <FacultySection/>
      <ResultsTestimonials/>
      <LearningEnvironment/>
      <ContactSection/>
    </div>
  );
};

export default Home;