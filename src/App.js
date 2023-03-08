import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/pages/layout";
import BarChart from "./components/pages/home";
import Evelyn from "./components/pages/evelyn";
import Aranka from "./components/pages/aranka";
import Floris from "./components/pages/floris";
import Hector from "./components/pages/hector";
import Martina from "./components/pages/martina";
import Maurits from "./components/pages/maurits";
import Rahima from "./components/pages/rahima";
import Sandra from "./components/pages/sandra";
import Wietske from "./components/pages/wietske";
import Storm from "./components/pages/storm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<BarChart />} />
          <Route path="Evelyn" element={<Evelyn />} />
          <Route path="Aranka" element={<Aranka />} />
          <Route path="Floris" element={<Floris />} />
          <Route path="Hector" element={<Hector />} />
          <Route path="Martina" element={<Martina />} />
          <Route path="Maurits" element={<Maurits />} />
          <Route path="Rahima" element={<Rahima />} />
          <Route path="Sandra" element={<Sandra />} />
          <Route path="Wietske" element={<Wietske />} />
          <Route path="Storm" element={<Storm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
