import {Routes, Route} from 'react-router-dom'
import './App.css'
import About from './pages/About';
import Home from './pages/Home';

const App = () =>{
  return (
    <Routes>
      <Route path='/about' element={<About/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
  );
}

export default App;
