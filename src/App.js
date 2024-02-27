import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import useLocalStorage from "use-local-storage";

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
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
}

  // Returns the jsx elements.
  return (
    <div className="App" data-theme={theme}>
      <Router>
        <DataProvider>
          <Header 
            toggleTheme={toggleTheme}
            theme={theme}
          />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='post/:id' element={<PostPage />} />
            <Route path='edit/:id' element={<EditPage />} />
            <Route path='newpost' element={<NewPost />} />
            <Route path='*' element={<Missing />} />
          </Routes>
          <Footer />
        </DataProvider>
      </Router>
    </div>
  )
}

export default App;
