'use client'
import { useEffect, useState } from "react"
import List from "@/components/List"
import Item from "@/components/item"
import TodoForm from "@/components/TodoForm"
import { Plus } from "@phosphor-icons/react"
import Modal from "@/components/Modal"

const SAVED_ITEMS = 'savedItems'

export default function Home() {

  const [showModal, setShowModal] = useState(false)
  const [items, setItems] = useState([])

  useEffect(() => {
    let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS))
    if (savedItems) {
      setItems(savedItems)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))
  }, [items])

  function onAddItem(text) {
    let it = new Item(text)
    setItems([...items, it])
    onHideModal()
  }

  function onItemDeleted(item) {
    let filteredItems = items.filter(it => it.id != item.id)
    setItems(filteredItems)
  }

  function onDone(item) {
    let updatedItems = items.map(it => {
      if (it.id === item.id) {
        it.done = !it.done
      } return it
    })
    setItems(updatedItems)
  }

  function onHideModal() {
    setShowModal(false)
  }

  return (
    <main className='container mt-4'>
      <header className="flex justify-between items-center">
        <h1 className='text-3xl font-bold text-sky-400'>Todo List</h1>
        <button onClick={() => { setShowModal(true) }}
          className="btn btn-primary rounded-full w-10 h-10 flex justify-center items-center">
          <Plus size={26} />
        </button>
      </header>
      <Modal show={showModal} onHideModal={onHideModal}><TodoForm onAddItem={onAddItem}></TodoForm></Modal>
      <List onDone={onDone} onItemDeleted={onItemDeleted} items={items} />
    </main>
  )


}
