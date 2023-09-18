import { useState } from 'react'
import { Head, Container, SearchInput, MediaBox, BeatsBox } from "./Components.jsx";
import { MediaBoxNews } from "./TopicCard.jsx"
import { Footer } from "./Footer.jsx"

import './App.css'
import './Components.css'
import './Footer.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Head />

      <div className="Mid">

        <Container />

        <SearchInput />

        <MediaBox />

        <BeatsBox />

        <MediaBoxNews />

        <Footer />

      </div>


    </>

  )
}

export default App
