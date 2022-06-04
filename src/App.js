
import './App.css';
import { Navbar } from './comonents/Navbar';
import { Home } from './comonents/Home';
import { Products } from './comonents/Products';
import { About } from './comonents/About';
import{Route, Router,Routes} from "react-router-dom"
import { Product } from './comonents/Product';
import { PagenotFound } from './comonents/PagenotFound';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="products/*" element={<Products/>}>
      <Route path=":id" element={<Product/>}/>
      </Route>
      <Route path="*" element={<PagenotFound/>} />
      </Routes>
     
    </div>
  );
}

export default App;
