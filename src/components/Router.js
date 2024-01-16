import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import PostPage from "./PostPage";
import About from "./About";
import EditPage from "./EditPage";
import NewPost from "./NewPost";
import Missing from "./Missing";
import Layout from "./Layout";
import App from "../App";

// createBrowserRouter uses Layout as the root element that is rendered first.
// All of the children nested within Layout are then designated their own path.
// Router is then exported to be called/returned from within 'App'.
