import React from 'react'
import styled from 'styled-components';
import {Button} from "../components/Button"

const Contact = () => {
  return (
    <Wrapper>
      <div className='container'>
       
          <div className='image--content'>
            <div>
              <img src="images/contact.png" alt="contact" />
            </div>
            <div>
              <h1>We’d love to hear from <span>you </span> </h1>
              <p>Whether you have a question about feature, trials,pricing, need a demo,or anything else,out team is ready to answer all the questions.Don’t be shy - we promise we’re really nice.</p>
            </div>
          </div>

          <div className='form--container'>
            <form>
              <h2 style={{color:'#003743'}}>Drop us a line</h2>
              <div className='input--box'>
                <p>Name</p>
                <input/>
              </div>
              <div className='input--box'>
                <p>Email</p>
                <input/>
              </div>
              <div className='input--box'>
                <p>Contact</p>
                <input/>
              </div>
              <div className='input--box'>
                <p>Message</p>
                <input/>
              </div>
              <Button >Submit</Button>
            </form>
          </div>
       

      </div>
    </Wrapper>
  )
}


const Wrapper = styled.section`
background-color: #FFEEE3;
// text-align:center;
  .container {
    padding: 3rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
  }
  .image--content{
    // text-align:center;
    color:#003743;
    display: flex;
    align-items: center;
    justify-content: center;
    
  }
  .image--content h3{
    margin-top:2rem;
    margin-bottom:5rem;
  }
 
  img{
    margin-bottom:1rem;
    
  }

  .form--container{
    margin-left: 10rem;
    border: 2px solid #003743;
    padding:5rem;
    border-radius:5rem;

  }
  input{
    max-width: 120rem;
    min-width: 70rem;
    padding: 1.6rem 2.4rem;
    border: 2px solid #003743;
    text-transform: uppercase;
  }
  .input--box{
    margin-bottom:2rem;
  }
  .input--box input{
    background: #FFEEE3;
    // border: 2px solid #003743;
  }
  p{
    margin-top:2rem;
  }
  h1 span{
    color:#B62551;
    text-decoration: underline;
  }
  
 
`;

export default Contact