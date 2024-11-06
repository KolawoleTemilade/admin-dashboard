
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Table from "../views/Table.jsx";
import Home from "../views/Home.jsx";
import Form from "../views/Form.jsx";
import Card from "../views/Card.jsx";
import Dashboard from "../views/Dashboard.jsx";
import DashboardLayout from "../layout/DashboardLayout.jsx";





export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path= "/" element={<DashboardLayout/>}>
                <Route index element={<Home />} />
                <Route path="/card" element={<Card/>} />
                <Route path="/form" element={<Form/>} />
                <Route path="/table" element={<Table />} />
                <Route path="/dashboard" element={<Dashboard/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}