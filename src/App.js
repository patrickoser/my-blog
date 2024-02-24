import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { useContext } from "react";
import DataContext from "./context/DataContext";

// import Router from './components/Router';
import Home from "./components/Home";
import PostPage from "./components/PostPage";
import About from "./components/About";
import EditPage from "./components/EditPage";
import NewPost from "./components/NewPost";
import Missing from "./components/Missing";
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';

// import context
import { DataProvider } from './context/DataContext';

// App() returns router which contains all of the layout/routes for the site
function App() {
  const { theme } = useContext(DataContext)

  // Returns the jsx elements.
  return (
    <div className="App" id="App" data-theme={theme}>
      <Router>
        <DataProvider>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
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
