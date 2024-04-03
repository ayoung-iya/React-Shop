import { Link } from "react-router-dom";

const Item = ({ item }) => {
  const { id, title, price, image } = item;

  return (
    <Link
      to={`/product/${id}`}
      className="card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal"
    >
      <figure className="flex h-80 bg-white overflow-hidden">
        <img src={image} alt="상품 이미지" className="transition-transform duration-300 max-w-[50%] max-h-[50%]" />
      </figure>
      <div className="card-body bg-gray-100 dark:bg-gray-700">
        <p className="card-title text-base">{title}</p>
        <p className="text-base">${price}</p>
      </div>
    </Link>
  );
};

export default Item;
