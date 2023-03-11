import List from "../components/list"
import Card from "../components/card"
import { useState, useEffect } from "react"
import { todoList, inProgressList, doneList } from '../data/task'


export default function Board() {
  const [dragged, setDragged] = useState(null)

  const [ listOfList, setListOfList ] = useState({
    todoList,
    inProgressList,
    doneList
  })

  const handleDrop = (e) => {
    e.preventDefault()
    // clono lista para mantener principio de inmutabilidad
    const listOfListClone = structuredClone(listOfList)    
    // obtengo la lista destino desde e.target, aunque tanto currentTarget como target 
    // devuelven el mismo destino:  e.currentTarget.dataset.list
    let listaDestino = e.target.dataset.list
    // obtengo la lista origen directamente desde el card
    let listaOrigen = dragged.list

    if (listaDestino) {
      // agrego a la lista destino el card
      listOfListClone[listaDestino]?.push(dragged.data)
      // guardo en lista temporal la lista removiendo la card
      let listaTmp = listOfListClone[listaOrigen].filter( item => item.id + '' !== dragged.data.id )
      // actualizo la lista origen con el nuevo listado de cards
      listOfListClone[dragged.list] = listaTmp
      // actualizo estado de cards
      setListOfList(listOfListClone)
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Development</h1>
      <main className="flex justify-between gap-4">
        <List 
          name="TODO" 
          handleDrop={handleDrop}
          id="todoList"
        >
          {
            listOfList.todoList.map( (item) => (
              <Card list="todoList" setDragged={setDragged} {...item} key={item.id}/>
            ))
          }
        </List>
        <List 
          name="In Progress" 
          handleDrop={handleDrop}
          id="inProgressList"
        >
          {
            listOfList.inProgressList.map( (item, index) => (
              <Card list="inProgressList" setDragged={setDragged} {...item} key={item.id}/>
            ))
          }
        </List>
        <List 
          name="Done" 
          handleDrop={handleDrop}
          id="doneList"
        >
          {
            listOfList.doneList.map( (item, index) => (
              <Card list="doneList" setDragged={setDragged} {...item} key={item.id}/>
            ))
          }
        </List>
      </main>
    </div>
  )
}
