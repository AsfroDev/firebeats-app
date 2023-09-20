import { useEffect, useRef } from "react";

export function SearchInput() {
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  const refSearchInput = useRef(null);

  const handleClickOutside = (e) => {
    if (!refSearchInput.current.contains(e.target)) {
      document
        .querySelector(".SearchInput")
        .classList.remove("SearchInputActive");
    } else {
      document.querySelector(".SearchInput").classList.add("SearchInputActive");
    }
  };

  return (
    <div className="Container">
      <div className="Space"></div>

      <div className="SearchInput" ref={refSearchInput}>
        <img src="search-icon.png" alt="" />
        <input type="text" placeholder="Pesquise" id="inputSearch" />
      </div>
    </div>
  );
}
