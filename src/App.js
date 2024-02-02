import './App.css';

// import Router from './components/Router';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import PostPage from "./components/PostPage";
import About from "./components/About";
import EditPage from "./components/EditPage";
import NewPost from "./components/NewPost";
import Missing from "./components/Missing";
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';

// import context
import { DataProvider } from './context/DataContext';

// App() returns router which contains all of the layout/routes for the site
function App() {

  // Returns the jsx elements.
  return (
    <div className="App">
      <Router>
        <Header />
        <DataProvider>
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='post/:id' element={<PostPage />} />
            <Route path='edit/:id' element={<EditPage />} />
            <Route path='newpost' element={<NewPost />} />
            <Route path='*' element={<Missing />} />
          </Routes>
        </DataProvider>
        <Footer />
      </Router>
    </div>
  )
}

export default App;
