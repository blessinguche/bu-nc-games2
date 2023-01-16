import styles from "../styles/Categories.module.css";
import { getCategories } from "../Utils";
import CategoryCard from "./CategoryCard";
import { useEffect, useState } from "react";

export default function Categories({ setCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((data) => setCategories(data));
  }, []);

  function handleClick(cat) {
    setCategory(cat);
  }
  return (
   <div>
    <ul>
      {categories.map((category) => {
        return (
          <CategoryCard
            key={category.slug}
            {...category}
            handleClick={handleClick}
          />
        );
      })}
    </ul></div>
  );
}
