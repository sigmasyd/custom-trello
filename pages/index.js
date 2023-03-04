import List from "../components/list"
import Card from "../components/card"

const cardList = [
  {
    text: 'Implementar inicio de sesión'
  },
  {
    text: 'Guardar datos en base de datos'
  },
  {
    text: 'Implementar inicio de sesión'
  },
]

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-ellipsis">
        Hello world!
      </h1>
      <List>
        {
          cardList.map( (item, index) => (
            <Card {...item} key={index}/>
          ))
        }
      </List>
    </>
  )
}
