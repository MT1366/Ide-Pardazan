import { createBrowserRouter } from "react-router-dom";

import Home from "../components/Home";
import ChatBox from "../components/ChatBox";
import HouseCleaning from "../components/HouseCleaning";
import BookingDetail from "../components/BookingDetail";
import AddPromo from "../components/AddPromo";
import Payment from "../components/Payment";
import Location from "../components/Location";
import Review from "../components/Review";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "root",
    element: <HouseCleaning />,
  },
  {
    path: "bookingdetail",
    element: <BookingDetail />,
  },
  {
    path: "addpromo",
    element: <AddPromo />,
  },
  {
    path: "location",
    element: <Location />,
  },
  {
    path: "payment",
    element: <Payment />,
  },
  {
    path: "review",
    element: <Review />,
  },

  {
    path: "chat",
    element: <ChatBox />,
  },
]);

export default Router;
