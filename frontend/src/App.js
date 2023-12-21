import { BrowserRouter } from "react-router-dom";
import { lazy } from 'react';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
const RoutersAdmin =  lazy(() => import("./componentsAdmin/Routers/Routers"));
const RoutersMerchant =  lazy(() => import("./componentsMerchant/ROUTERS/Routers"));
function App() {
  
  return (
    <>
     <BrowserRouter>
        <RoutersAdmin />
        <RoutersMerchant />
      </BrowserRouter>
      <ToastContainer/>
    </>
  );
}

export default App;
