import ExamAdmissionCTA from "../components/examPreparation/ExamAdmissionCTA"
import ExamPreparationApproach from "../components/examPreparation/ExamPreparationApproach"
import ExamPreparationHero from "../components/examPreparation/ExamPreparationHero"
import ExamPreparationSection from "../components/examPreparation/ExamPreparationSection"


const ExamPreparation = () => {
  return (
    <main>
        <ExamPreparationHero/>
        <ExamPreparationSection/>
        <ExamPreparationApproach/>
        <ExamAdmissionCTA/>
    </main>
  )
}

export default ExamPreparation