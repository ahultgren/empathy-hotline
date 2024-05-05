import Image from "next/image";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <section className={styles.intro}>
      <div className="max-w-5xl px-4 py-24 mx-auto text-white">
        <h1 className="mx-auto text-7xl text-center drop-shadow-lg">
          Empathy Hotline
        </h1>
        <h2 className="mx-auto text-2xl text-center mt-5 drop-shadow-lg">
          You don't have to deal with it alone
        </h2>
      </div>
    </section>
  );
}
