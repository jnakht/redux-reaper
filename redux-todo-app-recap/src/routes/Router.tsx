import App from '@/App'
import Books from '@/pages/Books'
import Tasks from '@/pages/Tasks'
import Users from '@/pages/Users'
import { createBrowserRouter } from 'react-router'


const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {
                index: true,
                Component: Tasks
            },
            {
                path: '/tasks',
                Component: Tasks,
            },
            {
                path: '/users',
                Component: Users
            },
            {
                path: '/books',
                Component: Books
            }
        ]
    }
])

export default router;