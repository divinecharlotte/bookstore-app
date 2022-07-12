import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkAction } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const UpdateCategoryStatus = () => dispatch(checkAction());
  const CategoriesStatus = useSelector((state) => state.CategoriesReducer);
  return (
    <div>
      {CategoriesStatus.map((status) => <h1 key={status}>{status}</h1>)}
      <button type="button" onClick={UpdateCategoryStatus}>Check Status </button>
    </div>
  );
};

export default Categories;
