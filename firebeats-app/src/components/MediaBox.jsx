import { MediaList } from "./MediaList.jsx";
import { MediaLinks } from "./MediaLinks.jsx";

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
