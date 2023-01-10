import { Link } from "react-router-dom";
import styles from "../styles/Nav.module.css";

export default function Nav() {
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  return (
    <nav className={styles.topnav} id="myTopnav">
      <Link to="/">Users</Link>
      <Link to="/">Type of Games</Link>
      <Link to="/reviews">Reviews</Link>
      {/* <Link to="javascript:void(0);" class="icon" onclick={myFunction}>
        <i class="fa fa-bars"></i>
      </Link> */}
    </nav>
  );
}
