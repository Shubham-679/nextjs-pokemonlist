import CustomHead from "../components/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <CustomHead title="Pokemon | Home" />
      <div>
        <h1 className={styles.title}>Pokemon Game/Cartoon</h1>
        <p className={styles.text}>
          
        </p>
        <Link href="/pokemon/">
          <a className={styles.btn}>Explore More Pokemon</a>
        </Link>
      </div>
    </>
  );
}
