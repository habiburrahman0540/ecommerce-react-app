import React, { useEffect, useContext, useReducer,createContext } from 'react'
import reducer from '../reducers/filter_reducer'
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'
import { useProductsContext } from './products_context'
import { type } from '@testing-library/user-event/dist/type'

const initialState = {
  filtered_products:[],
  all_products:[],
  grid_view:true,
  sort:'price-lowest'
}

const FilterContext = createContext()

export const FilterProvider = ({ children }) => {
  const [state,dispatch]=useReducer(reducer,initialState);
  const {products}=useProductsContext();
useEffect(()=>{
  dispatch({
    type:LOAD_PRODUCTS,
    payload:products
  })
},[products]);
useEffect(()=>{
  dispatch({
    type:SORT_PRODUCTS
  });
},[products,state.sort]);
const setGridViewButton = ()=>{
  dispatch({
    type:SET_GRIDVIEW
  })
}
const setListViewButton = ()=>{
  dispatch({
    type:SET_LISTVIEW
  })
}
const updateSort =(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    dispatch({
      type:UPDATE_SORT,
      payload:value
    });
}
  return (
    <FilterContext.Provider value={{...state,setGridViewButton,setListViewButton,updateSort}}>
      {children}
    </FilterContext.Provider>
  )
}
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext)
}
