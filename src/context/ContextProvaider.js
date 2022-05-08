import React,{useState,useEffect,createContext} from 'react';
import axios from "axios";
export const productsContext=createContext();

const ContextProvaider = ({children}) => {
    const [date,setDate]=useState([]);
    const getProducts=async()=>{
        const res=await axios.get("https://fakestoreapi.com/products")
        return res.data
    }

    useEffect(()=>{
        const fetchApi=async () =>{
            setDate(await getProducts())
        }
        fetchApi();
    },[])

    return (
        <productsContext.Provider value={date}>
            {children}
        </productsContext.Provider>
    );
};

export default ContextProvaider;


