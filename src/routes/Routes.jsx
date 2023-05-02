import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Page404 from "../pages/Page404";
import ChefRecipes from "../pages/ChefRecipes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/chef-recipes/:id",
        element: <ChefRecipes />,
        loader: ({params}) => fetch(`http://localhost:5000/chefs_recipes/${params.id}`)
    },
    {
        path: "/404",
        element: <Page404 />,
    },
]);

export default router