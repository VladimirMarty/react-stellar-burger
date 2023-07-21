import styles from "./burgerIngredients.module.css";
import { data } from "../../utils/data";
import React from "react";
import Ingridient from "../ingredients/ingredients";


const DurgerIngredients = () => {
  const bun = data.filter((item) => item.type === "bun");
  const sauce = data.filter((item) => item.type === "sauce");
  const main = data.filter((item) => item.type === "main");
  return (
    <section>
      <div>
        <p className="text text_type_main-small">Булки</p>
        <ul>
          {bun.map((item) => (
            <Ingridient item={item} />
          ))}
        </ul>
      </div>
      <div>
        <p className="text text_type_main-small">Соусы</p>
        <ul>
         
          {sauce.map((item) => (
            <Ingridient item={item} />
          ))}
        </ul>
      </div>
      <div>
        <p className="text text_type_main-small">Ингридиенты</p>
        <ul>
         
          {main.map((item) => (
            <Ingridient item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DurgerIngredients;
