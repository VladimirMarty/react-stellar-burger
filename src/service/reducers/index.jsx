import { combineReducers } from "redux";
import * as constant from "../actions/addTodo";

// Исходное состояние
export const initialState = [
  {
    id: 0,
    completed: false,
    expiresAt: "08.04.20201",
    text: "Купить авокадо 4 шт.",
  },
];

// Исходное состояние
export const initialStateIngridients = [
  {
    id: "60666c42cc7b410027a1a9b1",
    name: "Краторная булка N-200i",
    typeIng: "bun",
    proteins: 80,
    fat: 24,
    carbohydrates: 53,
    calories: 420,
    price: 1255,
    image: "https://code.s3.yandex.net/react/code/bun-02.png",
    image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
  },
];

// Исходное состояние
export const initialStateMain = {
  hasVisible: false,
  selectedModal: null,
};

// Редьюсер
const todoList = (state = initialState, action) => {
  switch (action.type) {
    // Добавление новой задачи в список дел
    case constant.ADD_TODO:
      return [
        ...state,
        {
          id: 1,
          text: action.text,
          expiresAt: action.expiresAt,
          completed: false,
        },
      ];

    // Реакция на прочие типы экшенов
    default:
      return state;
  }
};
// Редьюсер
const ingredientsList = (state = initialStateIngridients, action) => {
  switch (action.type) {
    // Добавление новой задачи в список дел
    case constant.ADD_INGREDIENT:
      return [
        ...state,
        {
          ...action,
        },
      ];

    // Реакция на прочие типы экшенов
    default:
      return state;
  }
};

// Редьюсер
const mainState = (state = initialStateMain, action) => {
  switch (action.type) {
    // Добавление новой задачи в список дел
    case constant.CHANGE_MODAL_VISIBLE:
      return {
        ...state,

        hasVisible: action.hasVisible,
      };

    case constant.CHANGE_SELECTED_MODAL:
      return {
        ...state,

        selectedModal: { ...action },
      };

    // Реакция на прочие типы экшенов
    default:
      return state;
  }
};

// Корневой редьюсер
export const rootReducer = combineReducers({
  todoList,
  ingredientsList,
  mainState,
});
