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
    <form className="flex justify-center items-center gap-4 mt-4 w-full" action="">
      <input onChange={handleChange} value={text} className="rounded bg-gray-800 p-2" type="text" />
      <button onClick={addItem} className='btn btn-primary'><Plus size={18} /></button>
    </form>
  )
}