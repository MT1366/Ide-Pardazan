import HouseCleaning from "./components/HouseCleaning";
import { RouterProvider } from "react-router-dom";
import Router from "./features/router";

function App() {
  return (
    <RouterProvider router={Router} />
    // <>
    //   {/* <HouseCleaning /> */}
    // </>
  );
}

export default App;
