import styles from "./burgerIngredients.module.css";
import { data } from "../../utils/data";
import React from "react";
import Ingridient from "../ingredients/ingredients";


const DurgerIngredients = () => {
  const bun = data.filter((item) => item.type === "bun");
  const sauce = data.filter((item) => item.type === "sauce");
  const main = data.filter((item) => item.type === "main");
  return (
    <section className={styles.product}>
      <div>
        <p className="text text_type_main-small">Булки</p>
        <ul className={styles.durgerStylesList}>
          {bun.map((item) => (
            <Ingridient item={item} />
          ))}
        </ul>
      </div> 
      <div>
        <p className="text text_type_main-small">Соусы</p>
        <ul className={styles.durgerStylesList}>
         
          {sauce.map((item) => (
            <Ingridient item={item} />
          ))}
        </ul>
      </div>
      <div>
        <p className="text text_type_main-small">Ингридиенты</p>
        <ul className={styles.durgerStylesList}>
         
          {main.map((item) => (
            <Ingridient item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DurgerIngredients;
