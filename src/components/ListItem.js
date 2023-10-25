import { Trash, CheckFat } from "@phosphor-icons/react"
import Card from "./card"

export default function ListItem(props) {

  function DoneImg(props) {
    if (props.done) {
      return (<CheckFat size={24} color="#00eb27" weight="duotone" />)
    } else {
      return (<CheckFat size={24} color="#595959" weight="duotone" />)
    }
  }

  return (
    <li>
      <Card className={props.item.done ? "line-through opacity-60 item" : "item"}>
        {props.item.text}
        <div className="flex gap-4">
          <button onClick={() => { props.onDone(props.item) }} ><DoneImg done={props.item.done} /></button>
          <button onClick={() => { props.onItemDeleted(props.item) }} className=""><Trash size={24} color="#f61313" weight="duotone" /></button>
        </div>
      </Card>
    </li>)
}
