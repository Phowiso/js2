import Link from "next/link";
import { notFound } from "next/navigation";
import { getCountryById, getAllCountries } from "@/data/countries";
import styles from "./page.module.css";

// Генерируем статические параметры для всех стран
export function generateStaticParams() {
  const countries = getAllCountries();
  return countries.map((country) => ({
    id: country.id,
  }));
}

type Props = {
  params: Promise<{ id: string }>;
};

export default async function CountryPage({ params }: Props) {
  const { id } = await params;
  const country = getCountryById(id);

  if (!country) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/" className={styles.backLink}>
          ← Все страны
        </Link>
        <h1 className={styles.title}>{country.name}</h1>
      </header>

      <main className={styles.main}>
        {/* Описание страны */}
        <section className={styles.infoCard}>
          <h2 className={styles.sectionTitle}>Описание страны</h2>
          <ul className={styles.infoList}>
            <li>
              <span className={styles.label}>Язык:</span>
              <span className={styles.value}>{country.language}</span>
            </li>
            <li>
              <span className={styles.label}>Площадь:</span>
              <span className={styles.value}>
                {country.area.toLocaleString("ru-RU")} км²
              </span>
            </li>
            <li>
              <span className={styles.label}>Население:</span>
              <span className={styles.value}>
                {country.population.toLocaleString("ru-RU")} чел.
              </span>
            </li>
          </ul>
        </section>

        {/* Список городов */}
        <section className={styles.citiesSection}>
          <h2 className={styles.sectionTitle}>
            Города ({country.cities.length})
          </h2>
          <ul className={styles.cityList}>
            {country.cities.map((city) => (
              <li key={city.id} className={styles.cityItem}>
                <Link
                  href={`/city/${city.id}`}
                  className={styles.cityLink}
                >
                  <span className={styles.cityName}>{city.name}</span>
                  <span className={styles.cityMeta}>
                    нас. {city.population.toLocaleString("ru-RU")}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>Проект «Страны-Города» — Next.js | Студенческая работа</p>
      </footer>
    </div>
  );
}
