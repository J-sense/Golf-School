import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { router } from './routs/Routs.jsx';
import AuthProvider from './Provider/AuthProvider';
import {
 
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Helmet } from 'react-helmet';
// import {  } from '@tanstack/react-query';
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <div className='max-w-screen-xl mx-auto'> */}
    
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        
        <RouterProvider router={router} />

        
      </QueryClientProvider>
    </AuthProvider>


    {/* </div> */}

  </React.StrictMode>,
)
