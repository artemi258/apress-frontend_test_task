import search from "../../assets/icons/search.svg";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFilteredProducts } from "../../pages/products/productsSlice";

import "./search.scss";
import "./mediaSearch.scss";

export const Search = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const [value, setValue] = useState("");

  useEffect(() => {
    dispatch(addFilteredProducts(products));
  }, [products]);
  const filteringProducts = (value) => {
    if (!value) {
      dispatch(addFilteredProducts(products));
    } else {
      const regex = new RegExp(`${value}`, "i");
      const filteredProducts = products.filter((item) => regex.test(item.name));
      if (filteredProducts.length) {
        dispatch(addFilteredProducts({ filteredProducts, notFound: false }));
      } else {
        dispatch(addFilteredProducts({ filteredProducts, notFound: true }));
      }
    }
  };

  const onChange = (e) => {
    const value = e.target.value;
    setValue(value);
    filteringProducts(value);
  };

  return (
    <div className="searchBar">
      <input
        value={value}
        onChange={onChange}
        placeholder="Фильтр по названию товара"
        type="text"
        className="searchBar__input"
        id="searchInput"
      />
      <label className="searchBar__label" htmlFor="searchInput">
        <img className="searchBar__label-icon" src={search} alt="поиск" />
      </label>
    </div>
  );
};
