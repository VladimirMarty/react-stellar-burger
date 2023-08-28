import styles from "./ingredients.module.css";
import Modal from "../modal/modal";
import { useState } from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import OrderDetails from "../orderDetails/orderDetails";

import { data } from "../../utils/data";
import IngredientDetales from "../ingridientDitails/ingridientDitalis";

import { useSelector, useDispatch } from "react-redux";

import {
  changeModalIng,
  changeSelectedVisible,
} from "../../service/actions/addTodo";
function Ingredient(props2) {
  // const [openModal, setOpenModal] = useState(false);
  const { openModal, selectedModal } = useSelector((store) => ({
    openModal: store.mainState.hasIngVisible,
    selectedModal: store.mainState.selectedModal,
  }));

  // // Функция dispatch теперь доступна из хука внутри компонента
  // const dispatch = useDispatch();
  // const setOpenModal = (value) => {
  //   // Отправляем экшен, используя переменную из хука React.useState
  //   dispatch(changeModalIng(true));
  //   dispatch(changeSelectedVisible(value.item));
  // };
  return (
    <>
      {/* {openModal} */}
      <li
        className={styles.ingredients}
        onClick={() => {
          props2.setOpenModal(props2);
        }}
      >
        <img src={props2.item.image} alt={props2.item.name} />
        <div>
          <p className="text text_type_digits-default">{props2.item.price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <p>{props2.item.name}</p>
      </li>
      {/* {openModal && (
        <Modal setState={setOpenModal}>
          <IngredientDetales item={props2.item} />
          
        </Modal>
      )} */}
      {/* <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        modalContent={<IngredientDetales item={props2.item} />}
      /> */}
    </>
  );
}

export default Ingredient;

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