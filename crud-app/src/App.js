import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Home';
import Create from './Create'
import View from './View'
import Edit from './Edit';
import './App.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Create/>} />
        <Route path='/edit/:id' element={<Edit/>} />      
        <Route path='/view/:id' element={<View/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
