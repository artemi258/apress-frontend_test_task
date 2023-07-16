export const MobileProductsItem = ({
  id,
  name,
  date,
  price,
  quantity,
  background,
  handlerOpenPopup,
}) => {
  const newDate = new Date(date);
  const day = newDate.getDay();
  const month = newDate.getMonth();
  const year = newDate.getFullYear();
  const template = `${day > 9 ? day : "0" + day}/${
    month > 9 ? month : "0" + month
  }/${year}`;
  return (
    <li
      onClick={() => handlerOpenPopup(id)}
      className={`productsItem ${background ? "productsItem__background" : ""}`}
    >
      <div className="productsItem__product">
        <span className="productsItem__title">Имя товара:</span>
        <div className="productsItem__flex">
          <div className="productsItem__img">
            <img src="https://loremflickr.com/640/480" alt="картинка" />
          </div>
          <div className="productsItem__name">{name}</div>
        </div>
      </div>
      <div className="productsItem__data">
        <span className="productsItem__title">Дата создания:</span>
        <div>{template}</div>
      </div>
      <div className="productsItem__data">
        <span className="productsItem__title">Цена:</span>
        <div className="productsItem__price">₽{price}</div>
      </div>
      <div className="productsItem__data">
        <span className="productsItem__title">Количество:</span>
        <div className="productsItem__quantity">{quantity}</div>
      </div>
      <div className="productsItem__data">
        <span className="productsItem__title">Наличие:</span>
        <div
          className={`productsItem__availability ${
            quantity > 0 ? "productsItem__exist" : "productsItem__notExist"
          }`}
        >
          {quantity > 0 ? "Есть на складе" : "Отсутствует"}
        </div>
      </div>
    </li>
  );
};
