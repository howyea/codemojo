import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import questionList from './data.ts'

function App() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const getAnswerChoice = () => {
    return questionList[currentIndex].answer.map((value: string, index: number) => {
      return false;
    })
  }
  const [currentAnswerChoice, setCurrentAnswerChoice] = useState<boolean[]>(getAnswerChoice());
  const changeCurrentIndex = (type: "prev" | "next") => {
    if (type === "prev" && currentIndex !== 0) {
      setCurrentIndex(currentIndex-1);
    } else if (type ==="next" && currentIndex !== questionList.length - 1) {
      setCurrentIndex(currentIndex+1);
    }
  }
  // 单选，点击之后还需要将其他的选项设为false
  const choiceItem = (num: number) => {
    const _arr: boolean[] = currentAnswerChoice;
    const _new_arr: boolean[] = _arr.map((value: boolean, index: number) => {
      return num === index ? true : false;
    });
    setCurrentAnswerChoice(_new_arr);
  }
  return (
    <div className="app">
      <div className="questionNum"><span className="current">{currentIndex + 1}</span>/<span className="all">{questionList.length}</span></div>
      <div className="question">{questionList[currentIndex].question}</div>
      <div>
      {
        questionList[currentIndex].answer.map((value: string, index: number) => {
          return <div key={value+index} className="answerItem" onClick={() => choiceItem(index)}><div className={`singleChoice ${currentAnswerChoice[index] ? "isChoiced" : ""}`}></div><div className="word">{value}</div></div>
        })
      }
      </div>
      <div className="explain">{questionList[currentIndex].explain}</div>
      <div className="btnBox">
        <div className="btn" onClick={() => {changeCurrentIndex("prev")}}>上一题</div>
        <div className="btn" onClick={() => {changeCurrentIndex("next")}}>下一题</div>
      </div>
    </div>  
  )
}

export default App
