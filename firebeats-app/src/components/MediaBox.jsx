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

export function MediaLinks() {
  return (
    <div className="MediaLinks">
      <button className="ButtonTransparent ButtonTransparentActivated">
        <p>Recomendado</p>
      </button>
      <button className="ButtonTransparent">
        <p>Trending</p>
      </button>
      <button className="ButtonTransparent">
        <p>Bussines</p>
      </button>
      <button className=" ButtonTransparent">
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
      <div
        className="BoxMedia"
        style={{ backgroundImage: `url(GSintonia.png)` }}
      >
        <h3>Nova Prévia de Gustavo Sintonia</h3>
      </div>
      <div className="BoxMedia" style={{ backgroundImage: `url(guiizao.png)` }}>
        <h3>Guiizão e seus Boombaps</h3>
      </div>
      <div className="BoxMedia" style={{ backgroundImage: `url(brecho.png)` }}>
        <h3>Brechó Dquebrada com Novidades</h3>
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
