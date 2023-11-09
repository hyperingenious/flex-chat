import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateRoom from "./pages/CreateRoom";
import Room from "./pages/Room";
import Error from "./pages/Error";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<CreateRoom />} />
        <Route path="/room/:uuid" element={<Room />} />
        <Route path="error" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
