import React, { useEffect, useContext, useReducer,createContext } from 'react'
import reducer from '../reducers/cart_reducer'
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from '../actions'
import { type } from '@testing-library/user-event/dist/type'
import { AddToCart } from '../components'

const initialState = {
    cart:[],
    total_items:0,
    total_amount:0,
    shipping_amount:535
}

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [state,dispatch]= useReducer(reducer,initialState);
  const addToCart = ({id,color,amount,product})=>{
    dispatch({
      type:ADD_TO_CART,
      payload:{id,color,amount,product}
    });
  }
  return (
    <CartContext.Provider value={{...state,addToCart}}>{children}</CartContext.Provider>
  )
}
// make sure use
export const useCartContext = () => {
  return useContext(CartContext)
}
