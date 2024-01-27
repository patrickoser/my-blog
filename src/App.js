import './App.css';
import { useState, useEffect, useMemo } from 'react';
import api from './api/postsAxios';

// import Router from './components/Router';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import PostPage from "./components/PostPage";
import About from "./components/About";
import EditPage from "./components/EditPage";
import NewPost from "./components/NewPost";
import Missing from "./components/Missing";
import Layout from "./components/Layout";

// createBrowserRouter creates a custom router object and uses createRoutesFromELements to make
// it possible to uses the same syntax as you would with browserRouter.

/* const router = useMemo(() => {
  return createBrowserRouter()
})
*/

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    
  </Route>
))

// App() returns router which contains all of the layout/routes for the site
function App() {

  // Returns the jsx elements.
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
