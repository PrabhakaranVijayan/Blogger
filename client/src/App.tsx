import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Signup from './pages/signup'
import Landing from './pages/landing'
import Signin from './pages/signin'
import Home from './pages/home'

function App() {
  

  return (
    
     
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/home' element={<Home />} />
    </Routes>
    </BrowserRouter>

  
    
  )
}

export default App
