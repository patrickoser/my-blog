import './App.css';
import PostPage from './components/PostPage';
import Home from './components/Home';
import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import EditPage from './components/EditPage';
import Footer from './components/Footer';
import Missing from './components/Missing';
import { createBrowserRouter, Link, Route, RouterProvider, Routes } from 'react-router-dom';

const router = createBrowserRouter([
  { path: "*", Component: Root },
]);

function Root() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Home />
      <PostPage />
      <EditPage />
      <About />
      <Missing />
      <Footer />
    </div>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
