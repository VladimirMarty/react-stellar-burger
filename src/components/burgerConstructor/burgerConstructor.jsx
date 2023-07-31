import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burgerConstructor.module.css";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import DurgerIngredients from "../burgerIngredients/burgerIngredients";
import { useState } from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

// import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";

// const BurgerConstructor = () => {
//     return (
//       <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
//         <ConstructorElement
//           type="top"
//           isLocked={true}
//           text="Краторная булка N-200i (верх)"
//           price={200}
//           thumbnail={img}
//         />
//         <ConstructorElement
//           text="Краторная булка N-200i (верх)"
//           price={50}
//           thumbnail={img}
//         />
//         <ConstructorElement
//           type="bottom"
//           isLocked={true}
//           text="Краторная булка N-200i (низ)"
//           price={200}
//           thumbnail={img}
//         />
//       </div>
//     )
//   }

// export default BurgerConstructor;
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import OrderDetails from "../orderDetails/orderDetails";
import { useDispatch } from "react-redux";
import { addToDo } from "../../service/actions/addTodo";

const BurgerConstructor = () => {
  // Функция dispatch теперь доступна из хука внутри компонента
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);
  const img = "https://code.s3.yandex.net/react/code/bun-02.png";
  const onSubmit = () => {
    console.log("33333");
    // Отправляем экшен, используя переменную из хука React.useState
    dispatch({ type: "ADD_TODO" });
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
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={img}
          />
        </div>
        <div className={styles.constScroll + " custom-scroll"}>
          <div className={styles.constScrollItem}>
            {" "}
            <DragIcon type="primary" />
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail={img}
            />
          </div>
          <div className={styles.constScrollItem}>
            {" "}
            <DragIcon type="primary" />
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail={img}
            />
          </div>
          <div className={styles.constScrollItem}>
            {" "}
            <DragIcon type="primary" />
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail={img}
            />
          </div>
          <div className={styles.constScrollItem}>
            {" "}
            <DragIcon type="primary" />
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail={img}
            />
          </div>
          <div className={styles.constScrollItem}>
            {" "}
            <DragIcon type="primary" />
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail={img}
            />
          </div>
          <div className={styles.constScrollItem}>
            {" "}
            <DragIcon type="primary" />
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail={img}
            />
          </div>
          <div className={styles.constScrollItem}>
            {" "}
            <DragIcon type="primary" />
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail={img}
            />
          </div>
        </div>
        <div>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail={img}
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
            onSubmit();
          }}
        >
          Оформить заказ
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
