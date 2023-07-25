import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";

function Tabs() {
  const [current, setCurrent] = React.useState("bun");

  return (
    <div style={{ display: "flex" }}>
      <Tab value="bun" active={current === "bun"} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="sauce" active={current === "sauce"} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="main" active={current === "main"} onClick={setCurrent}>
        Ингридиенты
      </Tab>
    </div>
  );
}
export default Tabs;
