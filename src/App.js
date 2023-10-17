import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Spinner from './components/Spinner';
import { useSelector } from 'react-redux';
import Register from './pages/Register';
import Success from "./pages/Success";
import Footer from './components/footer';
const App = () => {
  const {loading}= useSelector(state=> state.alerts)
  return (
    <>
    <div className="bd">
    <BrowserRouter>
     
      {loading? (<Spinner/>):
      (
        <Routes>
          <Route path='/' element={<Register/>}/>
        <Route path='/success' element={<Success/>}/>
        </Routes>
      )}
      </BrowserRouter>
    </div>
      
      <Footer/>
    </>
  )
}

export default App