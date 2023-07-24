import styles from "./ingridientDitalis.module.css";
import { data } from "../../utils/data";

function IngredientDetales( props ) {
  // const nameing = data.filter((item) => item.name === "nameing");
  // const proteins = data.filter((item) => item.proteins === "proteins");
  // const fat = data.filter((item) => item.fat === "fat");
  // const calories = data.filter((item) => item.calories === "calories");
  //   const carbohydrates = data.filter((item) => item.carbohydrates === "carbohydrates");
  //   const image = data.filter((item) => item.image === "image");
  const item = props.item;
  return (
    <form className={styles.form}>
      <h1 className="text text_type_main-large">Детали ингридиента</h1>
    
      <img src={item.image} alt={item.name}  className="mb-4 "/>
      <p className="text text_type_main-medium mb-8" >{item.name}</p>
     <div className={styles.div}> 
     <div  className={styles.inside}>
        <p className="text text_type_main-default text_color_inactive">Калории, ккал</p>
        <p className="text text_type_main-default text_color_inactive">{item.calories}</p>
      </div>
      <div  className={styles.inside}>
      <p className="text text_type_main-default text_color_inactive">Белки. г</p>
        <p className="text text_type_main-default text_color_inactive">{item.proteins}</p>
      </div>
      <div  className={styles.inside}>
      <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
        <p className="text text_type_main-default text_color_inactive">{item.fat}</p>
      </div>
      <div  className={styles.inside}>
      <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
        <p className="text text_type_main-default text_color_inactive">{item.carbohydrates}</p>
      </div>
      </div>
    </form>
  );
}

export default IngredientDetales;

// import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
// function IngredientDetales(props) {
//   return (
//     <li>
//       <img src={props.item.image} alt={props.item.name} />
//       <div>
//         <p>{props.item.price}</p>
//         <CurrencyIcon type="primary" />
//       </div>
//       <p>{props.item.name}</p>
//     </li>
//   );
// }

// export default IngredientDetales;
