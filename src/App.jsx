import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Entry from './components/Entry'
import data from "./assets/data";

function App() {
  const entryComponents = data.map((entry) => <Entry
    key={entry.id}
    image={entry.img}
    url={entry.googleMapsLink}
    country={entry.country}
    title={entry.title}
    dates={entry.dates}
    info={entry.text}    
  />)

  return (
    <>
      <Header />
      <main className="container"> 
        { entryComponents }
      </main>         
    </>
  )
}

export default App