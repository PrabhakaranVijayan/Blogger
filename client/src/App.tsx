import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Signup from './pages/signup'
import Landing from './pages/landing'

function App() {
  

  return (
    <div>
     
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/signup' element={<Signup />} />
      
    </Routes>
    </BrowserRouter>

    </div>
    
  )
}

export default App
