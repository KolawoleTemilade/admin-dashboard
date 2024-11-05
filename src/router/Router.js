
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Table from "../components/sidebars/Table.jsx";
import Dashboard from "../views/Dashboard.jsx";




export default function Index(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/"  element={<Dashboard/>}/>
            {/* <Route path="/card"  element={Card}/>
            <Route path="/form"  element={Form}/> */}
            {/* <Route path="/table"  element={<Table/>}/> */}
            {/* <Route path="/"  element={Home}/> */}
        </Routes>
        </BrowserRouter>
    )
}