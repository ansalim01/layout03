import React from "react";
import { useAppSelector } from "../types/hook";
function Sorting({ value, addActive }: any) {
  let { sort } = useAppSelector((state: any) => state.filters);
  const sortingList = [
    { name: "по цене (по убыванию)", sortProperty: "price" },
    { name: "по цене (по возрастанию)", sortProperty: "-price" },
    { name: "по названию (по убыванию)", sortProperty: "name" },
    { name: "по названию (по возрастанию)", sortProperty: "-name" },
  ];
  const sortRef = React.useRef(null);
  const [visiblePopup, setVisiblePopup] = React.useState(false);

  function toggleVisiblePopup() {
    setVisiblePopup(!visiblePopup);
  }

  React.useEffect(() => {
    function handleOutsideClick(e: any) {
      if (!e.composedPath().includes(sortRef.current)) {
        setVisiblePopup(false);
      }
    }

    document.body.addEventListener("click", handleOutsideClick);
    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div ref={sortRef} className="main-product__sorting sorting">
      <div className="sorting">
        <div
          className="sorting__label"
          data-testid="toggle-btn"
          onClick={() => toggleVisiblePopup()}
        >
          <b>Сортировка:</b>
          <span>{sort.name}</span>
          <div className="sorting__arrow">
            <svg
              width="7"
              height="6"
              viewBox="0 0 7 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.5 6L0.468911 0.750001L6.53109 0.75L3.5 6Z"
                fill="#3F4E65"
              />
            </svg>
          </div>
        </div>
        {visiblePopup && (
          <div data-testid="toggle-elem" className="sorting__popup">
            <ul>
              {sortingList.map((item: any, index: number) => (
                <li
                  className={item.name === sort.name ? "active" : ""}
                  onClick={() => addActive(item)}
                  key={`${item}_${index}`}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sorting;
