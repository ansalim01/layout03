// import React from "react";
import React, { Component } from "react";
import { useAppDispatch, useAppSelector } from "../types/hook";

function FilterProduct({
  productCard,
  categoryId,
  priceMin,
  priceMax,
  sort,
  checkboxManufacturer,
}: any) {
  let items = productCard;
  items = React.useMemo(() => {
    return productCard.filter((obj: any) => {
      if (obj.typeCare.includes(categoryId)) {
        return true;
      }
    });
  }, [categoryId, productCard]);

  if (priceMax !== 0) {
    items = items.filter((obj: any) => {
      if (obj.price > priceMin && obj.price < priceMax) {
        return true;
      }
    });
  }

  if (checkboxManufacturer.length !== 0) {
    items = items.filter((obj: any) => {
      if (checkboxManufacturer.includes(obj.manufacturer)) {
        return true;
      }
    });
  }

  items.sort((a: any, b: any) => {
    switch (sort.sortProperty) {
      case "name":
        return a.name.localeCompare(b.name);
      case "-name":
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      case "-price":
        return a.price - b.price;
      case "price":
        return b.price - a.price;
    }
  });

  return items;
}

export default FilterProduct;
