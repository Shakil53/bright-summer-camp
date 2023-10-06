import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import Courses from "../Pages/Courses/Courses";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import EnrollMent from "../Pages/EnrollMentPage/EnrollMent";
import Project from "../Pages/Projects/Project";
import Instractors from "../Pages/Instractors/Instractors";






export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'courses',
                element: <Courses></Courses>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'enrollment/:id',
                element: <EnrollMent></EnrollMent>
            },
            {
                path: 'project',
                element: <Project></Project>
            },
            {
                path: 'instractors',
                element: <Instractors></Instractors>
            }

        ]
    },
]);