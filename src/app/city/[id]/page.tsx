import Link from "next/link";
import { notFound } from "next/navigation";
import { getCityById, getAllCountries } from "@/data/countries";
import styles from "./page.module.css";

// Генерируем статические параметры для всех городов
export function generateStaticParams() {
  const countries = getAllCountries();
  const params: { id: string }[] = [];

  countries.forEach((country) => {
    country.cities.forEach((city) => {
      params.push({ id: city.id });
    });
  });

  return params;
}

type Props = {
  params: Promise<{ id: string }>;
};

export default async function CityPage({ params }: Props) {
  const { id } = await params;
  const result = getCityById(id);

  if (!result) {
    notFound();
  }

  const { city, country } = result;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href={`/country/${country.id}`} className={styles.backLink}>
          ← {country.name}
        </Link>
        <h1 className={styles.title}>{city.name}</h1>
      </header>

      <main className={styles.main}>
        {/* Описание города */}
        <section className={styles.infoCard}>
          <h2 className={styles.sectionTitle}>Описание города</h2>
          <ul className={styles.infoList}>
            <li>
              <span className={styles.label}>Площадь:</span>
              <span className={styles.value}>
                {city.area.toLocaleString("ru-RU")} км²
              </span>
            </li>
            <li>
              <span className={styles.label}>Население:</span>
              <span className={styles.value}>
                {city.population.toLocaleString("ru-RU")} чел.
              </span>
            </li>
            <li>
              <span className={styles.label}>Год основания:</span>
              <span className={styles.value}>{city.founded} г.</span>
            </li>
          </ul>
        </section>

        {/* Ссылка на страну */}
        <section className={styles.countryLinkSection}>
          <p className={styles.countryText}>
            Этот город находится в стране:
          </p>
          <Link
            href={`/country/${country.id}`}
            className={styles.countryButton}
          >
            {country.name}
          </Link>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>Проект «Страны-Города» — Next.js | Студенческая работа</p>
      </footer>
    </div>
  );
}
