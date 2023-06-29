import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'

import { Header } from './components/Header'
import { Home } from '../src/pages/Home'

import './global.css'

function App() {
  const [activeTab, setActiveTab] = useState('Sector')

  const handleTabClick = (tab) => {
    setActiveTab(tab)
  }

  return (
    <>
      <Header />
      <Home handleTabClick={handleTabClick} activeTab={activeTab} />
    </>
  )
}

export default App
