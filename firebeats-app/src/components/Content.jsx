import { Welcome } from "./Welcome.jsx";
import { SearchInput } from "./SearchInput.jsx";
import { MediaBox } from "./MediaBox.jsx";
import { SongsBox } from "./SongsBox.jsx";
import { FeedBox } from "./FeedBox.jsx";

import "../styles/Content.css";
import "../styles/Searchinput.css";
import "../styles/Mediabox.css";
import "../styles/SongsBox.css";
import "../styles/Feedbox.css";

export function Content() {
  return (
    <>
      <div className="Content">
        <Welcome />
        <SearchInput />
        <MediaBox />
        <SongsBox />
        <FeedBox />
      </div>
    </>
  );
}
