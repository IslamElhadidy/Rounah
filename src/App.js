import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/reusable/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/reusable/Navbar";
import SpecialProduct from "./components/Home/SpecialProduct";
import './index.css'
import Products from "./components/Products/Products";
import Aboutus from "./components/Aboutus/Aboutus";
import Articles from "./components/ourarticle/Articles";
import ArticleDetails from "./components/ourarticle/ArticleDetails";
import Clients from "./components/customers/Clients";
import Contact from "./components/contactus/Contact";
import ClientProduct from "./components/customers/ClientProductOne";
import ClientProductTwo from "./components/customers/ClientProductTwo";



function App() {
  return (
        <BrowserRouter>
              <div className="App">
                <Navbar />
                <Routes>
                  <Route path='/'  element={<Home />}/>  
                  <Route path='/specialproduct'  element={<SpecialProduct />}/>  
                  <Route path='/products'  element={<Products />}/>  
                  <Route path='/about'  element={<Aboutus />}/>  
                  <Route path='/articles'  element={<Articles />}/>  
                  <Route path='/article/:id'  element={<ArticleDetails />}/>  
                  <Route path='/clients'  element={<Clients />}/>  
                  <Route path='/clientproduct/:id'  element={<ClientProduct />}/>  
                  <Route path='/clientproduct/2'  element={<ClientProductTwo />}/>  
                  <Route path='/contactus'  element={<Contact />}/>  
                </Routes>
                <Footer/>
              </div>
        </BrowserRouter>
  );
}

export default App;
