import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ui/ProtectedRoute";
import Home from "./pages/Home";
import Notes from "./pages/Notes";

import AppLayout from "./ui/AppLayout";
import GlobalStyles from "./styles/GlobalStyles";
import Tags from "./features/notes/Tags";
import NotesContent from "./features/notes/NotesContent";
import NotesDeleted from "./features/notes/NotesDeleted";
import Fellows from "./pages/Fellows";
import Blog from "./pages/Blog";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />

      <BrowserRouter>
        <Routes>
          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Home />} />
            <Route path="notes" element={<Notes />}>
              <Route index element={<NotesContent />} />
              <Route path="tags" element={<Tags />} />
              <Route path="bin" element={<NotesDeleted />} />
            </Route>
            <Route path="fellows" element={<Fellows />} />
            <Route path="posts" element={<Blog />} />
            {/* <Route path="notes/tags" element={<Notes />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

