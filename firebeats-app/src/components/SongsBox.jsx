export function SongsBox() {
  return (
    <>
      <div className="Container">
        <div className="Space"></div>
        <h1>Descubra novos sons</h1>
      </div>

      <div className="Container SongsBox">
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
      </div>
    </>
  );
}

export function SongCard() {
  return (
    <div className="SongCard">
      <div className="LCard"></div>

      <div className="MCard">
        <p className="TittleTextSongCard">Título da Faixa</p>
        <p>Autor</p>
        <p className="DateTextSongCard" id="DateTextSongCard">
          08/02/1996
        </p>
      </div>

      <div className="RCard">
        <img src="return.png" alt="Like-Heart" />
      </div>
    </div>
  );
}