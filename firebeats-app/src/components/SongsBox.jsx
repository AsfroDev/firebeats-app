export function SongsBox() {
  return (
    <>
      <div className="Container">
        <div className="Space"></div>
        <h1>Descubra novos sons</h1>
      </div>

      <div className="Container SongsBox">
        <SongCard />
      </div>
    </>
  );
}

export function SongCard() {
  return (
    <>
      <div className="SongCard">
        <div className="LCard" style={{ backgroundImage: `url(song1.jpeg)` }}></div>

        <div className="MCard">
          <p className="TittleTextSongCard">Revolve</p>
          <p>IndigoBeats</p>
          <p className="DateTextSongCard" id="DateTextSongCard">
            25/09/2023
          </p>
        </div>

        <div className="RCard">
          <img src="return.png" alt="Like-Heart" />
        </div>
      </div>

      <div className="SongCard">
        <div className="LCard" style={{ backgroundImage: `url(song2.jpeg)` }}></div>

        <div className="MCard">
          <p className="TittleTextSongCard">Sphere</p>
          <p>Deployer</p>
          <p className="DateTextSongCard" id="DateTextSongCard">
            14/04/2022
          </p>
        </div>

        <div className="RCard">
          <img src="return.png" alt="Like-Heart" />
        </div>
      </div>

      <div className="SongCard">
        <div className="LCard" style={{ backgroundImage: `url(song3.jpeg)` }}></div>

        <div className="MCard">
          <p className="TittleTextSongCard">Rebirth</p>
          <p>Asfrotype</p>
          <p className="DateTextSongCard" id="DateTextSongCard">
            08/02/2021
          </p>
        </div>

        <div className="RCard">
          <img src="return.png" alt="Like-Heart" />
        </div>
      </div>

      <div className="SongCard">
        <div className="LCard" style={{ backgroundImage: `url(song4.jpeg)` }}></div>

        <div className="MCard">
          <p className="TittleTextSongCard">Bem e Mal</p>
          <p>Vitinho da 12</p>
          <p className="DateTextSongCard" id="DateTextSongCard">
            14/07/2023
          </p>
        </div>

        <div className="RCard">
          <img src="return.png" alt="Like-Heart" />
        </div>
      </div>

      <div className="SongCard">
        <div className="LCard" style={{ backgroundImage: `url(song5.jpeg)` }}></div>

        <div className="MCard">
          <p className="TittleTextSongCard">Waveform</p>
          <p>Asfrotype</p>
          <p className="DateTextSongCard" id="DateTextSongCard">
            02/01/2023
          </p>
        </div>

        <div className="RCard">
          <img src="return.png" alt="Like-Heart" />
        </div>
      </div>

      <div className="SongCard">
        <div className="LCard" style={{ backgroundImage: `url(song6.jpeg)` }}></div>

        <div className="MCard">
          <p className="TittleTextSongCard">Já amei</p>
          <p>Vulgo Triip</p>
          <p className="DateTextSongCard" id="DateTextSongCard">
            25/09/2023
          </p>
        </div>

        <div className="RCard">
          <img src="return.png" alt="Like-Heart" />
        </div>
      </div>

      <div className="SongCard">
        <div className="LCard" style={{ backgroundImage: `url(song7.jpeg)` }}></div>

        <div className="MCard">
          <p className="TittleTextSongCard">Sentidos</p>
          <p>Asfrotype</p>
          <p className="DateTextSongCard" id="DateTextSongCard">
            28/08/2023
          </p>
        </div>

        <div className="RCard">
          <img src="return.png" alt="Like-Heart" />
        </div>
      </div>
    </>
  );
}
