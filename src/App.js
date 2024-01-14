import './App.css';
import PostPage from './components/PostPage';
import Home from './components/Home';
import About from './components/About';
import EditPage from './components/EditPage';
import NewPost from './components/NewPost';
import Missing from './components/Missing';
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom';
import Layout from './components/Layout';
import { useState, useEffect } from 'react';
import axios from './api/axios';


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
        const response = await axios.get('/posts');
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
      <RouterProvider router={router} />;
    </div>
  );
}

export default App;
