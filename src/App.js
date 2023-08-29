import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';
import Destinations from './Pages/Destinations';
import Spaceships from './Pages/Spaceships';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Homepage/>
    },
    {
      path: '/destinations',
      element: <Destinations/>
    },
    {
      path: '/spaceships',
      element: <Spaceships/>
    },
    
    {
      path: '*',
      element: <Homepage/>
    },
  ])
  return (
    <div>
    <RouterProvider router={router}/>
    </div>
  );
};

export default App;
