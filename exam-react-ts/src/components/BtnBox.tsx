import {JSX} from "react-dom"
import defaultEvent, {Page} from "../common"
interface PropsType {
  currentIndex: number;
}
const BtnBox = (props: PropsType): JSX.Element => {
  const {currentIndex} = props;
  return <div className="btnBox">
    <div className="btn" onClick={() => {defaultEvent.emit(Page.PREV, {curIndex: currentIndex})}}>上一题</div>
    <div className="btn" onClick={() => {defaultEvent.emit(Page.NEXT, {curIndex: currentIndex})}}>下一题</div>
  </div>
}
export default BtnBox;
