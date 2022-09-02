import {useState, useEffect} from "react"
import {JSX} from "react-dom"
import {QuestionType} from "../data"
import defaultEvent, {Page} from "../common"
interface PropsType {
  questionList: QuestionType[];
  currentIndex: number;
  setCurrentIndex: (currentIndex: number) => void;
  choicedEveryQuestion: number[];
  changeCurrentChoiced: (num: number) => void;
}
const Answer = (props: PropsType): JSX.Element => {
  const {
    questionList,
    currentIndex,
    setCurrentIndex,
    choicedEveryQuestion,
    changeCurrentChoiced
  } = props;
// 为了获取当前题目的选项
  const getAnswerChoice = (current: number) => {
    return questionList[current].answer.map((value: string, index: number) => {
      return choicedEveryQuestion[current] !== -1 && choicedEveryQuestion[current] === index ? true : false;
    });
  }
  const [currentAnswerChoice, setCurrentAnswerChoice] = useState<boolean[]>(getAnswerChoice(currentIndex));
  // 单选，点击之后还需要将其他的选项设为false
  const choiceItem = (num: number) => {
    changeCurrentChoiced(num);
    const _arr: boolean[] = currentAnswerChoice;
    const _new_arr: boolean[] = _arr.map((value: boolean, index: number) => {
      return num === index ? true : false;
    });
    setCurrentAnswerChoice(_new_arr);
  }
  useEffect(() => {
    defaultEvent.on(Page.PREV, ({curIndex}: {curIndex: number}) => {
      if (curIndex !== 0) {
        setCurrentAnswerChoice(getAnswerChoice(curIndex-1));
        setCurrentIndex(curIndex-1);
      }
    });
    defaultEvent.on(Page.NEXT, ({curIndex}: {curIndex: number}) => {
      if (curIndex !== questionList.length-1) {
        setCurrentAnswerChoice(getAnswerChoice(curIndex+1));
        setCurrentIndex(curIndex+1);
      }
    });
  }, []);
  
  return <div>
  {
    questionList[currentIndex].answer.map((value: string, index: number) => {
      return <div key={value+index} className="answerItem" onClick={() => choiceItem(index)}><div className={`singleChoice ${currentAnswerChoice[index] ? "isChoiced" : ""}`}></div><div className="word">{value}</div></div>
    })
  }
  </div>
}
export default Answer;
