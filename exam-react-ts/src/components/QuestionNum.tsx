import {QuestionType} from "../data";
interface PropsType {
  currentIndex: number;
  questionList: QuestionType[];
}
const QuestionNum = (props: PropsType) => {
  const {
    currentIndex,
    questionList
  } = props;
  return <>
    <div className="questionNum"><span className="current">{currentIndex + 1}</span>/<span className="all">{questionList.length}</span></div>
  </>
}

export default QuestionNum;
