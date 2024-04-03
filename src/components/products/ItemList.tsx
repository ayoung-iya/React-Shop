import { useEffect, useState } from "react";
import API from "../../api/api";
import { Category } from "../../constants/category";
import Item from "./Item";

interface Item {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ItemList = ({ category }) => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchItems = async () => {};

    const fetchTotalItems = async () => {
      let newItems: Item[] = [];

      const urls = Object.entries(Category)
        .filter(([_, categoryName]) => categoryName === category)
        .map(([url, _]) => url);

      for (let i = 0; i < urls.length; i++) {
        const items = await API.get(`category/${urls[i]}`);
        newItems = [...newItems, ...items];
      }

      console.log(newItems);
      setItems(newItems);
    };

    fetchTotalItems();
  }, []);

  return (
    <>
      <h1 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">{category}</h1>
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list">
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
};

export default ItemList;
