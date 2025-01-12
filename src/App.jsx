import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Entry from './components/Entry'

function App() {
  return (
    <>
      <div>
        <Header />
        <Entry
            country="Japan"
            title="Fuji"
            dates="Autumn"
            info="entry info-text"       
        />
        <Entry
            country="Canada"
            title="Quebec"
            dates="Spring"
            info="entry info-text"       
        />
      </div>
    </>
  )
}

export default App
