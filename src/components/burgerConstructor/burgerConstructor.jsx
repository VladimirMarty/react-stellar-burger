import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burgerConstructor.module.css";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
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
const BurgerConstructor = () => {
    const img = "https://code.s3.yandex.net/react/code/bun-02.png";
    return (
     <div>
       <div className={styles.constItems} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div>

        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          thumbnail={img}
          />
          </div>
        <div className={styles.constScroll}>
       <div  className={styles.constScrollItem}> <DragIcon type="primary" />
        <ConstructorElement
          text="Краторная булка N-200i (верх)"
          price={50}
          thumbnail={img}
        />
        </div>
       <div  className={styles.constScrollItem}> <DragIcon type="primary" />
        <ConstructorElement
          text="Краторная булка N-200i (верх)"
          price={50}
          thumbnail={img}
        />
        </div>
       <div  className={styles.constScrollItem}> <DragIcon type="primary" />
        <ConstructorElement
          text="Краторная булка N-200i (верх)"
          price={50}
          thumbnail={img}
        />
        </div>
       <div  className={styles.constScrollItem}> <DragIcon type="primary" />
        <ConstructorElement
          text="Краторная булка N-200i (верх)"
          price={50}
          thumbnail={img}
        />
        </div>
       <div  className={styles.constScrollItem}> <DragIcon type="primary" />
        <ConstructorElement
          text="Краторная булка N-200i (верх)"
          price={50}
          thumbnail={img}
        />
        </div>
       <div  className={styles.constScrollItem}> <DragIcon type="primary" />
        <ConstructorElement
          text="Краторная булка N-200i (верх)"
          price={50}
          thumbnail={img}
        />
        </div>
       <div  className={styles.constScrollItem}> <DragIcon type="primary" />
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
      <Button htmlType="button" type="primary" size="large">
  Оформить заказ
</Button>
      </div>
    )
  }
export default BurgerConstructor;