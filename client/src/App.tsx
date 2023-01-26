import { Routes, Route } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import ProductsPage from './Pages/ProductsPage';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      <Routes>
        <Route path='/products/:id' element={<ProductsPage />} />
      </Routes>
    </>
  );
}

export default App;
