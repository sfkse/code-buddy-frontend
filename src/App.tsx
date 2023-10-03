import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import Notes from "./pages/Notes";
import Chat from "./pages/Chat";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";

import Layout from "./components/layout/Layout";
import AuthWrapper from "./components/AuthWrapper";
import Error from "./pages/Error";
import Register from "./pages/Register";

const App = () => {
  return (
    <>
      <AuthWrapper>
        <Routes>
          <Route path="/" element={<Layout />} errorElement={<Error />}>
            <Route index element={<Home />} />
            <Route path="welcome" element={<Welcome />} />
            <Route path="notes" element={<Notes />} />
            <Route path="chat" element={<Chat />} />
            <Route path="events" element={<Events />} />
            <Route path="events/:id" element={<EventDetail />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthWrapper>
    </>
  );
};

export default App;

