import 'bootstrap/dist/css/bootstrap.css'

import { Header } from './components/Header'
import { Home } from './components/Home';

import "./global.css"
import { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState("Sector");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


  return (
    <>
      <Header />
      <Home handleTabClick={handleTabClick} activeTab={activeTab} />
    </>
  );
}

export default App
