import cartSlices from "../redux/slices/cartSlices";
import { addItem } from "../redux/slices/cartSlices";

const item = {
  id: 1,
  imageUrl: "https://ir.ozone.ru/s3/multimedia-v/wc1000/6413925007.jpg",
  name: "Гель для стирки LAMM AROMA",
  sizeType: "кг",
  sizes: 1.3,
  barcode: 1,
  manufacturer: "LAMM",
  brand: "LAMM",
  description:
    "Гипоаллергенный гель для стирки «LAMM AROMA» с пониженным пенообразованием с биодобавками эффективно и бережно отстирывает белые и цветные изделия из хлопчатобумажных, льняных и синтетических тканей, а также тканей из смешанных волокон в стиральных машинах любого типа и при ручной стирке. Устраняет любые неприятные запахи. ",
  price: 349,
  typeCare: [0],
};

const def = { items: [], itemsCount: 0, totalPrice: 0 };
describe("cartSlices", () => {
  it("cartSlices", () => {
    const result = cartSlices(undefined, { type: "" });

    expect(result).toEqual(def);
  });
  it("add item", () => {
    const action = { type: addItem.type, payload: item };
    const result: any = cartSlices(def, action);

    expect(result.items[0].id).toBe(1);
    expect(result.items[0].price).toBe(349);
    expect(result.items[0].count).toBe(1);
    expect(result.itemsCount).toBe(1);
    expect(result.totalPrice).toBe(349);
    expect(result.itemsCount).not.toBe(0);
    expect(result.itemsCount).not.toBe(2);
    // expect(result).toEqual({ items: [], itemsCount: 0, totalPrice: 0 });
  });
});
