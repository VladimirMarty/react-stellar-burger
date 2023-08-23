import styles from "./burgerIngredients.module.css";
import { data } from "../../utils/data";
import React from "react";
import Ingridient from "../ingredients/ingredients";
import Modal from "../modal/modal";
import { useState } from "react";
import IngredientDetales from "../ingridientDitails/ingridientDitalis";
import alling from "../../service/reducers"
import { useSelector } from "react-redux";
const DurgerIngredients = () => {


  const { allIng } = useSelector((store) => ({
    allIng: store.mainState.allIng,
  }));
  console.log(allIng)
  const bun = allIng.filter((item) => item.type === "bun");
  const sauce = allIng.filter((item) => item.type === "sauce");
  const main = allIng.filter((item) => item.type === "main");

  return (
    <section className={styles.product +" custom-scroll"}>
      <div>
        <p className="text text_type_main-medium mt-10">Булки</p>
        <ul className={styles.durgerStylesList}>
          {bun.map((item) => (
            <Ingridient item={item}
           />
          ))}
   
        </ul>
      </div> 
      <div>
        <p className="text text_type_main-medium mt-10">Соусы</p>
        <ul className={styles.durgerStylesList}>
         
          {sauce.map((item) => (
            <Ingridient item={item} />
          ))}
        
        </ul>
      </div>
      <div>
        <p className="text text_type_main-medium mt-10">Ингридиенты</p>
        <ul className={styles.durgerStylesList}>
         
          {main.map((item) => (
            <Ingridient item={item} />
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
