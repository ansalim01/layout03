import productSlices from "../redux/slices/productSlices";
import { addProductCard } from "../redux/slices/productSlices";
import { dataTest } from "../../dataTest";
const def = {
  productCard: [
    {
      id: 0,
      imageUrl:
        "https://noht.ru/preview/products/type_1000x800/2017/12/1329430.jpg?v=1679513166",
      name: "Крем Алиса",
      sizeType: "г",
      sizes: 125,
      barcode: 0,
      manufacturer: "Свобода",
      brand: "Свобода",
      description: "Предназначен для защиты, смягчения и увлажнения кожи рук.",
      price: 81,
      typeCare: [0, 2],
    },
  ],
  isLoading: true,
  typeCareActive: [0],

  activeSettings: -1,
  typeActiveSettings: [0],
};

describe("productSlices", () => {
  it("проверка setCategoryId", () => {
    const action = { type: addProductCard.type, payload: dataTest[0] };
    const result: any = productSlices(def, action);
    expect(result.productCard[0].id).toEqual(0);
    expect(result.productCard[1].id).toEqual(1);
  });
});
