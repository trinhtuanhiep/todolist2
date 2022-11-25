import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import * as pages from './page'

export default function routes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<pages.homePage />} />
                <Route path="/student" element={<pages.studentPage />} />
                <Route path="/uploadPage" element={<pages.uploadPage />} />
            </Routes>
        </Router>
    )
}
