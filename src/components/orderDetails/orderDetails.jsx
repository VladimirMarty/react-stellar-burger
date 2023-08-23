import styles from "./orderDetails.module.css";
import { useSelector, useDispatch } from "react-redux";
function OrderDetails({orderNumber}) {
  const orderNumbers = orderNumber;


  return (
    <form className={styles.form}>
      <div>
        <h1 className="text text_type_digits-large mb-8">{orderNumbers}</h1>
        <p className="text text_type_main-medium mb-15" >идентификатор заказа</p>
        <img  alt="Заказ подтверждён" />
        <p className="text text_type_main-small mt-15">Ваш заказ начали готовить</p>
        <p className="text text_type_main-default text_color_inactive mt-1">Дождитесь готовности на орбитальной станции</p>
      </div>
    </form>
  );
}

export default OrderDetails;
