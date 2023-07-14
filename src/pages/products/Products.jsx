import { Input } from "../../components/Input";
import search from "../../assets/icons/search.svg";
import sort from "../../assets/icons/sort.svg";

import "./products.scss";
import { ProductsItem } from "./productsItem/ProductsItem";

export const Products = (props) => {
  return (
    <div className="products">
      <div className="products__searchBar">
        <Input
          placeholder={"Фильтр по названию товара"}
          classInput={"products"}
          id={"searchInput"}
        />
        <label className="products__label" htmlFor="searchInput">
          <img className="products__label-icon" src={search} alt="поиск" />
        </label>
      </div>
      <div className="products__columnNames">
        <h5 className="products__columnNames-name">Имя товара</h5>
        <div className="products__columnNames-wrapper">
          <button className="products__columnNames-button">
            <img
              className="products__columnNames-icon"
              src={sort}
              alt="сортировка"
            />
          </button>
          <h5 className="products__columnNames-name">Дата создания</h5>
        </div>
        <div className="products__columnNames-wrapper">
          <button className="products__columnNames-button">
            <img
              className="products__columnNames-icon"
              src={sort}
              alt="сортировка"
            />
          </button>
          <h5 className="products__columnNames-name">Цена</h5>
        </div>
        <h5 className="products__columnNames-name">Количество</h5>
        <h5 className="products__columnNames-name">Наличие</h5>
      </div>
      <ul className="products__list">{<ProductsItem />}</ul>
    </div>
  );
};
