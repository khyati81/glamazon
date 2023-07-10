// create a context
//provider
//consumer => useContext Hook
import axios from "axios";
import { useEffect, useReducer,createContext, useContext  } from "react";
import reducer from "../reducer/productReducer"

const AppContext = createContext();
const API = "/clothing";

const initialState = {
    isLoading:false,
    isError:false,
    products:[],
    featureProducts:[],
    isSingleLoading :false,
    singleProduct:{},
}

const AppProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer,initialState);

    
    const getProducts = async(url) =>{
        dispatch({type:"SET_LOADING"});
        try {
            const res = await axios.get(url);
            // console.log(res);
            const products =await res.data;
            // console.log(products);
            dispatch({type:"SET_API_DATA",payload:products});
        } catch (error) {
            dispatch({type:"API_ERROR"});
        }
    }

    //single product call
    const getSingleProduct = async(url) =>{
        dispatch({type:"SET_SINGLE_LOADING"});
        try {
            const res = await axios.get(url);
            const singleProduct =await res.data;
            dispatch({type:"SET_SINGLE_PRODUCT",payload:singleProduct});
            
        } catch (error) {
            dispatch({type:"API_SINGLE_ERROR"});
        }

    } 



    useEffect(() => {
        getProducts(API);
    }, []);
    

    return (
    <AppContext.Provider value={{...state,getSingleProduct}}>
        {children}
    </AppContext.Provider>
    )
};

// custom hook

const useProductContext =()=>{
    return useContext(AppContext);
};

export {AppProvider,AppContext,useProductContext};

