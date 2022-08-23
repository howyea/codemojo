import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'

function App() {

  return (
    <div className="app">
      <div className="questionNum"><span className="current">1</span>/<span className="all">10</span></div>
      <div className="question">这里是一个问题？</div>
      <div>
        <div className="answerItem"><div className="singleChoice"></div><div className="word">清楚</div></div>
        <div className="answerItem"><div className="singleChoice"></div><div className="word">不清楚</div></div>
        <div className="answerItem"><div className="singleChoice"></div><div className="word">不知道</div></div>
      </div>
      <div className="explain">这里是解读</div>
      <div className="btnBox">
        <div className="btn">上一题</div>
        <div className="btn">下一题</div>
      </div>
    </div>  
  )
}

export default App
