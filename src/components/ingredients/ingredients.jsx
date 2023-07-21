import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
function IngredientDetales(props) {
  return (
    <li>
      <img src={props.item.image} alt={props.item.name} />
      <div>
        <p>{props.item.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p>{props.item.name}</p>
    </li>
  );
}

export default IngredientDetales;

// function Ingridient(props) {
//   return (
//     <form>
//            <p>{props.item.name}</p>
//       <img src={props.item.image} alt={props.item.name} />
//       <p>{props.item.name}</p>
//       <div>
//         <p>{props.item.calories}</p>
//       </div>
//       <div>
//         <p>{props.item.proteins}</p>
//       </div>
//       <div>
//         <p>{props.item.fat}</p>
//       </div>
//       <div>
//         <p>{props.item.carbohydrates}</p>
//       </div>
   
//     </form>
//   );
// }

// export default Ingridient;

