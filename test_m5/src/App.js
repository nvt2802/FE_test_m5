import logo from './logo.svg';
import './App.css';
import Table from './component/Table';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EditProduct from './component/EditProduct';
import CreationProduct from './component/CreationProduct';

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Table/>}/>
        <Route path='/edit/:id' element={<EditProduct/>}/>
        <Route path='/add' element={<CreationProduct/>}/>
      </Routes>
      
      </BrowserRouter>
  );
}

export default App;
