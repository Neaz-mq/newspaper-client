import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Register from './components/Register/Register.jsx';
import Login from './components/Login/Login.jsx';
import AuthProvider from './Hook/AuthProvider.jsx';
import AddArticle from './components/AddArticle/AddArticle.jsx';
import AllArticles from './components/AllArticles/AllArticles.jsx';
import ArticleDetails from './components/ArticleDetails/ArticleDetails.jsx';
import Subscription from './components/Subscription/Subscription.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import AllUsers from './components/Dashboards/AllUsers/AllUsers.jsx';
import AllArticle from './components/Dashboards/AllArticle/AllArticle.jsx';
import AddPublisher from './components/Dashboards/AddPublisher/AddPublisher.jsx';
import Premiums from './components/Premiums/Premiums.jsx';
import MyProfile from './components/MyProfile/MyProfile.jsx';
import UpdateUser from './components/UpdateUser/UpdateUser.jsx';
import AdminHome from './components/Dashboards/AdminHome/AdminHome.jsx';
import MyArticle from './components/MyArticle/MyArticle.jsx';
import ArticleCard from './components/ArticleCard/ArticleCard.jsx';
import PrivateRoute from './utility/PrivateRoute.jsx';




const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/article',
        element: <PrivateRoute><AddArticle></AddArticle></PrivateRoute>
      },
      {
        path: '/articles',
        element: <AllArticles></AllArticles>,
        loader: () => fetch('https://newspaper-server-wheat.vercel.app/article')
      },
      {
        path: '/article/:id',
        element: <ArticleDetails></ArticleDetails>,
        loader: ({params}) => fetch(`https://newspaper-server-wheat.vercel.app/article/${params.id}`)
      },
      {
        path: '/subscription',
        element: <PrivateRoute><Subscription></Subscription></PrivateRoute>
      },
      {
        path: '/myarticle',
        element: <PrivateRoute><MyArticle></MyArticle></PrivateRoute>
      },
      {
        path: '/updateArticle/:id',
        element: <ArticleDetails></ArticleDetails>,
        loader: ({params}) => fetch(`https://newspaper-server-wheat.vercel.app/article/${params.id}`)
      },
      {
        path: '/premium',
        element: <PrivateRoute><Premiums></Premiums></PrivateRoute>
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/profile',
        element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>,
      },
      {
        path: '/updateUser/:id',
        element: <UpdateUser></UpdateUser>,
        loader: ({params}) => fetch(`https://newspaper-server-wheat.vercel.app/user/${params.id}`)
      },
     
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: '/dashboard/users',
        element: <AllUsers></AllUsers>,
      },
      {
        path: '/dashboard/articles',
        element: <AllArticle></AllArticle>
      },
      {
        path: '/dashboard/publishers',
        element: <AddPublisher></AddPublisher>
      },
      {
        path: '/dashboard/adminHome',
        element: <AdminHome></AdminHome>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </React.StrictMode>,
)
