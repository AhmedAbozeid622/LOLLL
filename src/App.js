import './App.css';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import { BrowserRouter , Route ,Routes , Link } from 'react-router-dom';


function App() {
  return (
    <div className="app">

        <BrowserRouter>

        <Link to='/' />
        <Link to='/Signup' />
        <Link to='/Login' />


        <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Login' element={<Login />} />
          
        </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
