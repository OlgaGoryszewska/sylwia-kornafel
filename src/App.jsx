import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

//pages
import Home from './pages/Home';
import About from './pages/About';
//layout
import Layout from './Layout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
    </Route>
  )
);

function App() {
  return (
    <div>
      <h1>App is working!</h1>
    </div>
  ) ;
}

export default App;