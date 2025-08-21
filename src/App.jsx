import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AuthLayout from './components/AuthLayout/AuthLayout'
import { ToastContainer } from 'react-toastify'
import LoginLayout from './components/LoginLayout/LoginLayout'
import HomePage from './components/HomePage/HomePage'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyAcc from './components/MyAccount/MyAcc'
import MyCart from './components/Cart/MyCart'
import WishList from './components/WishList/WishList'



function App() {


  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<AuthLayout />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginLayout />} />
          <Route path="/signup" element={<AuthLayout />} />
          <Route path='/myacc' element={<MyAcc />} />
          <Route path='/cart' element={<MyCart />} />
          <Route path='/wishlist' element={<WishList />} />

        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
          theme="light"
        />
      </BrowserRouter>



    </>
  )
}

export default App
