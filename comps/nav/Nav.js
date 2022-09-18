import Link from "next/link";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <p className={styles.logo}>
        <strong>CoderBlog</strong>
      </p>
      <div>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </div>
    </div>
  );
};
export default Nav;
