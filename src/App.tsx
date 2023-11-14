import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import Notes from "./pages/Notes";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import Error from "./pages/Error";
import Register from "./pages/Register";
import DiscussionsNew from "./pages/DiscussionsNew";
import Discussions from "./pages/Discussions";
import DiscussionsRanking from "./pages/DiscussionsRanking";
import DiscussionsQuestionsDetail from "./pages/DiscussionsQuestionsDetail";
import Calendar from "./pages/Calendar";
import Settings from "./pages/Settings";
import SettingsAccount from "./pages/SettingsAccount";
import SettingsPermissions from "./pages/SettingsPermissions";

import Layout from "./components/layout/Layout";
import RouteHandler from "./components/RouteHandler";
import DiscussionsQuestions from "./components/discussions/DiscussionsQuestions";
import EventCreate from "./components/events/EventCreate";
import EventNew from "./components/events/EventNew";
import UserEvents from "./components/events/UserEvents";
import DraftEvents from "./components/events/DraftEvents";
import JoinedEvents from "./components/events/JoinedEvents";
import DraftEventEdit from "./components/events/DraftEventEdit";
import DiscussionsYourQuestions from "./pages/DiscussionsYourQustions";
import DiscussionsYourAnswers from "./pages/DiscussionsYourAnswers";

const App = () => {
  return (
    <>
      <RouteHandler>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="welcome" element={<Welcome />} />
            <Route path="notes" element={<Notes />} />
            {/* <Route path="chat" element={<Chat />} /> */}
            <Route path="calender" element={<Calendar />} />
            <Route path="events" element={<Events />} />
            <Route path="events/:id" element={<EventDetail />} />
            <Route path="events" element={<EventCreate />}>
              <Route path="create" element={<EventNew />} />
              <Route path="published" element={<UserEvents />} />
              <Route path="joined" element={<JoinedEvents />} />
              <Route path="draft" element={<DraftEvents />} />
              <Route path="draft/:id" element={<DraftEventEdit />} />
            </Route>
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
                element={<DiscussionsYourQuestions />}
              />
              <Route path="youranswers" element={<DiscussionsYourAnswers />} />
              <Route path="yourlikes" element={<Discussions />} />
              <Route path="newquestion" element={<DiscussionsNew />} />
            </Route>
            <Route path="/settings" element={<Settings />}>
              <Route path="account" element={<SettingsAccount />} />
              <Route path="permissions" element={<SettingsPermissions />} />
              {/*<Route path="notifications" element={<SettingsNotifications />} /> */}
              {/* <Route path="privacy" element={<Discussions />} />
              <Route path="billing" element={<Discussions />} />
              <Route path="integrations" element={<Discussions />} /> */}
              <Route path="help" element={<Discussions />} />
            </Route>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </RouteHandler>
    </>
  );
};

export default App;

