import React from "react";
import Input from "./Input";

function SearchManufacturer({ items, checkboxTrue, setCheckboxTrue }: any) {
  const [showAll, setShowAll] = React.useState(true);
  const [inputText, setInputText] = React.useState("");

  function toggleShowAll() {
    setShowAll(!showAll);
  }

  let countManufacturer: any = {};
  items.forEach(function (i: any) {
    countManufacturer[i.manufacturer] =
      (countManufacturer[i.manufacturer] || 0) + 1;
  });
  let sortable: any = [];
  for (var vehicle in countManufacturer) {
    sortable.push([vehicle, countManufacturer[vehicle]]);
  }
  sortable
    .sort(function (a: any, b: any) {
      return a[1] - b[1];
    })
    .reverse();

  sortable = sortable.filter((i: any) =>
    i[0].toLowerCase().includes(inputText.toLowerCase())
  );
  function searchManufacturer(e: any) {
    setInputText(e.target.value);
  }

  function addCeget(e: any, item: any) {
    if (e.target.checked) {
      setCheckboxTrue([...checkboxTrue, item[0]]);
    } else {
      setCheckboxTrue(checkboxTrue.filter((i: any) => i !== item[0]));
    }
  }

  return (
    <div className="aside-manufacturer__body">
      <div className="aside-manufacturer__search">
        <input
          value={inputText}
          onChange={searchManufacturer}
          type="text"
          placeholder="Поиск..."
        />
        <div>
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.5294 16.5294L13.0989 13.0928L16.5294 16.5294ZM15 8.5C15 10.2239 14.3152 11.8772 13.0962 13.0962C11.8772 14.3152 10.2239 15 8.5 15C6.77609 15 5.12279 14.3152 3.90381 13.0962C2.68482 11.8772 2 10.2239 2 8.5C2 6.77609 2.68482 5.12279 3.90381 3.90381C5.12279 2.68482 6.77609 2 8.5 2C10.2239 2 11.8772 2.68482 13.0962 3.90381C14.3152 5.12279 15 6.77609 15 8.5V8.5Z"
              stroke="white"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
      {sortable.map((item: any, index: number) => {
        if (showAll && index > 3) return;
        return (
          <Input
            key={index}
            item={sortable[index]}
            addCeget={addCeget}
            inputText={inputText}
          ></Input>
          // <div className="" key={index} item={sortable[index]}>
          //   <label>
          //     <input onChange={test} type="checkbox" />
          //     {item[0]} ({item[1]})
          //   </label>
          // </div>
        );
      })}
      <div onClick={toggleShowAll} className="aside-manufacturer__label">
        <span>Показать все</span>
        <div className="aside-manufacturer__arrow">
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
    </div>
  );
}

export default SearchManufacturer;
