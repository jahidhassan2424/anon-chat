import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import SingleChat from './components/Home/SingleChat/SingleChat';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/chat' element={<SingleChat />} />
      </Routes>
    </div>
  );
}

export default App;
