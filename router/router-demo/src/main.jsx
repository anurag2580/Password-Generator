import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider} from 'react-router';
import App from './App.jsx'
import{Home,About,Contact,Github} from './App.jsx';

let router = createBrowserRouter ([
  {
    path:"/",
    element: <App />,
    children:
    [{
       path:"",
       element: <Home />
      },
     { 
      path:"/about",
      element:<About />
     },
     {
      path:"/contact",
      element:<Contact />
     },
          {
      path:"/github",
      element:<Github />
     },
    ],
  }]
)
createRoot(document.getElementById('root')).render(
<RouterProvider router={router}/>,
);