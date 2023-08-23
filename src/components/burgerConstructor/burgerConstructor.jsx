import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burgerConstructor.module.css";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import DurgerIngredients from "../burgerIngredients/burgerIngredients";
import { useState } from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";


import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import OrderDetails from "../orderDetails/orderDetails";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import { deleteIngridient } from "../../service/actions/addTodo";




import {
  changeModalVisible,
  changeSelectedVisible,
} from "../../service/actions/addTodo";



const BurgerConstructor = () => {
  // Функция dispatch теперь доступна из хука внутри компонента
  const dispatch = useDispatch();

  
  
  const { ingredientsList } = useSelector((store) => ({
    ingredientsList: store.ingredientsList,
  }));

  // const [openModal, setOpenModal] = useState(false);


  // const img = "https://code.s3.yandex.net/react/code/bun-02.png";
  const onSubmit = () => {
    console.log("selectedIngridients", ingredientsList);
    // Отправляем экшен, используя переменную из хука React.useState
    // dispatch({ type: "ADD_TODO" });
  };
  const handleClose = (ing) => {
    
    dispatch(deleteIngridient(ing.id));
  };

  const bun = ingredientsList.find((ing) => ing.typeIng === "bun");
  const ingredients = ingredientsList.filter((ing) => ing.typeIng !== "bun");

  const { openModal, selectedModal } = useSelector((store) => ({
    openModal: store.mainState.hasVisible,
    selectedModal: store.mainState.selectedModal,
  }));

  
  const setOpenModal = (value) => {
    // Отправляем экшен, используя переменную из хука React.useState
    dispatch(changeModalVisible(true));
    dispatch(changeSelectedVisible(value.item));
  };

  return (
    <div>
      <div
        className={styles.constItems}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <div>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={bun?.name}
            price={bun.price}
            thumbnail={bun.image}
          />
        </div>

        <div className={styles.constScroll + " custom-scroll"}>
          {ingredients.map((ing) => {
            if (ing.type !== "bun")
              return (
                <div className={styles.constScrollItem}>
                  <DragIcon type="primary" />

                  <ConstructorElement
                    handleClose={() => handleClose(ing)}
                    text={ing.name}
                    price={ing.price}
                    thumbnail={ing.image}
                  />
                </div>
              );
          })}
        </div>
        <div>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={bun.name}
            price={bun.price}
            thumbnail={bun.image}
          />
        </div>
      </div>
      <div className={styles.foot}>
    
      <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Оформить заказ
          {openModal}
        </Button>
        <div className={styles.final}>
          <p className="text text_type_digits-medium p-2">6000</p>
          <CurrencyIcon type="primary" />
        </div>
        {openModal && (
       <Modal setState={setOpenModal}>
            <OrderDetails orderNumber="11111" />
          </Modal>
        )}
        {/* <Modal
          open={openModal}
          onClose={() => setOpenModal(false)}
          modalContent={<OrderDetails orderNumber="11111" />}
        /> */}
      </div>
    </div>
  );
};
export default BurgerConstructor;
