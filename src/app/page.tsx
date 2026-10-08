import Link from "next/link";
import { getAllCountries } from "@/data/countries";
import styles from "./page.module.css";

export default function Home() {
  // Получаем список всех стран
  const countries = getAllCountries();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Страны и Города</h1>
        <p className={styles.subtitle}>Выберите страну, чтобы узнать больше</p>
      </header>

      <main className={styles.main}>
        <h2 className={styles.sectionTitle}>Список стран</h2>

        {/* Список стран в виде ссылок */}
        <ul className={styles.countryList}>
          {countries.map((country) => (
            <li key={country.id} className={styles.countryItem}>
              <Link href={`/country/${country.id}`} className={styles.countryLink}>
                <span className={styles.countryName}>{country.name}</span>
                <span className={styles.countryMeta}>
                  {country.language} · {country.cities.length}{" "}
                  {country.cities.length === 1
                    ? "город"
                    : country.cities.length < 5
                    ? "города"
                    : "городов"}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </main>

      <footer className={styles.footer}>
        <p>Проект «Страны-Города» — Next.js | Студенческая работа</p>
      </footer>
    </div>
  );
}
