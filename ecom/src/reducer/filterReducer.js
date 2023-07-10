const FilterReducer = (state,action) => {
    switch (action.type){ 
        case "SET_LOADING":
            return {
                ...state,
                isLoading:true,
            };

        case "LOAD_FILTER_PRODUCTS":
            return{
                ...state,
                isLoading:false,
                filterProducts: [...action.payload],
                all_products:[...action.payload],
            }
        
        case "GET_SORT_VALUE":
            return{
                ...state,
                sortingValue: action.payload,
            }

        case "SORTING_PRODUCTS":
            let newSortData ;
            
            const {filterProducts} = state;
            let tempSortProduct = [...filterProducts];



            if(state.sortingValue === "lowest"){
                
                const sortingProducts = (a,b) =>{
                    
                    return Number(a.formatted_price.substring(1)) - Number(b.formatted_price.substring(1));
                }
                newSortData = tempSortProduct.sort(sortingProducts);
            }

            if(state.sortingValue === "highest"){
                const sortingProducts = (a,b) =>{
                    return Number(b.formatted_price.substring(1)) - Number(a.formatted_price.substring(1));

                }
                newSortData = tempSortProduct.sort(sortingProducts);
            }

            if(state.sortingValue === "a-z"){
                newSortData = tempSortProduct.sort((a,b)=>{
                    return a.title.localeCompare(b.title)
                });
            }

            if(state.sortingValue === "z-a"){
                newSortData = tempSortProduct.sort((a,b)=>{
                    return b.title.localeCompare(a.title)
                });
            }

            return{
                ...state,
                filterProducts:newSortData,
            }


                
        
        default:
            return state;
    }
};


export default FilterReducer;




