import Header from "../components/Header/Header";
import Filter from "../components/filter/Filter";

import ItemBlock from "./ItemBlock";
import Footer from "../components/footer/Footer";
import {Link} from "react-router-dom";

function Layout () {
    return (
        <div>
            <Header/>
            <ItemBlock/>
            <Footer/>
        </div>
    );
}
export default Layout;