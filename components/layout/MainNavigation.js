import styles from "./MainNavigation.module.css";
import Link from "next/link";

function MainNavigation() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Coffee Shop</div>
      <nav>
        <ul>
          <li>
            <Link href="/">All Coffee's</Link>
          </li>
          <li>
            <Link href="/new-coffee">Add New Recipe</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
