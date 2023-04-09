import filterSlices from "../redux/slices/filterSlices";
import { setCategoryId, setPriceMin } from "../redux/slices/filterSlices";
const def = {
  categoryId: 0,
  sort: {
    name: "по названию (по убыванию)",
    sortProperty: "name",
  },
  priceMin: 0,
  priceMax: 10000,
  checkboxManufacturer: [],
};
describe("filterSlices", () => {
  it("проверка filterSlices", () => {
    const result = filterSlices(undefined, { type: "" });

    expect(result).toEqual(def);
  });
  it("проверка setCategoryId", () => {
    const action = { type: setCategoryId.type, payload: 2 };
    const result: any = filterSlices(def, action);
    expect(result.categoryId).toEqual(2);
    expect(result.categoryId).not.toEqual(0);
  });
  it("проверка setPriceMin", () => {
    const action = { type: setPriceMin.type, payload: 150 };
    const result: any = filterSlices(def, action);
    expect(result.priceMin).toEqual(150);
    expect(result.priceMin).not.toEqual(0);
  });
});
