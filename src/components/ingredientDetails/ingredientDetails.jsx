function IngredientDetales(props) {
  return (
    <li>
      <img scr={props.item.link} alt={props.item.name} />
      <p>{props.item.price}</p>
      <p>{props.item.name}</p>
    </li>
  );
}

export default IngredientDetales;
