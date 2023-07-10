import { useEffect, useReducer,createContext, useContext  } from "react";
import reducer from "../reducer/filterReducer"
import {useProductContext} from "./productcontext"

const FilterContext = createContext();

const initialState = {
    filterProducts:[],
    all_products:[],
    sortingValue:"",
    filters :{
        text:"",
        category: "all",
        color: "all",
    }
}


 export const FilterContextProvider = ({children}) =>{
    const {products} = useProductContext();

    const [state,dispatch] = useReducer(reducer,initialState);

    //  sorting function 
    const sorting = (event) =>{
        let userValue = event.target.value;
        dispatch({type:"GET_SORT_VALUE",payload:userValue});
    }

    //update the filter values
    const updateFilterValue = (event) =>{
        let name = event.target.name;
        let value = event.target.value;

        return dispatch({type :"UPDATE_FILTERS_VALUE",payload:{name,value}});
    }

    //sort the products
    useEffect(()=>{
        dispatch({type:"FILTER_PRODUCTS"});
        dispatch({type:"SORTING_PRODUCTS",payload:products})
    },[products , state.sortingValue])


    useEffect(() => {
        // console.log("start");
        dispatch({type:"SET_LOADING"});
        dispatch({type:"LOAD_FILTER_PRODUCTS",payload:products})
    }, [products]);

    return (<FilterContext.Provider value={{...state,sorting,updateFilterValue}}>
        {children}
    </FilterContext.Provider>
    );
 };

 export const useFilterContext = () =>{
    return useContext(FilterContext);
 }