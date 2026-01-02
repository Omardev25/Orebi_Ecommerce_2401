import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Product from './Pages/Product';
import Error from './Pages/Error';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/product" element={<Product />}></Route>
      <Route path="/*" element={<Error />}></Route>
    </Route>

  )
);


const App = () => {
  return (
    <RouterProvider router={router} />
  
  )
}

export default App