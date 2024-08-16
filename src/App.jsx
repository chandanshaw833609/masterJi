import { useState } from 'react'
import RandomUser from './component/RandomUser'
import RandomJokes from './component/RandomJokes'
import { Outlet, useNavigate, useParams } from 'react-router-dom'

function App() {
  const path = useParams()
  console.log(path);
  const navigation = useNavigate()
  
  return (
    <>
      <RandomUser/>
    </>
  )
}

export default App
