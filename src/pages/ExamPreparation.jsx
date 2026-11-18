import SEO from "../components/common/SEO"
import ExamAdmissionCTA from "../components/examPreparation/ExamAdmissionCTA"
import ExamPreparationApproach from "../components/examPreparation/ExamPreparationApproach"
import ExamPreparationHero from "../components/examPreparation/ExamPreparationHero"
import ExamPreparationSection from "../components/examPreparation/ExamPreparationSection"


const ExamPreparation = () => {
  return (
    <main>
        <SEO
        title="UGC NET, CSIR NET & Teaching Exam Preparation in Hisar"
        description="Explore exam preparation programs at Gyan Sagar NET Classes, Hisar for UGC NET, CSIR NET, HTET, CTET, DSSSB, PGT, TGT and other competitive teaching examinations."
        keywords={[
          "UGC NET preparation in Hisar",
          "CSIR NET preparation in Hisar",
          "HTET preparation in Hisar",
          "CTET coaching in Hisar",
          "DSSSB exam preparation",
          "PGT TGT coaching in Hisar",
          "Teaching exam preparation in Hisar",
          "Competitive exam coaching in Hisar",
        ]}
        path="/exam-preparation"
      />      
        <ExamPreparationHero/>
        <ExamPreparationSection/>
        <ExamPreparationApproach/>
        <ExamAdmissionCTA/>
    </main>
  )
}

export default ExamPreparation