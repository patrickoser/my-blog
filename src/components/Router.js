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
// All of the children nested within Layout are then designated their own path
const Router = () => {
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

    return <RouterProvider router={router} />
}

export default Router