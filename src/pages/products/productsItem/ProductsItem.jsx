import "./productsItem.scss";
import "./mediaProductsItem.scss";

export const ProductsItem = ({
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
        <div className="productsItem__img">
          <img src="https://loremflickr.com/640/480" alt="картинка" />
        </div>
        <div className="productsItem__name">{name}</div>
      </div>
      <div className="productsItem__date">{template}</div>
      <div className="productsItem__price">₽{price} </div>
      <div className="productsItem__quantity">{quantity}</div>
      <div
        className={`productsItem__availability ${
          quantity > 0 ? "productsItem__exist" : "productsItem__notExist"
        }`}
      >
        {quantity > 0 ? "Есть на складе" : "Отсутствует"}
      </div>
    </li>
  );
};
