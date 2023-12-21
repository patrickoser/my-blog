import './App.css';
import PostPage from './components/PostPage';
import Home from './components/Home';
import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import EditPage from './components/EditPage';
import Footer from './components/Footer';
import Missing from './components/Missing';

function App() {
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

export default App;
