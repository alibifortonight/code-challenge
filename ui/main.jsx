import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, useLocation } from "react-router-dom"

import './index.css'

// Pages in the app
import Home from './pages/Home.jsx'

function PageNotFound() {
  const { pathname } = useLocation()
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center px-4">
      <h1 className="font-bold">Page Not Found</h1>
      <p className="text-center">
        Page <code>{pathname}</code> does not exist.
        <br />
        <a href="/" className="underline">Go home</a>
      </p>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
