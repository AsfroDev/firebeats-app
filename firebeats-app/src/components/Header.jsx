import { ToogleColorMode } from "../services/color-mode";

export function Header() {
  return (
    <>
      <div className="Top">
        <div className="TopInside">
          <div className="LeftHeadear">
            <img src="icon_fire_100.png" alt="" />
          </div>
          <div className="RightHeader">
            <button
              className="HeadButton ThemeButton"
              onClick={ToogleColorMode}
            >
              <img src="moon-icon.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
