import App from "@/App";
import Tasks from "@/pages/Tasks";
import User from "@/pages/User";
import { createBrowserRouter } from "react-router";
import Root from "./Root";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                path: '/',
                Component: App,
                children: [
                    {
                        index: true,
                        Component: Tasks,
                    },
                    {
                        path: '/users',
                        Component: User,
                    },
                    {

                        path: 'tasks',
                        Component: Tasks,
                    }
                ]
            }
        ]
    }
]);

export default router;