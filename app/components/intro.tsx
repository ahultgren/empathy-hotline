import styles from "./intro.module.css";

export default function Home() {
  return (
    <section className={styles.intro}>
      <div className="max-w-5xl px-4 py-24 mt-12 mx-auto text-white text-center font-bold">
        <h1 className="mx-auto text-7xl drop-shadow-lg">Empathy Hotline</h1>
        <h2 className="mx-auto text-2xl mt-5 drop-shadow-lg">
          You don't have to deal with it alone
        </h2>
      </div>
    </section>
  );
}
