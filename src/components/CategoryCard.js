import { Link } from "react-router-dom";
import styles from "../styles/CategoryCard.module.css";
export default function CategoryCard(category) {
   return(
      <li>
         <Link to={`/reviews?category=${category.slug}`}>
        <h3 onClick={() => category.handleClick(category.slug)}>
          {category.slug}
        </h3>
      </Link>
         <p>{category.description}</p>
      </li>
   )
}