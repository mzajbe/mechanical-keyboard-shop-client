import { Outlet } from "react-router-dom";
import Navbar from "../home/navbar/Navbar";
import Footer from "../home/Footer/Footer";


const MainLayouts = () => {
    return (
        <div>
            <Navbar />
      <Outlet ></Outlet>
      <Footer></Footer>
        </div>
    );
};

export default MainLayouts;