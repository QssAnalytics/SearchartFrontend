import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";

const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Landing />} />
      </Routes>
    </div>
  );
};

export default App;
