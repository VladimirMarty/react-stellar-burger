import { combineReducers } from "redux";
import * as constant from "../actions/addTodo";
import { data } from "../../utils/data";
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
  {
    _id: "60666c42cc7b410027a1a9b8",
    name: "Соус фирменный Space Sauce",
    type: "sauce",
    proteins: 50,
    fat: 22,
    carbohydrates: 11,
    calories: 14,
    price: 80,
    image: "https://code.s3.yandex.net/react/code/sauce-04.png",
    image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/sauce-04-large.png",
    __v: 0,
  },
  {
    _id: "60666c42cc7b410027a1a9be",
    name: "Мини-салат Экзо-Плантаго",
    type: "main",
    proteins: 1,
    fat: 2,
    carbohydrates: 3,
    calories: 6,
    price: 4400,
    image: "https://code.s3.yandex.net/react/code/salad.png",
    image_mobile: "https://code.s3.yandex.net/react/code/salad-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/salad-large.png",
    __v: 0,
  },
  {
    _id: "60666c42cc7b410027a1a9be",
    name: "Мини-салат Экзо-Плантаго",
    type: "main",
    proteins: 1,
    fat: 2,
    carbohydrates: 3,
    calories: 6,
    price: 4400,
    image: "https://code.s3.yandex.net/react/code/salad.png",
    image_mobile: "https://code.s3.yandex.net/react/code/salad-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/salad-large.png",
    __v: 0,
  },

  {
    _id: "60666c42cc7b410027a1a9b7",
    name: "Соус Spicy-X",
    type: "sauce",
    proteins: 30,
    fat: 20,
    carbohydrates: 40,
    calories: 30,
    price: 90,
    image: "https://code.s3.yandex.net/react/code/sauce-02.png",
    image_mobile: "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/sauce-02-large.png",
    __v: 0,
  },
  {
    _id: "60666c42cc7b410027a1a9b7",
    name: "Соус Spicy-X",
    type: "sauce",
    proteins: 30,
    fat: 20,
    carbohydrates: 40,
    calories: 30,
    price: 90,
    image: "https://code.s3.yandex.net/react/code/sauce-02.png",
    image_mobile: "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/sauce-02-large.png",
    __v: 0,
  },
  {
    _id: "60666c42cc7b410027a1a9b7",
    name: "Соус Spicy-X",
    type: "sauce",
    proteins: 30,
    fat: 20,
    carbohydrates: 40,
    calories: 30,
    price: 90,
    image: "https://code.s3.yandex.net/react/code/sauce-02.png",
    image_mobile: "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/sauce-02-large.png",
    __v: 0,
  },
  {
    _id: "60666c42cc7b410027a1a9b7",
    name: "Соус Spicy-X",
    type: "sauce",
    proteins: 30,
    fat: 20,
    carbohydrates: 40,
    calories: 30,
    price: 90,
    image: "https://code.s3.yandex.net/react/code/sauce-02.png",
    image_mobile: "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/sauce-02-large.png",
    __v: 0,
  },
];

// Исходное состояние
export const initialStateMain = {
  allIng: data,
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

    // Добавление новой задачи в список дел
    case constant.DELETE_INGRIDIENT:
      return state.filter((ing) => ing.id !== action.id);

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

    case constant.CHANGE_MODAL_ING:
      return {
        ...state,

        modalIngredient: action.modalIngredient,
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
