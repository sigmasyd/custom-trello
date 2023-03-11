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
  },
  {
    text: 'Implementando el inicio de sesión',
    id: 'task-6'
  }
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
  const [ listOfList, setListOfList ] = useState({
    todoList,
    inProgressList,
    doneList
  })

  useEffect(() => {
    setTimeout(() => {
      const listOfListClone = structuredClone(listOfList)
      listOfListClone.inProgressList.push({
        text: 'ola k ase',
        id: crypto.randomUUID()
      })
      setListOfList(listOfListClone)
    },5000)
  })

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Development</h1>
      <main className="flex justify-between gap-4">
        <List name="TODO">
          {
            listOfList.todoList.map( (item) => (
              <Card {...item} key={item.id}/>
            ))
          }
        </List>
        <List name="In Progress">
          {
            listOfList.inProgressList.map( (item, index) => (
              <Card {...item} key={item.id}/>
            ))
          }
        </List>
        <List name="Done">
          {
            listOfList.doneList.map( (item, index) => (
              <Card {...item} key={item.id}/>
            ))
          }
        </List>
      </main>
    </div>
  )
}
