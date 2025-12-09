import { Outlet } from "react-router-dom";
import Header from "../components/core/Header";
import Footer from "../components/core/Footer";
import CookiePopup from "../components/core/CookiePopup";


const AppLayout = ({ mode, setMode }) => {
  return (
    <>
      <Header mode={mode} setMode={setMode} />
      
        <Outlet />
      
      <Footer />
      <CookiePopup />
    </>
  );
};

export default AppLayout;

