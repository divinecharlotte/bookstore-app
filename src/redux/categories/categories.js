const CHECK_CATEGORY = 'bookstore-app/categories/CHECK STATUS';
const initialState = [{
  id: 1,
  author: 'Robert',
  title: 'rich dad',
},
{
  id: 2,
  author: 'kiosaki',
  title: 'poor dad',
},
{
  id: 3,
  author: 'parker',
  title: 'The secret',
},
{
  id: 4,
  author: 'Divine ',
  title: 'the secret of life',
},
];
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
