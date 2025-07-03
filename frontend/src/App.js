// App.js
import './App.css';
import {  Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Error from './pages/Error';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/' element={<Error/>} />
      </Routes>
  );
}

export default App;
