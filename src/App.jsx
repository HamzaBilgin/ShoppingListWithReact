
import './App.css';
import AddProduct from './components/ShoppingCart/AddProduct';
import { useState } from "react";
function App() {
  const [productList, setProductList] = useState([]);
  console.log(productList)
  const onSaveProduct = (newProduct) => {
    setProductList((prevState) => [newProduct, ...prevState]);
  };
  return (
    <div>
      <AddProduct productList={productList} setProductList={setProductList} onSaveProduct = {onSaveProduct}/>
    </div>
  );
}

export default App;
