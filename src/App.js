
// import './App.css';
import { useEffect } from 'react';
import product from './api/product';
import TodoFeature from './features/Todo';

function App() {
  useEffect(() => {
    const getProducts = async () => {
      const productList = await product.getAll();
      console.log(productList);
    }
    getProducts();
  }, [])
  return (
    <div className="App">
      <TodoFeature />
    </div>
  );
}

export default App;
