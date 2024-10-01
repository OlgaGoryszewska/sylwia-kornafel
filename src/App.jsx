import { Routes, Route } from 'react-router-dom';
import { Nav } from './components/Nav';

// Pages

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Nav />
        <Routes></Routes>
      </div>
    </div>
  );
}

export default App;
