import React, { useState } from 'react'
import { Button } from './Button'
import { useFilterContext } from '../context/filter_context';
import Product from "./Product"
import styled from 'styled-components';
import { useProductContext } from '../context/productcontext';
import Loading from './Loading';

const ProductList = () => {

  const {filterProducts} = useFilterContext();
  const {isLoading} = useProductContext();
  console.log(isLoading)
  const [currentPage,setCurrentPage] = useState(1);
  // eslint-disable-next-line
  const [itemsPerPage,setItemsPerPage] = useState(16);
   
// eslint-disable-next-line
  const [pageNumberLimit,setPageNumberLimit] = useState(5);
  
  const [minPageNumberLimit,setminPageNumberLimit] = useState(0);
  const [maxPageNumberLimit,setMaxPageNumberLimit] = useState(5);
  

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id))
  }

  const pages = [];
  for(let i=1; i<= Math.ceil(filterProducts.length/itemsPerPage);i++){
    pages.push(i);
  }

  const indexOfLastItem = currentPage*itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filterProducts.slice(indexOfFirstItem,indexOfLastItem)

  const renderPageNumbers = pages.map((number) => {
    if(number < maxPageNumberLimit+1 && number>minPageNumberLimit){
      return (
        <li key={number} id={number} 
        onClick={handleClick} 
        className={currentPage===number? "active":null}>
          {number}
        </li>
      )
    }else{
      return null;
    }

    
  })

  const handleNextBtn =() =>{
    setCurrentPage(currentPage+1);

    if(currentPage+1 > maxPageNumberLimit){
      setMaxPageNumberLimit(maxPageNumberLimit+pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit+pageNumberLimit);
    }
    window.scrollTo({top: 0, left: 0});
  }
  const handlePrevBtn =() =>{
    setCurrentPage(currentPage - 1);

    if((currentPage - 1 )%pageNumberLimit ===0){
      setMaxPageNumberLimit(maxPageNumberLimit-pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit-pageNumberLimit);
    }
    window.scrollTo({top: 0, left: 0 });
  }

  let pageIncrementBtn = null;
  if(pages.length>maxPageNumberLimit){
    pageIncrementBtn = <li onClick={handleNextBtn} >&hellip;</li>
  }

  let pageDecrementBtn = null;
  if(minPageNumberLimit>=1){
    pageDecrementBtn = <li onClick={handlePrevBtn} >&hellip;</li>
  }

  if(isLoading){
    return <Loading/>
}
    
  return (
    <Wrapper>
        
    <div >
        <div className='flex3'>
        
        {
          currentItems.map((currElem) => {
              return  <Product key={currElem.id} {...currElem} className='recommend'></Product>
          })
        }
          
        </div>
        <div className='page--numbers--container'>
            
            <ul  className='page--numbers'>
              <li><Button onClick={handlePrevBtn}
              disabled={currentPage===pages[0]?true:false}
              >PREV</Button></li>
              {pageDecrementBtn}
              {renderPageNumbers}
              {pageIncrementBtn}
              <li><Button onClick={handleNextBtn}
              disabled={currentPage===pages[pages.length-1]?true:false}
              >NEXT</Button></li>
            </ul>
          </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 9rem 0;
  // background-color: #e6e6e6;
  .flex3{
    display: grid;
    grid-template-columns:1fr 1fr 1fr 1fr;
    gap:5rem;

  }
  .page--numbers--container{
    display:flex;
    list-style:none;
    justify-content:center;
    margin-top:3rem;
  }
  .page--numbers{
    display:flex;
    list-style:none;
    justify-content:center;
    align-items:center;
    margin-top:3rem;
    li{
      padding:5px 10px;
      font-size:2rem;
    }
    .active{
      background-color:#003743;
      color:white;
      border-radius:50%;
      padding:1rem;
    }

  }
 
`;

export default ProductList