import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../authentication/Register";
import SignIn from "../authentication/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
            path: '/',
            element: <Home />
        },
        {
          path: '/jobs/:id',
          element: <PrivateRoute><JobDetails /></PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
          path: '/jobApply/:id',
          element: <PrivateRoute><JobApply /></PrivateRoute>
        },
        {
          path: '/register',
          element: <Register />
        },
        {
          path: '/login',
          element: <SignIn />
        }
      ]
    },
  ]);


export default router;