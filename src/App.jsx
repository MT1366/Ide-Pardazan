import { RouterProvider } from "react-router-dom";
import Router from "./features/router";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function App({ children }) {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {children}
        <RouterProvider router={Router} />;
      </LocalizationProvider>
    </>
  );
}

export default App;
