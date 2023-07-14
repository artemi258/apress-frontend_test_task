import "./productsItem.scss";

export const ProductsItem = (props) => {
  return (
    <li className="productsItem">
      <div className="productsItem__product">
        <div className="productsItem__img">
          <img src="https://loremflickr.com/640/480" alt="картинка" />
        </div>
        <div className="productsItem__name">Hat</div>
      </div>
      <div className="productsItem__date">13/05/2022</div>
      <div className="productsItem__price">₽4.95 </div>
      <div className="productsItem__quantity">1</div>
      <div className="productsItem__availability productsItem__exist">
        Есть на складе
      </div>
    </li>
  );
};
