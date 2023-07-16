import { ProductsItem } from "./productsItem/ProductsItem";
import { MobileProductsItem } from "./productsItem/MobileProductsItem";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./productsSlice";
import { Search } from "../../components/search/Search";
import { Popup } from "../popup/Popup";
import { addIdProduct } from "../popup/popupSlice";
import { ColumnsTitles } from "./columnsTitles/ColumnsTitles";
import { isMobile } from "../../utils/isMobile";
import { MobileColumnsTitles } from "./columnsTitles/MobileColumnsTitles";

import "./products.scss";
import "./mediaProducts.scss";

export const Products = ({ mobile }) => {
  const dispatch = useDispatch();
  const { filteredProducts, notFound } = useSelector((store) => store.products);
  const [activatePopup, setActivatePopup] = useState(false);

  useEffect(() => {
    isMobile();
    dispatch(fetchProducts());
  }, []);

  const handlerOpenPopup = (id) => {
    setActivatePopup(true);
    dispatch(addIdProduct(id));
  };

  const handlerClosePopup = () => {
    setActivatePopup(false);
  };

  return (
    <>
      <div className="products">
        <Search />
        {mobile ? <MobileColumnsTitles /> : <ColumnsTitles />}
        <ul className="products__list">
          {filteredProducts.length ? (
            mobile ? (
              filteredProducts.map((item, i) => {
                return (
                  <MobileProductsItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    date={item.createdAt}
                    price={item.price}
                    quantity={item.count}
                    background={i % 2 === 0 ? true : false}
                    handlerOpenPopup={handlerOpenPopup}
                  />
                );
              })
            ) : (
              filteredProducts.map((item, i) => {
                return (
                  <ProductsItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    date={item.createdAt}
                    price={item.price}
                    quantity={item.count}
                    background={i % 2 === 0 ? true : false}
                    handlerOpenPopup={handlerOpenPopup}
                  />
                );
              })
            )
          ) : !filteredProducts.length && notFound ? (
            <div className="products__message">
              Товары не найдены. Измените запрос.
            </div>
          ) : (
            <div className="products__message">...загрузка</div>
          )}
        </ul>
      </div>
      {activatePopup && <Popup handlerClosePopup={handlerClosePopup} />}
    </>
  );
};
