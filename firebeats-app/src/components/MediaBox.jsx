//import { MediaList } from "./MediaList.jsx";
//import { MediaLinks } from "./MediaLinks.jsx";
//import { BoxMedia } from "./BoxMedia.jsx";

export function MediaBox() {
  return (
    <>
      <div className="Space"></div>
      <div className="Container">
        <MediaLinks />
        <MediaList />
      </div>
    </>
  );
}

import { useEffect, useRef } from "react";

export function MediaLinks() {
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  const refMediaLinkButton = useRef(null);

  const handleClickOutside = (e) => {
    if (!refMediaLinkButton.current.contains(e.target)) {
      document
        .querySelector(".MediaLinkButton")
        .classList.remove("ButtonTransparentActivated");
    } else {
      document
        .querySelector(".MediaLinkButton")
        .classList.add("ButtonTransparentActivated");
    }
  };

  return (
    <div className="MediaLinks">
      <button
        className="ButtonTransparent MediaLinkButton"
        ref={refMediaLinkButton}
      >
        <p>Recomendado</p>
      </button>
      <button
        className="ButtonTransparent MediaLinkButton"
        ref={refMediaLinkButton}
      >
        <p>Trending</p>
      </button>
      <button
        className="ButtonTransparent MediaLinkButton"
        ref={refMediaLinkButton}
      >
        <p>Bussines</p>
      </button>
      <button
        className="ButtonTransparent MediaLinkButton"
        ref={refMediaLinkButton}
      >
        <p>Parceiros</p>
      </button>
    </div>
  );
}

export function MediaList() {
  return (
    <div className="MediaList">
      <BoxMedia />
    </div>
  );
}

export function BoxMedia() {
  return (
    <>
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
    </>
  );
}
