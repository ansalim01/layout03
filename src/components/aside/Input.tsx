import React from "react";

import { useAppDispatch, useAppSelector } from "../../types/hook";
function Input({ item, addCeget, inputText }: any) {
  const [checked, setChecked] = React.useState(false);
  const { checkboxManufacturer } = useAppSelector(
    (state: any) => state.filters
  );

  React.useEffect(() => {
    if (checkboxManufacturer.includes(item[0])) {
      setChecked(true);
    } else if (!checkboxManufacturer.includes(item[0])) {
      setChecked(false);
    }
  }, [checkboxManufacturer, inputText]);
  function onChangeInput(e: any) {
    setChecked(!checked);
    addCeget(e, item);
  }
  return (
    <div className="checkbox">
      <label className="custom-checkbox">
        <input onChange={onChangeInput} checked={checked} type="checkbox" />
        <span>
          {item[0]} ({item[1]})
        </span>
      </label>
    </div>
  );
}

export default Input;
