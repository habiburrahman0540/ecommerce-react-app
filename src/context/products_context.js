import axios from 'axios'
import React, { useContext, useEffect, useReducer,createContext } from 'react'
import reducer from '../reducers/products_reducer'
import { products_url as url } from '../utils/constants'
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'
import { type } from '@testing-library/user-event/dist/type'

const initialState = {
  isSidebarOpen:false,
  products_loading:false,
  products_error:false,
  products:[],
  featured_products:[],
}

const ProductsContext = createContext()

export const ProductsProvider = ({ children }) => {
  const [state,dispatch] = useReducer(reducer,initialState);
  const openSidebar =()=>{
    dispatch({
      type:SIDEBAR_OPEN
    })
  }
 const closeSidebar =()=>{
  dispatch({
    type:SIDEBAR_CLOSE
  })
 }
 const fetchProducts = async(url)=>{
  dispatch({
    type:GET_PRODUCTS_BEGIN
  });
  try {
    
    const response =await axios.get(url,{ crossdomain: true });
      const products = response.data;
      dispatch({type:GET_PRODUCTS_SUCCESS,payload:products})
      console.log(response)
  } catch (error) {
    dispatch({type:GET_PRODUCTS_ERROR});
  }
      
     
 }
 useEffect(()=>{
    fetchProducts(url)
 },[url]);
  return (
    <ProductsContext.Provider value={{...state,openSidebar,closeSidebar}}>
      {children}
    </ProductsContext.Provider>
  )
}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}
