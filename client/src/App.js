import "./App.css";
import { Button, Container } from "react-bootstrap";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Dashboard } from "./pages/Dashboard";
import { MainLayout } from "./components/layout/MainLayout";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Login />
        <Register />
        <Dashboard />
      </MainLayout>
    </div>
  );
}

export default App;
