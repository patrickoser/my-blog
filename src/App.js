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
import { DataProvider } from './context/DataContext';

// createBrowserRouter creates a custom router object and uses createRoutesFromELements to make
// it possible to uses the same syntax as you would with browserRouter.

const router = createBrowserRouter([
  {
    element: <DataProvider />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "post",
        element: <NewPost />,
      },
      {
        path: "post/:id",
        element: <PostPage />,
      },
      {
        path: "edit/:id",
        element: <EditPage />,
      },
      {
        path: "*",
        element: <Missing />,
      },
    ],
  },
])

/* const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='postpage' element={<PostPage />} />
    <Route path='editpage' element={<EditPage />} />
    <Route path='newpost' element={<NewPost />} />
    <Route path='*' element={<Missing />} />
  </Route>
)) */

// App() returns router which contains all of the layout/routes for the site
function App() {

  // Returns the jsx elements.
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  )
}

export default App;
