import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Layout from "./containers/Layout";
import Detail from "./containers/Details";
import Admin from "./containers/Admin";
import 'bootstrap/dist/css/bootstrap.min.css';
import Details from "./containers/Details";

function Router () {
    return (
            <Routes>
                <Route path="/" element={<Layout />} />
                <Route path="details/:id" element={<Details />} />
                <Route path="admin" element={<Admin />} />
            </Routes>
    );
}
export default Router;