import React from 'react'
import styled from 'styled-components';
import { useFilterContext } from '../context/filter_context';

const Sort = () => {
  const { filterProducts ,sorting} = useFilterContext();
  return (
    <Wrapper className="sorting-list-grid">
       <div className="product-data">
        <p>{`${filterProducts.length} Product Available`}</p>
      </div>

      <div className="sort-selection">
        <form action="#">
          <label htmlFor="sort"></label>
          <select
            name="sort"
            id="sort"
            className="sort-selection--style"
            onClick={sorting}
            >
            <option value="a-z">Product(a-z)</option>
            <option value="#" disabled></option>
            <option value="z-a">Product(z-a)</option>
            <option value="#" disabled></option>
            <option value="lowest">Price(lowest)</option>
            <option value="#" disabled></option>
            <option value="highest">Price(highest)</option>
           
          </select>
        </form>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  
  .sorting-list-grid {
    display: flex;
    gap: 2rem;
     }
  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;
    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }
`;

export default Sort