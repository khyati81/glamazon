import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Product = (currElem) => {
    const {id,title,medium_image_url,formatted_price,product_type_name} =currElem;
    // console.log(formatted_price)
    return(
        <Wrapper>

        <NavLink to={`/product/${id}`}>
            <div className='product--card'>
                <figure>
                    <img src={medium_image_url} alt="single-product-img"  />
                </figure>
           

            <div className="product--card-data">
                 <div className="product--card-data-flex">
                <h3>{title.split(' ')[0]} { product_type_name.toLowerCase()}</h3>
                <p className='product--card-data--price'>
                   {/* { <FormatPrice price ={formatted_price } />} */}
                  {formatted_price}
                   </p>
                </div>
            </div>
            </div>
        </NavLink>

        </Wrapper>
    )
}

const Wrapper = styled.section`
border:2px solid #003743;
border-radius:5rem;
// padding:2rem;

.product--card {
    //background-color: green;
    // border-radius: 1rem;
    .product--card-data {
        padding: 2rem 3rem 3rem 3rem;
    }
    // .product--card-data-flex{
    //   margin: 2rem 0;
    //   display: flex;
    //   justify-content: space-between;
    //   align-items: center;
     
    // }
    h3 {
      color: #003743;
    //   text-transform: capitalize;
    }
    .product--card-data--price {
      color: #003743;
    }
   
    }

    figure {
        background-color:white;
        border-radius: 5rem 5rem 0 0;
        width: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        overflow: hidden;
        transition: all 0.5s linear;
        border-bottom:2px solid  #003743;
        &::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 0%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          transition: all 0.2s linear;
          cursor: pointer;
          
        }
        &:hover::after {
          width: 100%;
        }
        &:hover img {
          transform: scale(1.2);
        }
        img {
          max-width: 90%;
          margin-top: 1.5rem;
          height: 20rem;
          transition: all 0.2s linear;
        }
       
      }
  }
`

export default Product