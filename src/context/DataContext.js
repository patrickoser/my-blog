import { createContext, useState, useMemo } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const DataContext = createContext({})

export const DataProvider = () => {
    const [posts, setPosts] = useState([
        {
            "posts": [
                {
                    "id": 1,
                    "title": "1st post",
                    "datetime": "January 1, 2024 11:47:39 AM",
                    "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                },
                {
                    "id": 2,
                    "title": "Second post",
                    "datetime": "January 1, 2024 11:47:48 AM",
                    "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. two"
                },
                {
                    "id": 3,
                    "title": "posting up",
                    "datetime": "January 1, 2024 1:57:53 PM",
                    "body": "on the block"
                },
            ],
        },
    ])

    const contextValue = useMemo(() => ({
        posts, setPosts
    }), [posts, setPosts])
    
    return (
        <DataContext.Provider value={{
            contextValue
        }}>
            <Header />
            <Nav />
            <Outlet />
            <Footer />
        </DataContext.Provider>
    )
}

export default DataContext