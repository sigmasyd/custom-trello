import List from "../components/list"
import Card from "../components/card"
import { useState, useEffect } from "react"

const todoList = [
  {
    text: 'Implementar inicio de sesión',
    id: 'task-1'
  },
  {
    text: 'Guardar datos en base de datos',
    id: 'task-2'
  },
  {
    text: 'Implementar inicio de sesión',
    id: 'task-3'
  },
]

const inProgressList = [
  {
    text: 'Implementando el inicio de sesión',
    id: 'task-4'
  },
  {
    text: 'Guardando datos en base de datos',
    id: 'task-5'
  }/*,
  {
    text: 'Implementando el inicio de sesión',
    id: 'task-6'
  }*/
]

const doneList = [
  {
    text: 'Se implemento el inicio de sesión',
    id: 'task-7'
  },
  {
    text: 'Se guardo datos en la base de datos',
    id: 'task-8'
  },
  {
    text: 'Se implemento el inicio de sesión',
    id: 'task-9'
  }
]

export default function Board() {
  const [dragged, setDragged] = useState(null)

  const [ listOfList, setListOfList ] = useState({
    todoList,
    inProgressList,
    doneList
  })

  /*useEffect(() => {
    setTimeout(() => {
      const listOfListClone = structuredClone(listOfList)
      listOfListClone.inProgressList.push({
        text: 'ola k ase',
        id: crypto.randomUUID()
      })
      setListOfList(listOfListClone)
    },5000)
  })*/

  const handleDrop = (e) => {
    e.preventDefault()

    const listOfListClone = structuredClone(listOfList)
    listOfListClone.inProgressList.push(dragged)
    setListOfList(listOfListClone)

    console.log('Drop event', e.target)
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Development</h1>
      <main className="flex justify-between gap-4">
        <List 
          name="TODO" 
          handleDrop={handleDrop}
          id={'todo'} 
        >
          {
            listOfList.todoList.map( (item) => (
              <Card setDragged={setDragged} {...item} key={item.id}/>
            ))
          }
        </List>
        <List 
          name="In Progress" 
          handleDrop={handleDrop}
          id={'inprogress'} 
        >
          {
            listOfList.inProgressList.map( (item, index) => (
              <Card setDragged={setDragged} {...item} key={item.id}/>
            ))
          }
        </List>
        <List 
          name="Done" 
          handleDrop={handleDrop}
          id={'done'} 
        >
          {
            listOfList.doneList.map( (item, index) => (
              <Card setDragged={setDragged} {...item} key={item.id}/>
            ))
          }
        </List>
      </main>
    </div>
  )
}
