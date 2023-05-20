import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";

const App = () => {
  return (
    <div className="min-h-screen w-full px-searchart bg-white dark:bg-gradient-to-b dark:from-[#0A1525] dark:to-[#041023] font-medium font-manrope text-searchart-text dark:text-searchart-dark-text">
      <Routes>
        <Route index element={<Landing />} />
      </Routes>
    </div>
  );
};

export default App;
