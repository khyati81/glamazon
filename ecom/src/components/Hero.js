import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import {Button} from './Button'

const Hero = () => {
 

  return (
    <Wrapper>
        <div className='container'>
            <div className='flex'>
                <div className="hero-section-data">
                    <h1>Let your <span>style </span></h1>
                    <h1> make the <span>statement</span></h1>
                    <p>Get recommendations easily on your styles</p>
                    <NavLink to="/products">
                        <Button>
                            Show now
                        </Button>
                    </NavLink>
                </div>
                <div className="hero-section-image">
                    <figure>
                        <img src="images/hero.png" alt="hero-section-img" className='img-style' />
                    </figure>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: #FFEEE3;
  padding: 8rem 0;
  img {
    min-width: 50rem;
    max-width: 50rem;
    height: 15rem;
    margin-left:2rem;
  }
  .hero-section-data {
    h1 {
      font-weight: 700;
      font-size: 64px;
      line-height: 120%;
      color:#003743;
      margin-bottom:1rem;
    }
    h1 span{
      color:#B62551;
      text-decoration: underline;
    }
    p {
      margin: 3rem 0;
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      color:#003743;
      line-height: 120%;
    }
    Button{
      background-color: #003743;
    }
   
  }
  .hero-section-image {
    width: 50%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin:0;
  }
  
  .img-style {
    width: 100%;
    height: auto;
  }

 
  }
`;

export default Hero

