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
