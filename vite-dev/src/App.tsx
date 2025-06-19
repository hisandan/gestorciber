import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Temp from './pages/Temp';
import "./App.css"

function App() {
  return (
    <BrowserRouter basename="/gestorciber">
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/temp" element={<Temp />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App