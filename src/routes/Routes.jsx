import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Page404 from "../pages/Page404";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/404",
        element: <Page404 />,
    },
]);

export default router