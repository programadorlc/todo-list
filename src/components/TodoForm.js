import { useState } from "react"
import { Plus } from "@phosphor-icons/react"

export default function TodoForm(props) {
  const [text, setText] = useState('')

  function handleChange(event) {
    let t = event.target.value
    setText(t)
  }

  function addItem(event) {
    event.preventDefault()
    if (text) {
      props.onAddItem(text)
      setText('')
    }
  }

  return (
    <form className="flex justify-between items-center gap-4 w-full" >
      <input onChange={handleChange} value={text} className="rounded w-11/12 bg-gray-800 p-2" type="text" />
      <button onClick={addItem} className='flex justify-center items-center btn btn-primary rounded-full w-9 h-9'><Plus size={18} /></button>
    </form>
  )
}