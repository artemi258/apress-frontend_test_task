import close from "../../assets/icons/close.svg";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { clearProduct, fetchProduct } from "./popupSlice";

import "./popup.scss";
import "./mediaPopup.scss";

export const Popup = ({ handlerClosePopup }) => {
  const dispatch = useDispatch();
  const { idProduct, product } = useSelector((state) => state.popup);
  let description;
  if (product) {
    description =
      product.description.length > 120
        ? `${product.description.slice(0, 120).trim()}...`
        : product.description;
  }

  useEffect(() => {
    dispatch(fetchProduct(idProduct));
  }, []);

  const closePopup = (e) => {
    const target = e.target;
    if (target.className === "popup" || target.getAttribute("data-close")) {
      handlerClosePopup();
      dispatch(clearProduct());
    }
  };

  return (
    <>
      {product ? (
        <div className="popup" onClick={closePopup}>
          <div className="popup__content">
            <div className="popup__close" onClick={closePopup}>
              <img data-close src={close} alt="крестик" />
            </div>
            <div className="popup__content">
              <h4 className="popup__title">{product.name}</h4>
              <div className="popup__img">
                <img src={product.imageUrl} alt="фото товара" />
              </div>
              <div className="popup__price">₽{product.price}</div>
              <p className="popup__description">{description}</p>
              <div className="popup__quantity">Количество: {product.count}</div>
              <div className="popup__link">
                <a target="__blank" href={product.url}>
                  Ссылка на товар
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="popup">
          <div className="popup__content">
            <div className="popup__message">загрузка...</div>
          </div>
        </div>
      )}
    </>
  );
};
