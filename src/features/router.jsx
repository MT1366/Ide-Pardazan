import { createBrowserRouter } from "react-router-dom";

import Calendar from "../components/Calendar";
import ChatBox from "../components/ChatBox";
import HouseCleaning from "../components/HouseCleaning";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HouseCleaning />,
    children: [],
  },
  {
    path: "calendar",
    element: <Calendar />,
  },

  {
    path: "chat",
    element: <ChatBox />,
  },
]);

export default Router;
