import React from 'react'
import Hero from "./../components/Hero"
import styled from 'styled-components'

const Home = () => {
 
  return (
    <>
    <Hero/>

    <Wrapper>
      <div className='background--poster products--poster'>
        <div className='main--container'>
          <div className='margin--title--container'>
            <span>A NEW SHOPPING</span>
          </div>
          <div>
            <span>EXPERIENCE</span>
          </div>
         
          <div className='product--list--container'>
            <div>
              <ul>
                <li>SHIRT</li>
                <li>SKIRT</li>
                <li>DRESS</li>
                <li>ETHNIC WEAR</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>PANTS</li>
                <li>BLAZER</li>
                <li>SWEATER</li>
                <li>SLEEPWEAR</li>
              </ul>
            </div>
          </div>

        </div>
      </div>

    </Wrapper>

    <Wrapper>
      <div className='background--poster discount--poster'>
      <div className='main--container--discount'>
      <div className="hero-section-data">
                    <h1>Keep your  <span>coupons </span> close..</h1>
                    <h1> Keep your <span>couponing friends</span> even closer</h1>
                    <p>Get upto 20% off</p>
                </div>
      </div>
      </div>
    </Wrapper>


    </>
  )
}
const Wrapper = styled.section`

  .background--poster{
    background-size: cover;
    height: 100vh;
    font-size:50px;
    background-repeat:no-repeat; 
  }
  .products--poster{
    background-image: url("images/backgd.png");
  }
  .discount--poster{
    background-color:#FFEEE3;
    background-image: url("images/backgd2.png");
  }
  .main--container{
    position: absolute;
      width: 674px;
      height: 192px;
      left: 99px;
      top: 1046px;
    
    .margin--title--container{
      margin-bottom: 2rem;
    }
    span{
      font-style: normal;
      font-weight: 300;
      font-size: 70px;
      line-height: 48%;
      color: white;
      background-color: black;
      opacity: 0.8;
    }
    .product--list--container{
      display: flex;
      justify-content: flex-start;
      align-items: center;

    }
    .product--list--container div{
      margin:2rem 3rem 0 0;
    }
    li{
      margin-bottom:0.5rem;
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 27px;
      color: #E5E5E5;
    }
 
  }
  .main--container--discount{
    position: absolute;
    width: 397px;
    height: 415px;
    left: 74px;
    top: 1644px;


  }

  .hero-section-data {
    h1 {
      font-weight: 700;
      font-size: 64px;
      line-height: 102%;
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
`

export default Home