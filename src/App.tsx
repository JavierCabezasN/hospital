import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import SchedulePage from "./pages/schedule";
import SpecialityPage from "./pages/speciality";

function App() {
    return (
        <Routes>
            <Route element={<IndexPage />} path="/" />
            <Route element={<SchedulePage />} path="/schedules" />
            <Route element={<SpecialityPage />} path="/speciality" />
        </Routes>
    );
}

export default App;
