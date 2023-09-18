import { SongCard } from "./SongCards.jsx"
import { useEffect, useRef } from "react";

export function Head() {

  return (
    <>
      <div className='Top'>
        <div className="TopInside">
          <div className="LeftHeadear"><img src="icon_fire_100.png" alt="" /></div>
          <div className="RightHeader">
            <button className="HeadButton ThemeButton"><img src="moon-icon.png" alt="" /></button>
          </div>
        </div>
      </div>
    </>
  )

}

export function Container() {
  return (
    <>
      <div className="Container">
        <h1>Encontre o instrumental perfeito para você</h1>
      </div>
    </>
  )

}

export function MainText() {
  return (
    <>

    </>
  )
}

export function SearchInput() {

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
  }, [])


  const refSearchInput = useRef(null)


  const handleClickOutside = (e) => {
    if (!refSearchInput.current.contains(e.target)) {
      document.querySelector('.SearchInput').classList.remove('SearchInputActive')
    } else {
      document.querySelector('.SearchInput').classList.add('SearchInputActive')
    }
  }

  return (
    <div className="Container">
      <div className="Space"></div>

      <div className="SearchInput" ref={refSearchInput}>

        <img src="search-icon.png" alt="" />
        <input type="text" placeholder="Pesquise" id="inputSearch" />

      </div>
    </div >

  )
}

export function MediaBox() {
  return (
    <>
      <div className="Space"></div>
      <div className="Container">


        <div className="MediaLinks">
          <p>Recomendado</p>
          <p>Trending</p>
          <p>Bussines</p>
          <p>Parceiros</p>
        </div>

        <div className="MediaBoxes">
          <div className="BoxMedia">
            <h3>Nova Prévia de Gustavo Sintonia</h3>
          </div>
          <div className="BoxMedia">
            <h3>Guiizão e seus Boombaps</h3>
          </div>
          <div className="BoxMedia">
            <h3>Brechó Dquebrada</h3>
          </div>
          <div className="BoxMedia">
            <h3>Beats pra fechar o ano bem</h3>
          </div>
          <div className="BoxMedia">
            <h3>Fotos profissionais com a Lid Caetano</h3>
          </div>
        </div>

      </div>
    </>

  )
}

export function BeatsBox() {
  return (

    <>
      <div className="Container">
        <div className="Space"></div>
        <h1>Descubra novos sons</h1>
      </div>

      <div className="Container SongContainer">

        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />

      </div>
    </>


  )
}