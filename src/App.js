import './App.css';
import PostPage from './components/PostPage';
import Home from './components/Home';
import About from './components/About';
import EditPage from './components/EditPage';
import NewPost from './components/NewPost';
import Missing from './components/Missing';
import { createBrowserRouter, Link, Route, RouterProvider, Routes } from 'react-router-dom';
import Layout from './components/Layout';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/postpage",
        element: <PostPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/editpage",
        element: <EditPage />,
      },
      {
        path: "/newpost",
        element: <NewPost />,
      },
      {
        path: "*",
        element: <Missing />,
      },
    ],
  },
  { path: "*", element: App },
]);



function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />;
    </div>
  );
}

export default App;
