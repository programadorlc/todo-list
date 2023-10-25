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
    <form className="flex flex-col justify-between items-center w-full" >
      <p className="mb-4 place-items-start">Adicionar tarefa</p>
      <div className="flex flex-row gap-4">
        <input onChange={handleChange} value={text} className="rounded  bg-gray-800" type="text" />
        <button onClick={addItem} className='flex justify-center items-center btn btn-primary rounded-full w-9 h-9'><Plus size={18} /></button>
      </div>
    </form>
  )
}