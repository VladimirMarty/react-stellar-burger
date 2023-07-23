import styles from "./ingredients.module.css";
import Modal from "../modal/modal";
import { useState } from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import OrderDetails from "../orderDetails/orderDetails";
import Ingridient from "../ingridientDitails/ingridientDitalis";
import { data } from "../../utils/data";
function IngredientDetales(props2) {
  const [openModal, setOpenModal] = useState(false);


  return (
    <>
      <li className={styles.ingredients} onClick={() => setOpenModal(true)}>
        <img src={props2.item.image} alt={props2.item.name} />
        <div>
          <p>{props2.item.price}</p>
          <CurrencyIcon type="primary"
           />
        </div>
        <p>{props2.item.name}</p>
      </li>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        // modalContent={Ingridient}
      />
    </>
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
