function Ingridient(props) {
  return (
    <form>
           <p>{props.item.name}</p>
      <img src={props.item.image} alt={props.item.name} />
      <p>{props.item.name}</p>
      <div>
        <p>{props.item.calories}</p>
      </div>
      <div>
        <p>{props.item.proteins}</p>
      </div>
      <div>
        <p>{props.item.fat}</p>
      </div>
      <div>
        <p>{props.item.carbohydrates}</p>
      </div>
   
    </form>
  );
}

export default Ingridient;
