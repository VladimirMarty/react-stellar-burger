import styles from "./app.module.css";
import { data } from "../../utils/data";
import React from "react";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredients from "../burgerIngredients/burgerIngredients";
import AppHeader from "../appHeader/appHeader";
import BurgerConstructor from "../burgerConstructor/burgerConstructor";
import Tabs from "../tabs/tabs";
import DurgerIngredients from "../burgerIngredients/burgerIngredients";

// function App() {
//   const img = "https://code.s3.yandex.net/react/code/bun-02.png";
//   return (
//     <div className={styles.app}>
//       <AppHeader />

//       <section className={styles.createYourBurger}>
//         <section className={styles.ingridients}>
//           <p className="text text_type_main-large">Соберите бургер</p>
//           <Tabs />
//           {/* <div style={{ display: "flex" }}>
//             <Tab value="bun" active={current === "bun"} onClick={setCurrent}>
//               Булки
//             </Tab>
//             <Tab
//               value="sauce"
//               active={current === "sauce"}
//               onClick={setCurrent}
//             >
//               Соусы
//             </Tab>
//             <Tab value="main" active={current === "main"} onClick={setCurrent}>
//               Ингридиенты
//             </Tab>
//           </div> */}
//           <BurgerIngredients />
//           {/* <div>
//             <p className="text text_type_main-small">Булки</p>
//             {bun.map((item, index) => (
//               <BurgerIngredients item={item} />
//             ))}
//           </div>
//           <div>
//             <p className="text text_type_main-small">Соусы</p>
//             {sauce.map((item, index) => (
//               <BurgerIngredients item={item} />
//             ))}
//           </div>
//           <div>
//             <p className="text text_type_main-small">Ингридиенты</p>
//             {main.map((item, index) => (
//               <BurgerIngredients item={item} />
//             ))}
//           </div> */}
//         </section>
//         <section className={styles.yourBurger}>
//           <BurgerConstructor />
//           {/* <div
//             style={{ display: "flex", flexDirection: "column", gap: "10px" }}
//           >
//             <ConstructorElement
//               type="top"
//               isLocked={true}
//               text="Краторная булка N-200i (верх)"
//               price={200}
//               thumbnail={img}
//             />
//             <ConstructorElement
//               text="Краторная булка N-200i (верх)"
//               price={50}
//               thumbnail={img}
//             />
//             <ConstructorElement
//               type="bottom"
//               isLocked={true}
//               text="Краторная булка N-200i (низ)"
//               price={200}
//               thumbnail={img}
//             />
//           </div> */}
//         </section>
//       </section>
//     </div>
//   );
// }

// export default App;
function App() {
  return (
    <div className={styles.app}>
      <AppHeader />
      <section className={styles.createYourBurger}>
          <div className={styles.wrapper}>
        <section className={styles.ingridients}>
          <p className="text text_type_main-large">Соберите бургер</p>
        </section>
        <section className={styles.yourBurger}>

         <div>
          <Tabs />
          <DurgerIngredients />
          </div> <BurgerConstructor />
        </section>
          </div>
      </section>
    </div>
  );
}

export default App;
