
import { useLocation } from "react-router-dom";
import ExamDetailContent from "../components/examPreparation/ExamDetailContent";
import { examPreparationData } from "../data/examPreparationData";

const ExamDetail = () => {
  const location = useLocation();

  const exam = examPreparationData.find(
    (item) => item.path === location.pathname
  );

  return <ExamDetailContent exam={exam} />;
};

export default ExamDetail;
