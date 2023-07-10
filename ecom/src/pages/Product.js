import React, { useEffect ,useState} from 'react'
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useProductContext } from '../context/productcontext';
import {Button} from '../components/Button'
import Products from '../components/Product'
import Loading from '../components/Loading';

const API = '/clothing'

const Product = () => {
  const [isLoading, setIsloading] = useState(false);
  const [result, setResult] = useState([]);
  const {getSingleProduct , isSingleLoading , singleProduct,products} = useProductContext();
  const {id} = useParams();
  const { 
    brand,
    color,
    product_type_name,
    medium_image_url,
    title,
    asin,
    formatted_price,
  }= singleProduct; 

  useEffect( () => {
    getSingleProduct(`${API}/${id}`);
    // eslint-disable-next-line
  },[])

  

  if(isSingleLoading){
    return <>
    <Loading/>
    </>
  }

  const btnRecommend = (event) =>{
    console.log(asin);
   
    const url = "http://127.0.0.1:5000/";

    setIsloading(true);
    fetch(url,
      {
          headers: {
          // 'Accept': 'application/json',
          'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify(asin)
      })  
      .then(response => response.json())
      .then(response => {
        // console.log(response.similar)
        const similarArr=Object.values(response.similar); 
        // console.log( typeof similarArr) 
        setResult(similarArr);
        setIsloading(false);
      });
  }

  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="product_images">
            <img src={medium_image_url} alt="all-products-img" className='imgProduct'/>
          </div>

          <div className="product-data">
            <h2>{title}</h2>
            <p>Product type: {product_type_name}</p>
            <p>Brand: {brand}</p>
            <p>Color: {color}</p>
            <p className="product-data-price">
              
              <p className="product-data-real-price">
                
              MRP:{formatted_price}  &nbsp;
              </p>
            </p>
          
              <Button onClick={btnRecommend}>More like this</Button>
              </div>
                  
        </div>
        {
          isLoading=== true ? <Loading/> :null
        }
              <div className='recommend grid grid-three-column'>
              {
              
                products.filter(currElem => 
                  result.includes(currElem.asin))
                  .map(currElem => 
                  <Products key={currElem.id} {...currElem}></Products>
                )
               
            }
         
              </div>
          
      
      </div>
    </Wrapper> 
  )
}

const Wrapper = styled.section`
background-color:#FFEEE3;
// max-height:100rem;
min-height:87vh;
  .container {
    padding: 9rem 0;
  }
  .grid {
    display: grid;
    gap: 9rem;
  }
  .grid-two-column{
    grid-template-columns: 1fr 1fr;
  }
  
  .product_images {
    display: flex;
    align-items: center;
    justify-content:center;
    background: white;
    border:3px solid #003743;
    border-radius:5rem;
  }
  .imgProduct {
    width:250px;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;
    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;
      .product-warranty-data {
        text-align: center;
      
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }
    .product-data-price {
      
      display:flex;
    }
    
    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
   
  }
  .recommend{
    border-radius:2px solid black;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 5rem;
  }


 
`;



export default Product