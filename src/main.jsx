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
        element: <AddArticle></AddArticle>
      },
      {
        path: '/articles',
        element: <AllArticles></AllArticles>,
        loader: () => fetch('http://localhost:5000/article')
      },
      {
        path: '/article/:id',
        element: <ArticleDetails></ArticleDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/article/${params.id}`)
      },
      {
        path: '/subscription',
        element: <Subscription></Subscription>
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </React.StrictMode>,
)
