import { Link } from "react-router-dom";
import { ICartState, addToCart, cartState, removeFromCart } from "../../store/cart";
import { toCurrencyFormat } from "../../helpers/helpers";
import { useRecoilState } from "recoil";
import CartItem from "./CartItem";

const CartList = (): JSX.Element => {
  // Recoil을 사용해서 cart데이터를 가져오는 예제입니다.
  const [cart, setCart] = useRecoilState<ICartState>(cartState);

  // store/cart.ts를 참고하세요.
  const removeFromCartHandler = (id: string) => () => {
    setCart(removeFromCart(cart, id));
  };

  const addToCartHandler = (id: string) => () => {
    setCart(addToCart(cart, id));
  };

  if (Object.keys(cart).length === 0) {
    return (
      <div>
        <h1 className="text-2xl">장바구니에 물품이 없습니다.</h1>
        <Link to="/" className="btn btn-primary mt-10">
          담으러 가기
        </Link>
      </div>
    );
  }

  console.log(Object.entries(cart).map(([_, info]) => info));

  return (
    <div className="lg:flex lg:items-center mt-4 px-2 lg:px-0">
      {/* 카트 리스트 화면을 구성 해보세요. */}
      {Object.entries(cart).map(([_, info]) => (
        <CartItem
          key={info.id}
          {...info}
          onClickMinus={removeFromCartHandler(info.id)}
          onClickPlus={addToCartHandler(info.id)}
        />
      ))}
    </div>
  );
};

export default CartList;
