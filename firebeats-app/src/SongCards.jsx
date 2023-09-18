export function SongCard() {
    return (
        <div className="SongCard">

        <div className="LCard"></div>

        <div className="MCard">
          <p className="TittleTextSongCard">Título da Faixa</p>
          <p>Autor</p>
          <p className="DateTextSongCard" id="DateTextSongCard">08/02/1996</p>
        </div>

        <div className="RCard">
          <img src="return.png" alt="Like-Heart" />
        </div>

      </div>
    )
}