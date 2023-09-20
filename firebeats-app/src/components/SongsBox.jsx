import { SongCard } from "./SongCard.jsx";

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
  
  
    )
  }