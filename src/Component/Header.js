import React from 'react'
import styles from "../Component/Header.module.css"

const Header = () => {
  const changeTheme = () => {
    const header = document.querySelector(".header")
    const details = document.querySelectorAll('.details')
    const uls = document.querySelectorAll("ul")
    
    details.forEach((detail) => {
      detail.classList.toggle("light-theme")
    })
    header.classList.toggle("light-theme")
    uls.forEach((ul) => {
      ul.classList.toggle("light-theme")
    })
    document.body.classList.toggle("light-theme")
  }

  return (
    <>
      <header className="header">
        <div>
          <h1>Where in the world?</h1>
        </div>

        <div>
          <button className={styles.btn_moon} onClick={() => changeTheme()}>
            <i className="fas fa-moon"></i>
          </button>
        </div>
      </header>
    </>
  )
}

export default Header