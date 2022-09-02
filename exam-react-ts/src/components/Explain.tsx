import {JSX} from "react-dom"
interface PropsType {
  explain: string;
}
const Explain = (props: PropsType): JSX.Element => {
  const { explain } = props;
  return <div className="explain">{explain}</div>
}

export default Explain;
