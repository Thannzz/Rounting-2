import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { RequireAuth } from "./hoc/RequireAuth";
import { Careers } from "./pages/Careers";
import { Feeds } from "./pages/Feeds";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Posts } from "./pages/Posts";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route
          path="feeds"
          element={
            <RequireAuth>
              <Feeds />
            </RequireAuth>
          }
        />
        <Route
          path="posts"
          element={
            <RequireAuth>
              <Posts />
            </RequireAuth>
          }
        />
        <Route
          path="careers"
          element={
            <RequireAuth>
              <Careers />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
