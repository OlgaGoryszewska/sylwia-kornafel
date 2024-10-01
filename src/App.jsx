import { Routes, Route } from 'react-router-dom';
import { Nav } from './components/Nav';

// Pages
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
