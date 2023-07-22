function OrderDetails(orderNumber) {
  const orderNumber = "034536";
  return (
    <form>
      <div>
        <h1>{orderNumber}</h1>
        <p>идентификатор заказа</p>
        <img alt="Заказ подтверждён" />
        <p>Ваш заказ начали готовить</p>
        <p>Дождитесь готовности на орбитальной станции</p>
      </div>
    </form>
  );
}

export default OrderDetails;
