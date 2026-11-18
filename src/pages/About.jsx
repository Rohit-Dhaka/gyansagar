import AboutHero from "../components/about/AboutHero";
import AboutInstitute from "../components/about/AboutInstitute";
import GyanSagarDifference from "../components/about/GyanSagarDifference";
import OurStory from "../components/about/OurStory";
import TeachingPhilosophy from "../components/about/TeachingPhilosophy";
import SEO from "../components/common/SEO";

const About = () => {
  return (
    <main>
      <SEO
        title="About Gyan Sagar NET Classes in Hisar"
        description="Learn about Gyan Sagar NET Classes, established in 2018 in Hisar, Haryana. Explore our teaching approach and academic guidance for competitive examinations."
        keywords={[
          "NET coaching institute in Hisar",
          "Gyan Sagar NET Classes",
          "competitive exam coaching Hisar",
        ]}
        path="/about"
      />

      <AboutHero />
      <AboutInstitute />
      <OurStory />
      <GyanSagarDifference />
      <TeachingPhilosophy />
    </main>
  );
};

export default About;
