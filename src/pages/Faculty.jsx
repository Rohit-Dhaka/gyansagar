import SEO from "../components/common/SEO";
import FacultyHero from "../components/faculty/FacultyHero";
import FacultyIntroduction from "../components/faculty/FacultyIntroduction";
import FacultyTeam from "../components/faculty/FacultyTeam";

const Faculty = () => {
  return (
    <main>
      <SEO
        title="Expert Faculty for UGC NET & CSIR NET in Hisar"
        description="Meet the faculty at Gyan Sagar NET Classes, Hisar. Explore our academic team and subject-focused guidance for UGC NET, CSIR NET and teaching examinations."
        keywords={[
          "UGC NET faculty in Hisar",
          "CSIR NET faculty in Hisar",
          "NET coaching teachers in Hisar",
          "Expert faculty for UGC NET",
          "Gyan Sagar NET Classes faculty",
          "Teaching exam preparation faculty",
        ]}
        path="/faculty"
      />
      <FacultyHero />
      <FacultyIntroduction />
      <FacultyTeam />
    </main>
  );
};

export default Faculty;
