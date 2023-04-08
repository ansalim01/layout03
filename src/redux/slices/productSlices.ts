import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  productCard: any;
  isLoading: Boolean;
  typeCareActive: any[number];
  activeSettings: number;
  typeActiveSettings: any[number];
};

const initialState: InitialState = {
  productCard: [],
  isLoading: true,
  typeCareActive: [0],

  activeSettings: -1,
  typeActiveSettings: [0],
};

export const productSlices = createSlice({
  name: "product",
  initialState,
  reducers: {
    pushTypeCareActive(state, action: PayloadAction<any>) {
      if (state.typeCareActive.includes(Number(action.payload))) {
        state.typeCareActive = state.typeCareActive.filter(
          (i: Number) => i !== action.payload
        );
      } else {
        state.typeCareActive.push(Number(action.payload));
      }
    },
    setTypeCareActive(state, action: PayloadAction<any>) {
      state.typeCareActive = action.payload;
    },

    setProductCard(state, action: any) {
      state.productCard = action.payload;
    },
    setIsLoading(state, action: PayloadAction<Boolean>) {
      state.productCard = action.payload;
    },
    addProductCard(state, action: PayloadAction<any>) {
      const a = action.payload;
      a.id = state.productCard[state.productCard.length - 1].id + 1;
      a.barcode = state.productCard[state.productCard.length - 1].id + 1;
      a.typeCare = state.typeCareActive;
      state.productCard.push(a);
    },
    removeProductCard(state, action: PayloadAction<number>) {
      state.productCard = state.productCard.filter(
        (i: any) => i.id !== action.payload
      );
      // productCard
    },

    setActiveSettings(state, action: PayloadAction<number>) {
      state.activeSettings = action.payload;
    },
    pushTypeActiveSettings(state, action: PayloadAction<any>) {
      if (state.typeActiveSettings.includes(Number(action.payload))) {
        state.typeActiveSettings = state.typeActiveSettings.filter(
          (i: Number) => i !== action.payload
        );
      } else {
        state.typeActiveSettings.push(Number(action.payload));
      }
    },
    setTypeActiveSettings(state, action: PayloadAction<any>) {
      state.typeActiveSettings = action.payload;
    },
    settingsProductCard(state, action: PayloadAction<any>) {
      state.productCard.map((item: any, index: number) => {
        if (item.id === action.payload.id) {
          state.productCard[index] = {
            ...action.payload,
            typeCare: state.typeActiveSettings,
          };
        }
      });
      // state.productCard = [...state.productCard, product];
    },
  },
});

export const {
  setProductCard,
  setIsLoading,
  addProductCard,
  pushTypeCareActive,
  setTypeCareActive,
  removeProductCard,
  setActiveSettings,
  setTypeActiveSettings,
  pushTypeActiveSettings,
  settingsProductCard,
} = productSlices.actions;

export default productSlices.reducer;
