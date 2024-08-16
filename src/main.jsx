import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, createBrowserRouter, Route, Routes } from 'react-router-dom'
import RandomJokes from './component/RandomJokes.jsx'
import RandomUser from './component/RandomUser.jsx'
import CatAroundUs from './component/CatAroundUs.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode >
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element = {<App/>} /> 
        <Route path="/random-user" element = {<RandomUser/>} /> 
        <Route path="/random-jokes" element = {<RandomJokes/>} /> 
        <Route path="/cats-listing" element = {<CatAroundUs/>} /> 
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
