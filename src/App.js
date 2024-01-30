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
    <Route index element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='postpage' element={<PostPage />} />
    <Route path='editpage' element={<EditPage />} />
    <Route path='newpost' element={<NewPost />} />
    <Route path='*' element={<Missing />} />
  </Route>
))

// App() returns router which contains all of the layout/routes for the site
function App() {
  const [posts, setPosts] = useState([
    {
      "posts": [
          {
              "id": 1,
              "title": "1st post",
              "datetime": "January 1, 2024 11:47:39 AM",
              "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          },
          {
              "id": 2,
              "title": "Second post",
              "datetime": "January 1, 2024 11:47:48 AM",
              "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. two"
          },
          {
              "id": 3,
              "title": "posting up",
              "datetime": "January 1, 2024 1:57:53 PM",
              "body": "on the block"
          }
      ]
  }
  ])

  // Returns the jsx elements.
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
