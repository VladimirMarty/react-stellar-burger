import styles from "./appHeader.module.css";
import React from "react";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const AppHeader = () => {
    return (
        <header className={styles.header}>
         <div className={styles.burgerLinks}>
          <div className={styles.constructorBurger}>
            <BurgerIcon type="primary" />
            <a >Конструктор</a>
          </div>

          <div className={styles.orderFeed}>
            <ListIcon type="secondary" />
            <a className="text text_type_main-default text_color_inactive">Лента заказов</a>
          </div>
        </div>

        <Logo className={styles.logo} />

        <div className={styles.login}>
          <ProfileIcon type="secondary" />
          <a className="text text_type_main-default text_color_inactive">Личный кабинет</a>
        </div>
        </header>
      );
}

export default AppHeader;