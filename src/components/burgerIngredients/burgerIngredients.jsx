import styles from "./burgerIngredients.module.css";
import { data } from "../../utils/data";
import React from "react";
import Ingridient from "../ingredients/ingredients";
import Modal from "../modal/modal";
import { useState } from "react";
import IngredientDetales from "../ingridientDitails/ingridientDitalis";
import alling from "../../service/reducers"
import { useSelector, useDispatch } from "react-redux";
import {
  changeModalIng,
  changeSelectedVisible,
} from "../../service/actions/addTodo";
const DurgerIngredients = () => {


  const { allIng } = useSelector((store) => ({
    allIng: store.mainState.allIng,
  }));
  const { openModal, selectedModal } = useSelector((store) => ({
    openModal: store.mainState.modalIngredient,
    selectedModal: store.mainState.selectedModal,
  }));
  console.log(allIng)
  const bun = allIng.filter((item) => item.type === "bun");
  const sauce = allIng.filter((item) => item.type === "sauce");
  const main = allIng.filter((item) => item.type === "main");

   // Функция dispatch теперь доступна из хука внутри компонента
   const dispatch = useDispatch();
   const setOpenModal = (value) => {
     // Отправляем экшен, используя переменную из хука React.useState
     dispatch(changeModalIng(value.item));
     dispatch(changeSelectedVisible(value.item));
   };
  return (
    <section className={styles.product +" custom-scroll"}>
      <div>
      {openModal && (
        <Modal setState={setOpenModal} close={() => setOpenModal(null)}>
          <IngredientDetales item={
            openModal} />
          
        </Modal>
      )}
        <p className="text text_type_main-medium mt-10">Булки</p>
        <ul className={styles.durgerStylesList}>
          {bun.map((item) => (
            <Ingridient item={item} setOpenModal={setOpenModal}
           />
          ))}
   
        </ul>
      </div> 
      <div>
        <p className="text text_type_main-medium mt-10">Соусы</p>
        <ul className={styles.durgerStylesList}>
         
          {sauce.map((item) => (
            <Ingridient item={item} setOpenModal={setOpenModal}/>
          ))}
        
        </ul>
      </div>
      <div>
        <p className="text text_type_main-medium mt-10">Ингридиенты</p>
        <ul className={styles.durgerStylesList}>
         
          {main.map((item) => (
            <Ingridient item={item} setOpenModal={setOpenModal}/>
          ))}
 
        </ul>
      </div>
      {/* { openModal && ( 
      <Modal
        setOpenModal={setOpenModal}
        modalContent={<IngredientDetales item={props2.item}/>}
        />
      )} */}
      {/* const handaleOpen = () =>{
  setOpenModal(true)
} */}

    </section>

  );
};

export default DurgerIngredients;
