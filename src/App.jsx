import { useState } from 'react'
import {puppyList} from './data.js'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [puppies, setPuppies] = useState(puppyList)
  //console.log("puppyList: ", puppyList)
  const [featPupId, setFeatPupId] = useState(null)
  function handleClick() {
  }
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  console.log(featuredPup)
    return (
      <div className="App">
              {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
        {puppies.map((puppy) => {
          return (
            <p onClick={()=>{console.log("puppy id: ", puppy.id)}} key={puppy.id}>
              <p onClick={()=>{setFeatPupId(puppy.id)}} key={puppy.id} className="reglon">
            {puppy.name}
          </p>
            </p>
          );
        })}
    </div>
  )
}

export default App
