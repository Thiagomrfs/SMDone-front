import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";

import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

import { router } from './routes'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <link rel="stylesheet" href="https://unpkg.com/primeicons/primeicons.css" />
    <link rel="stylesheet" href="https://unpkg.com/primereact/resources/themes/lara-light-indigo/theme.css" />
    <link rel="stylesheet" href="https://unpkg.com/primereact/resources/primereact.min.css" />
    <link rel="stylesheet" href="https://unpkg.com/primeflex@3.2.1/primeflex.min.css" />

    
    <script src="https://unpkg.com/react/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="https://unpkg.com/react-transition-group@4.4.2/dist/react-transition-group.js"></script>

    
    <script src="https://unpkg.com/primereact/core/core.min.js"></script>
    <script src="https://unpkg.com/primereact/slider/slider.min.js"></script>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
    
  </React.StrictMode>,
)
