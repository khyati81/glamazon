import {BrowserRouter , Route , Routes} from "react-router-dom";
import Home  from './pages/Home'
import Contact  from './pages/Contact'
import Products from './pages/Products';
import Product from './pages/Product';
import Error from './pages/Error';
import Header from './components/Header';

import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';

function App() {
  const theme = {
    colors :{
      bg: "#000",
    }
  }
  return (
    <>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
       <GlobalStyle/>
       <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/product/:id' element={<Product/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    </>
  );
}

export default App;
