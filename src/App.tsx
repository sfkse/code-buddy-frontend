import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import Notes from "./pages/Notes";
import Chat from "./pages/Chat";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import Error from "./pages/Error";
import Register from "./pages/Register";
import DiscussionsNew from "./pages/DiscussionsNew";

import Discussions from "./components/discussions/Discussions";
import Layout from "./components/layout/Layout";
import AuthWrapper from "./components/AuthWrapper";
import DiscussionsQuestions from "./components/discussions/DiscussionsQuestions";
import DiscussionsRanking from "./pages/DiscussionsRanking";
import DiscussionsQuestionsDetail from "./pages/DiscussionsQuestionsDetail";
import Calendar from "./pages/Calendar";

const App = () => {
  return (
    <>
      <AuthWrapper>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="welcome" element={<Welcome />} />
            <Route path="notes" element={<Notes />} />
            <Route path="chat" element={<Chat />} />
            <Route path="calender" element={<Calendar />} />
            <Route path="events" element={<Events />} />
            <Route path="events/:id" element={<EventDetail />} />
            <Route path="discussions" element={<Discussions />}>
              <Route
                path="questions"
                element={<DiscussionsQuestions type="questions" />}
              />
              <Route
                path="questions/:id"
                element={<DiscussionsQuestionsDetail />}
              />
              <Route path="ranking" element={<DiscussionsRanking />} />
              <Route
                path="yourquestions"
                element={<DiscussionsQuestions type="yourquestions" />}
              />
              <Route
                path="youranswers"
                element={<DiscussionsQuestions type="youranswers" />}
              />
              <Route path="yourlikes" element={<Discussions />} />
              <Route path="newquestion" element={<DiscussionsNew />} />
            </Route>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </AuthWrapper>
    </>
  );
};

export default App;

