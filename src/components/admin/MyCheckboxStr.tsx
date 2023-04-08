import React from "react";
import { useAppDispatch, useAppSelector } from "../../types/hook";
import {
  pushTypeActiveSettings,
  setTypeActiveSettings,
} from "../../redux/slices/productSlices";

function MyCheckboxStr({ name, value, addTypeCare, text }: any) {
  const [checked, setChecked] = React.useState(false);
  const { typeActiveSettings } = useAppSelector(
    (state: any) => state.productSlices
  );
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    if (typeActiveSettings.includes(Number(value))) {
      setChecked(true);
      // if (!typeActiveSettings.includes(Number(value)))
    } else {
      setChecked(false);
    }
  }, [typeActiveSettings]);
  function onChangeInput(e: any) {
    dispatch(pushTypeActiveSettings(value));
    setChecked(!checked);
  }
  return (
    <div className="checkbox">
      <label className="custom-checkbox">
        <input
          onChange={onChangeInput}
          type="checkbox"
          name={name}
          value={value}
          checked={checked}
        />
        <span>{text}</span>
      </label>
    </div>
  );
}

export default MyCheckboxStr;
