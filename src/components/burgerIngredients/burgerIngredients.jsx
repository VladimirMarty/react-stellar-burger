import styles from "./burgerIngredients.module.css";
import { data } from "../../utils/data";
import React from "react";
import IngredientDetalis from "../ingredientDetails/ingredientDetails";

// function BurgerIngredients() {}
//   // булки
//   const bun = data.filter((item) => item.type === "bun");
//   // соусы
//   const sauce = data.filter((item) => item.type === "sauce");
//   // начинки
//   const main = data.filter((item) => item.type === "main");

//   return (
//     <section>
//       <div>
//         <p className="text text_type_main-small">Булки</p>
//         {bun.map((item, index) => (
//           <IngredientDetalis item={item} />
//         ))}
//       </div>
//       <div>
//         <p className="text text_type_main-small">Соусы</p>
//         {sauce.map((item, index) => (
//           <IngredientDetalis item={item} />
//         ))}
//       </div>
//       <div>
//         <p className="text text_type_main-small">Ингридиенты</p>
//         {main.map((item, index) => (
//           <IngredientDetalis item={item} />
//         ))}
//       </div>
//     </section>
//   );
// }
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
            <IngredientDetalis item={item} />
          ))}
        </ul>
      </div>
      <div>
        <p className="text text_type_main-small">Соусы</p>
        <ul>
         
          {sauce.map((item) => (
            <IngredientDetalis item={item} />
          ))}
        </ul>
      </div>
      <div>
        <p className="text text_type_main-small">Ингридиенты</p>
        <ul>
         
          {main.map((item) => (
            <IngredientDetalis item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DurgerIngredients;
