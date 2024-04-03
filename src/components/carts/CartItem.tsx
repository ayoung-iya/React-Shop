import { productsList } from "../../store/products";
import { useRecoilValue } from "recoil";

interface CartItem {
  id: number;
  count: number;
  onClickMinus: () => void;
  onClickPlus: () => void;
}

const CartItem = ({ id, count, onClickMinus, onClickPlus }: CartItem) => {
  const productList = useRecoilValue(productsList);
  const { image, title, price } = productList.filter((product) => product.id === +id)[0];

  return (
    <>
      <a href={`/product/${id}`}>
        <figure className="w-56 min-w-full flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white">
          <img src={image} alt={title} className="object-contain w-full h-48" />
        </figure>
      </a>
      <div className="card-body px-1 lg:px-12">
        <h2 className="card-title">
          <a className="link link-hover" href={`/product/${id}`}>
            {title}
          </a>
        </h2>
        <p className="mt-2 mb-4 text-3xl">
          ${Math.ceil(price) * count} <span className="text-2xl">(${Math.ceil(price)})</span>
        </p>
        <div className="card-actions">
          <div className="btn-group">
            <button onClick={onClickMinus} className="btn btn-primary">
              -
            </button>
            <button className="btn btn-ghost no-animation">{count}</button>
            <button onClick={onClickPlus} className="btn btn-primary">
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
