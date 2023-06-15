import { Post } from './Post'
import 'bootstrap/dist/css/bootstrap.css'

import "./global.css"
import { Header } from './components/Header'
import { Home } from './components/Home';

function App() {

  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App
