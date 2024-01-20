import './App.css';
import { useState, useEffect } from 'react';
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

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={Layout}>
    <Route index element={<Home />} />
    <Route path='about' element={<About />} />
  </Route>
))

// App() returns router which contains all of the layout/routes for the site
function App() {

  // useState provides you with the current value of that piece of state(post/postTitle/postBody)
  // as well a function to update/set that value to something new.
  const [post, setPost] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');

  // history will be used to navigate to a contextually appropriate page after certain actions.
  // Such as the home screen after submitting a post.
  // const history = useNavigate();

  // This will GET posts from db.json and populate the home page with them.
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/posts');
        console.log(setPost(response.data))
        setPost(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchPosts();
  }, [])

  // Returns the jsx elements.
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
