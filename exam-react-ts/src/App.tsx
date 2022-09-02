import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import {QuestionType, questionList} from './data.ts'
import QuestionNum from './components/QuestionNum.tsx'
import Question from './components/Question'
import Answer from './components/Answer'
import Explain from './components/Explain'
import BtnBox from './components/BtnBox'
function App() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  
  // 记录每一个题目的选项索引
  const choicedEveryQuestion = useRef<number[]>(questionList.map((value: QuestionType, index: number) => -1));

  const changeCurrentChoiced = (num: number): void => {
    choicedEveryQuestion.current[currentIndex] = num;
  }
  return (
    <div className="app">
      <QuestionNum currentIndex={currentIndex} questionList={questionList} />
      <Question question={questionList[currentIndex].questson} />
      <Answer questionList={questionList} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} choicedEveryQuestion={choicedEveryQuestion.current} changeCurrentChoiced={changeCurrentChoiced}/>
      <Explain explain={questionList[currentIndex].explain}/>
      <BtnBox currentIndex={currentIndex}/>
    </div>  
  )
}

export default App
