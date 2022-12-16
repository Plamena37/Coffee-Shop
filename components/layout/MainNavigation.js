import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Coffee Shop</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Coffee's</Link>
          </li>
          <li>
            <Link to="/new-coffee">Add New Coffee Recipe</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
