import { createBrowserRouter } from "react-router-dom";
import { Home } from '../pages/Home';
import { Details} from '../pages/Details';

const router = createBrowserRouter([
    {
      path: "/",
      element: <div><Home/></div>,
    },
    {
        path: "/details/:id",
        element: <div><Details/></div>,
      },
  ]);

export default router;  