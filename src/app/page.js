'use client'
import { useEffect, useState } from "react"
import List from "@/components/List"
import Item from "@/components/item"
import TodoForm from "@/components/TodoForm"

const SAVED_ITEMS = 'savedItems'

export default function Home() {
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

  return (
    <main className='container'>
      <h1 className='text-3xl font-bold text-sky-400'>Todo List</h1>
      <TodoForm onAddItem={onAddItem} />
      <List onDone={onDone} onItemDeleted={onItemDeleted} items={items} />
    </main>
  )


}
