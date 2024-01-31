import './App.css';
import { useState, useEffect, useMemo } from 'react';
import api from './api/postsAxios';

// import Router from './components/Router';
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import PostPage from "./components/PostPage";
import About from "./components/About";
import EditPage from "./components/EditPage";
import NewPost from "./components/NewPost";
import Missing from "./components/Missing";
import Nav from './components/Nav';
import { DataProvider } from './context/DataContext';
import Header from './components/Header';
import Footer from './components/Footer';

// createBrowserRouter creates a custom router object and uses createRoutesFromELements to make
// it possible to uses the same syntax as you would with browserRouter.

// App() returns router which contains all of the layout/routes for the site
function App() {

  // Returns the jsx elements.
  return (
    <div className="App">
      <Header />
      <DataProvider>
        <Nav />
        <Routes>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='post/:id' element={<PostPage />} />
          <Route path='edit/:id' element={<EditPage />} />
          <Route path='newpost' element={<NewPost />} />
          <Route path='*' element={<Missing />} />
        </Routes>
      </DataProvider>
      <Footer />
    </div>
  )
}

export default App;
