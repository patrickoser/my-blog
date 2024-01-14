import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
}

export default Router