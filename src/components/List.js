import ListItem from "./ListItem"

export default function List(props) {

  return (
    <ul className="list-none m-0 p-0">
      {props.items.map(item =>
        <ListItem
          key={item.id}
          item={item}
          onDone={props.onDone}
          onItemDeleted={props.onItemDeleted}>
        </ListItem>)
      }
    </ul>
  )
}