import { useEffect, useState } from "react";
import { useParams } from "react-router";
import BreadCrumb from "../components/common/Breadcrumb";
import { Category, MENUS } from "../constants/category";
import API from "../api/api";
import Rating from "../components/common/Rating";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { ICartState, cartState } from "../store/cart";

interface ProductProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const initialProduct = {
  id: 0,
  title: "",
  price: 0,
  description: "",
  category: "",
  image: "",
  rating: {
    rate: 0,
    count: 0,
  },
};

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductProps>(initialProduct);
  const [cart, setCart] = useRecoilState<ICartState>(cartState);

  console.log(cart);

  const handleCart = (id: string) => {
    const updateCart = { ...cart, [id]: { id, count: (cart[id]?.count || 0) + 1 } };
    setCart(updateCart);
  };

  if (id === undefined) return null;

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await API.get(id);
      setProduct(product);
    };

    fetchProduct();
  }, []);

  return (
    <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
      <BreadCrumb category={Category[product.category]} crumb={product.title} />
      <div className="lg:flex lg:items-center mt-6 md:mt-14 px-2 lg:px-0">
        <figure className="flex-shrink-0 rounded-2xl min-w-80 overflow-hidden px-4 py-4 bg-white">
          <img src={product.image} alt="상품 이미지" className="object-contain w-full h-72" />
        </figure>
        <div className="card-body px-1 lg:px-12">
          <h2 className="card-title">{product.title}</h2>
          <p>{product.description}</p>
          <div>
            <Rating count={product.rating.count} rate={product.rating.rate} />
          </div>
          <p className="mt-2 mb-4 text-3xl">${Math.ceil(product.price)}</p>
          <div className="card-actions">
            <button
              className="btn btn-primary"
              onClick={() => {
                handleCart(id);
              }}
            >
              장바구니에 담기
            </button>
            <Link to="/cart" className="btn btn-outline ml-1">
              장바구니로 이동
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
