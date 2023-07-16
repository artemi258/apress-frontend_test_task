import sort from "../../../assets/icons/sort.svg";

import { useDispatch, useSelector } from "react-redux";
import { addFilteredProducts } from "../productsSlice";
import { useState } from "react";

import "./columnsTitles.scss";
import "./mediaColumnsTitles.scss";

export const ColumnsTitles = () => {
  const dispatch = useDispatch();
  const { filteredProducts } = useSelector((state) => state.products);
  const [triggerFilterPrice, setTriggerFilterPrice] = useState(false);
  const [triggerFilterDate, setTriggerFilterDate] = useState(false);

  const priceFiltering = () => {
    const copyProducts = filteredProducts.slice();
    const filtering = !triggerFilterPrice
      ? copyProducts.sort((a, b) => a.price - b.price)
      : copyProducts.sort((a, b) => b.price - a.price);
    setTriggerFilterPrice((state) => !state);
    dispatch(addFilteredProducts(filtering));
  };
  const dateFiltering = () => {
    const copyProducts = filteredProducts.slice();
    const filtering = !triggerFilterDate
      ? copyProducts.sort(
          (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        )
      : copyProducts.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
    setTriggerFilterDate((state) => !state);
    dispatch(addFilteredProducts(filtering));
  };

  return (
    <div className="columnsTitles">
      <h5 className="columnsTitles__name">Имя товара</h5>
      <div className="columnsTitles__wrapper">
        <button onClick={dateFiltering} className="columnsTitles__button">
          <img className="columnsTitles__icon" src={sort} alt="сортировка" />
        </button>
        <h5 className="columnsTitles__name">Дата создания</h5>
      </div>
      <div className="columnsTitles__wrapper">
        <button onClick={priceFiltering} className="columnsTitles__button">
          <img className="columnsTitles__icon" src={sort} alt="сортировка" />
        </button>
        <h5 className="columnsTitles__name">Цена</h5>
      </div>
      <h5 className="columnsTitles__name">Количество</h5>
      <h5 className="columnsTitles__name">Наличие</h5>
    </div>
  );
};
