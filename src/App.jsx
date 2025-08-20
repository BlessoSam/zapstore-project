import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AuthLayout from './components/AuthLayout/AuthLayout'
import { ToastContainer } from 'react-toastify'
import LoginLayout from './components/LoginLayout/LoginLayout'
import HomePage from './components/HomePage/HomePage'


function App() {


  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<AuthLayout />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginLayout />} />
          <Route path="/signup" element={<AuthLayout />} />
         
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
