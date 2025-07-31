import App from "@/App";
import Tasks from "@/pages/Tasks";
import Users from "@/pages/Users";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: '/',
        // element: <App></App>,
        Component: App,
        children: [
            {
                path: '/',
                Component: Tasks,
                index: true,
            },
            {
                path: 'tasks',
                Component: Tasks,
            },
            {
                path: 'users',
                Component: Users
            }
        ]
    }
])

export default router;