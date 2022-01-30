import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.css'
import Home from './pages/Home';
import Tour from './pages/Tour';
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
            <Route index path='/' element={<Home />} />
            <Route index path='/:id' element={<Tour />} />
        </Routes>
      </div>
    </BrowserRouter>
    )
};

export default App;
