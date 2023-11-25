import logo from './logo.svg';
import './App.css';
import Home from './Component/Pages/Home';
import { Route, Routes } from 'react-router-dom';
import AddUser from './Component/Pages/AddUser';
import Header from './Component/Pages/Header';
import UpdateUser from './Component/Pages/UpdateUser';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/add-user' element={<AddUser></AddUser>}></Route>
        <Route path='/update-user/:id' element={<UpdateUser></UpdateUser>}></Route>
      </Routes>
    </div>
  );
}

export default App;
