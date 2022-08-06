import { Route, Routes, BrowserRouter } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import AccountPage from "./pages/AccountPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<DashboardPage />} />
        <Route exact path="/account" element={<AccountPage />} />
        <Route exact path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
