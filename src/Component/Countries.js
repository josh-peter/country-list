import React from 'react'
import Country from './Country'
import styles from "../Component/Countries.module.css"

export default function Countries({ countries }) {
  return (
      <div className={styles.country}>
          {countries.map((country) => (
              <Country country={country} />
          ))}
    </div>
  )
}
