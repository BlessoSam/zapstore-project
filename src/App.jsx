import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AuthLayout from './components/AuthLayout/AuthLayout'
import { ToastContainer } from 'react-toastify'
import LoginLayout from './components/LoginLayout/LoginLayout'
import HomePage from './components/HomePage/HomePage'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyAcc from './components/MyAccount/MyAcc'
import ContactPage from './components/Contact/Contact'
import ProductDetail from './components/ProductDetail/ProductDetail'
import { WishlistProvider } from './context/WishlistContext'   // ✅ Import provider
import { CartProvider } from './context/CartContext'
import CartPage from './components/Cart/CartPage'
import WishlistPage from './components/WishList/WishlistPage'
import CheckoutPage from './components/Checkout/Checkout'

function App() {
  return (
    <>
      {/* ✅ Wrap entire app with WishlistProvider */}
      <WishlistProvider>
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<AuthLayout />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/login" element={<LoginLayout />} />
              <Route path="/signup" element={<AuthLayout />} />
              <Route path='/myacc' element={<MyAcc />} />
              <Route path='/cart' element={<CartPage />} />
              <Route path='/wishlist' element={<WishlistPage />} />
              <Route path='/contact' element={<ContactPage />} />
              <Route path='/product/:id' element={<ProductDetail />} />
              <Route path='/checkout' element={<CheckoutPage />} />
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
        </CartProvider>
      </WishlistProvider>
    </>
  )
}

export default App
