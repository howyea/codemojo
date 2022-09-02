import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import {QuestionType, questionList} from './data.ts'

import QuestionNum from './components/QuestionNum.tsx'
import Question from './components/Question'
import Explain from './components/Explain'
function App() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  // 记录每一个题目的选项索引
  const choicedEveryQuestion: number[] = useRef(questionList.map((value: QuestionType, index: number) => -1));
  // 为了获取当前题目的选项
  const getAnswerChoice = (current: number) => {
    return questionList[current].answer.map((value: string, index: number) => {
      return choicedEveryQuestion.current[current] !== -1 && choicedEveryQuestion.current[current] === index ? true : false;
    });
  }
  const [currentAnswerChoice, setCurrentAnswerChoice] = useState<boolean[]>(getAnswerChoice(currentIndex));
  const changeCurrentIndex = (type: "prev" | "next") => {
    console.log(choicedEveryQuestion.current)
    if (type === "prev" && currentIndex !== 0) {
      setCurrentAnswerChoice(getAnswerChoice(currentIndex-1));
      setCurrentIndex(currentIndex-1);
    } else if (type ==="next" && currentIndex !== questionList.length - 1) {
      setCurrentAnswerChoice(getAnswerChoice(currentIndex+1));
      setCurrentIndex(currentIndex+1);
    }
  }
  // 单选，点击之后还需要将其他的选项设为false
  const choiceItem = (num: number) => {
    choicedEveryQuestion.current[currentIndex] = num;

    console.log(choicedEveryQuestion.current)

    const _arr: boolean[] = currentAnswerChoice;
    const _new_arr: boolean[] = _arr.map((value: boolean, index: number) => {
      return num === index ? true : false;
    });
    setCurrentAnswerChoice(_new_arr);
  }
  return (
    <div className="app">
      <div>
      {
        questionList[currentIndex].answer.map((value: string, index: number) => {
          return <div key={value+index} className="answerItem" onClick={() => choiceItem(index)}><div className={`singleChoice ${currentAnswerChoice[index] ? "isChoiced" : ""}`}></div><div className="word">{value}</div></div>
        })
      }
      </div>
      <div className="btnBox">
        <div className="btn" onClick={() => {changeCurrentIndex("prev")}}>上一题</div>
        <div className="btn" onClick={() => {changeCurrentIndex("next")}}>下一题</div>
      </div>
      <QuestionNum currentIndex={currentIndex} questionList={questionList} />
      <Question question={questionList[currentIndex].questson} />
      <Explain explain={questionList[currentIndex].explain}/>
    </div>  
  )
}

export default App
