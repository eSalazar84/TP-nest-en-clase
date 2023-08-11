import { useState, useEffect } from 'react'
import './App.css'
import { getSongs } from './api/getSongs'
import Card from './Card'


function App() {
  const [songs, setSongs] = useState([])

  useEffect(() => {
    getSongs()
      .then(res => res.json())
      .then(data => {
        return setSongs(data)
      })
      .catch(err => {
        throw Error(err)
      })
  }, [])

  return (
    <>
      {
        songs.map(song => <Card song={song} key={song.id} />)
      }

    </>
  )
}

export default App
