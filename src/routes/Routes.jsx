import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Page404 from "../pages/Page404";
import ChefRecipes from "../pages/ChefRecipes";
import Home from "../pages/Home";
import AuthLayout from "../pages/auth/AuthLayout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/chef-recipes/:id",
                element: <ChefRecipes />,
                loader: ({ params }) => fetch(`http://localhost:5000/chefs_recipes/${params.id}`)
            },
        ]
    },

    {
        path: "/",
        element: <AuthLayout />,
        children: [
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            }
        ]
    },

    {
        path: "*",
        element: <Page404 />,
    }
]);

export default router