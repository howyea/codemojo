import {JSX} from "react-dom"
interface PropsType {
  question: string; 
}
const Question = (props: PropsType): JSX.Element => {
  const {question} = props;
  return <div className="question">{question}</div>
}
export default Question;
