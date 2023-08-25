export const ADD_TODO = "ADD_TODO";

export const ADD_INGREDIENT = "ADD_INGREDIENT";

export const ALL_INGREDIENT = "ALL_INGREDIENT";

export const CHANGE_MODAL_VISIBLE = "CHANGE_MODAL_VISIBLE";
export const CHANGE_SELECTED_MODAL = "CHANGE_SELECTED_MODAL";

export const DELETE_INGRIDIENT = "DELETE_INGRIDIENT";


export const CHANGE_MODAL_ING = "CHANGE_MODAL_ING";

export const changeModalVisible = (hasVisible) => ({
  type: CHANGE_MODAL_VISIBLE,
  hasVisible: hasVisible,
});

export const changeModalIng = (hasIngVisible) => ({
  type: CHANGE_MODAL_ING,
  hasIngVisible: hasIngVisible,
});

export const changeSelectedVisible = ({
  _id,
  name,
  typeIng,
  proteins,
  fat,
  carbohydrates,
  calories,
  price,
  image,
  image_mobile,
  image_large,
}) => ({
  type: CHANGE_SELECTED_MODAL,
  id: _id,
  name: name,
  typeIng: typeIng,
  proteins: proteins,
  fat: fat,
  carbohydrates: carbohydrates,
  calories: calories,
  price: price,
  image: image,
  image_mobile: image_mobile,
  image_large: image_large,
});

export const addToDo = (text, expiresAt) => {
  type: ADD_TODO;
  text: text;
  expiresAt: expiresAt;
};

export const addIngridient = ({
  _id,
  name,
  typeIng,
  proteins,
  fat,
  carbohydrates,
  calories,
  price,
  image,
  image_mobile,
  image_large,
}) => ({
  type: ADD_INGREDIENT,
  id: _id,
  name: name,
  typeIng: typeIng,
  proteins: proteins,
  fat: fat,
  carbohydrates: carbohydrates,
  calories: calories,
  price: price,
  image: image,
  image_mobile: image_mobile,
  image_large: image_large,
});

export const deleteIngridient = (id) => ({
  type: DELETE_INGRIDIENT,
  id: id,
});


export const allIngridient = ({
  _id,
  name,
  typeIng,
  proteins,
  fat,
  carbohydrates,
  calories,
  price,
  image,
  image_mobile,
  image_large,
}) => ({
  type: ALL_INGREDIENT,
  id: _id,
  name: name,
  typeIng: typeIng,
  proteins: proteins,
  fat: fat,
  carbohydrates: carbohydrates,
  calories: calories,
  price: price,
  image: image,
  image_mobile: image_mobile,
  image_large: image_large,
});