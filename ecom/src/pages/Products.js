import styled from "styled-components"
import Sort from "../components/Sort"
import ProductList from "../components/ProductList"

const Products = () => {
 
  return (
    <Wrapper>
      <div className="container grid ">
        <section className="product-view--sort">
          <div className="sort-filter">
            <Sort />
          </div>

          <div className="main-product">
            <ProductList  />
          </div>
        </section>
      </div>
    </Wrapper>
  )
}



const Wrapper = styled.section `
  background-color:#FFEEE3;
`

export default Products;