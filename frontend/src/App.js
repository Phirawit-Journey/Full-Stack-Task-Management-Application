import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllTasks from "./pages/AllTasks";
import ImportantTasks from "./pages/ImportantTasks";
import CompletedTasks from "./pages/CompletedTasks";
import IncompletedTasks from "./pages/IncompletedTasks";

const App = () => {
  return (
    <div className="bg-gray-900 text-white h-screen p-2 ">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}>
            <Route index element={<AllTasks />} />
            <Route path="/importanttasks" element={<ImportantTasks />} />
            <Route path="/completedtasks" element={<CompletedTasks />} />
            <Route
              path="/incompletedtasks"
              element={<IncompletedTasks />}
            ></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
