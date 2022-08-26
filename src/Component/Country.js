import React from "react";
import styles from "../Component/Country.module.css";

export default function Country({ country }) {
  return (
    <div>
      <div>
        <div className={styles.country}>
          <div className={styles.imageCon}>
            <img
              src={country.flags.png}
              alt="Country Flags"
              style={{ height: "250px", width: "100%" }}
            />
          </div>

          <div className={styles.coatOfArmsCon}>
            <img src={country.coatOfArms.png} alt="coatOfArms" />
          </div>

          <p style={{ fontWeight: "bold" }}>Name: {country.name.common}</p>
          <p>Capital: {country.capital}</p>
          <p>Population: {country.population.toLocaleString("en-US")}</p>
          <p className={styles.timezone}>
            Timezones:{" "}
            {country.timezones.map((timezones) => (
              <span>{timezones}</span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}
