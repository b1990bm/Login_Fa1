import React,{useEffect,createContext,useReducer} from 'react';
import axios from "axios";
import { reducer } from '../reducer/reducerProducts';
export const productsContext=createContext();

const initialState = {
    isloading:true,
    date:[]
}

const ContextProvaider = ({children}) => {
    const [dateState,dispatch]=useReducer(reducer,initialState)
    
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then(response =>{
            dispatch({type:"success",payload:response.data})
        })
        .catch(error=>{
            dispatch({type:"error"})                
        })
        
    },[])

    return (
        <productsContext.Provider value={dateState}>
            {children}
        </productsContext.Provider>
    );
};

export default ContextProvaider;


