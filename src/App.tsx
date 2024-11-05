import { useState } from 'react'
import {response} from "./lib/rickandmorty-db.tsx";

export default function App() {
  const [data, setData] = useState(response)

function Person() {
    data.map(e=> e)
  }

  return (
    <>
      <h2>Rick and Morty Gallery</h2>
      {data.map(character => {
            return (<>
              <div><strong>ID: {character.id}</strong></div>
              <div>Name: {character.name}</div>
              <div>Status: {character.status}</div>
              <div>Species: {character.species}</div>
              <div>Gender: {character.gender}</div>
              <div>Location: {character.location.name}</div>
              <br/>
            </>)
          }
      )
      }
    </>
    )
}
