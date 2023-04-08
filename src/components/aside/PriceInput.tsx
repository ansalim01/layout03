import React from "react";
function PriceInput({ valueMinMax, setValueMinMax }: any) {
  function addValueMin(item: any) {
    let value = item.target.value;
    if (value < 0) {
      value = 0;
    }
    setValueMinMax({ ...valueMinMax, min: value });
  }
  function addValueMax(item: any) {
    let value = item.target.value;
    if (value < 0) {
      value = 0;
    }
    setValueMinMax({ ...valueMinMax, max: value });
  }
  return (
    <div className="aside__price">
      <div className="aside-price__title">Цена ₽</div>
      <div className="aside-price__body">
        <input onChange={addValueMin} type="number" value={valueMinMax.min} />
        <span>-</span>
        <input onChange={addValueMax} type="number" value={valueMinMax.max} />
      </div>
    </div>
  );
}

export default PriceInput;
