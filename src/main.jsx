import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  BrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import store from "./store/index.js";
import ProtectedRoute from "./Routes/ProtectedRoute/index.jsx";
import Dashboard from "./Pages/Dashboard/";

import AdminProtectedRoute from "./Routes/AdminProtectedRoute/index.jsx";

import ErrorPage from "./Components/Error/index.jsx";

//
import Product from "./Pages/Admin/Product/index.jsx";
import AdminDashboard from "./Pages/Admin/AdminDashboard/index.jsx";
import ProductAdd from "./Pages/Admin/ProductAdd/index.jsx";
import { SkeletonTheme } from "react-loading-skeleton";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage/>,

//     children: [
//       {
//        path:'/',
//         element: <Home />,

//       },
//       {
//         path: "/login",
//         element:
//         //<ProtectedRoute authentication={false} role="user">
//          <Login />
//       //  </ProtectedRoute>

//       },
//       {
//         path: "/dashboard",
//         element:

//        (<ProtectedRoute authentication role="user">
//         <Dashboard/>,
//       </ProtectedRoute>)

//       },

//     ],
//   },
//   {path:'/admin',
// element:<AdminApp/>,
// children:[
//   {path:'admindashboard',
//   element:<AdminProtectedRoute authentication={checkuserAndAdmin} role="admin">

//   <AdminDashboard/>

//   </AdminProtectedRoute>}

// ]

// }
// ]);
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" 
      
      element={<App />} errorElement={<ErrorPage />}>
        <Route path="" element={<Home />} />

        <Route
          path="login"
          element={
            <ProtectedRoute authentication={false} role="user">
              <Login />
            </ProtectedRoute>
          }
        />
        <Route
          path="loginadmin"
          element={
            <ProtectedRoute authentication={false} role="user">
              <Login />
            </ProtectedRoute>
          }
        />

        <Route
          path="dashboard"
          element={
            <ProtectedRoute authentication={true} role="user">
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* for admin */}
        <Route
          path="admin"
          element={
            <AdminProtectedRoute authentication={true} role="user">
              <AdminDashboard />
            </AdminProtectedRoute>
          }
        />

        <Route
          path="product"
          element={
            <AdminProtectedRoute authentication={true} role="user">
              <Product />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="productadd"
          element={
            <AdminProtectedRoute authentication={true} role="user">
              <ProductAdd />
            </AdminProtectedRoute>
          }
        />
      </Route>
      {/* <Route path="admin"
     element={<AdminProtectedRoute
       authentication={true}
     role="user"> 
     <AdminDashboard/>
     </AdminProtectedRoute>} /> */}
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <SkeletonTheme baseColor="#d9d9d9">
      {/* <RouterProvider router={router} /> */}
      <App/>
      </SkeletonTheme>
    </Provider>
  </React.StrictMode>
);
