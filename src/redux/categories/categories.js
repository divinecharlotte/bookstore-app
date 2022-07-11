const CHECK_CATEGORY = 'bookstore-app/categories/CHECK STATUS';
const initialState = [];
const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_CATEGORY:
      return ['Under construction'];
    default:
      return state;
  }
};
export const checkAction = () => ({
  type: CHECK_CATEGORY,
});

export default categoriesReducer;
