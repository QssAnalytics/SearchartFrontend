import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <div className="min-h-screen w-full lg:px-[120px] xl:px-searchart bg-white dark:bg-gradient-to-b dark:from-[#0A1525] dark:to-[#041023] font-medium font-manrope text-searchart-text dark:text-searchart-dark-text">
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
