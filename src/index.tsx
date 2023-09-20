import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./utils/theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { UserProvider } from "./context/UserContext";
import "./assets/css/styles.css";

//ROUTES
import Dashboard from "./routes/Dashboard";
import Login from "./routes/auth/Login";
import Social from "./routes/Social";
import Signup from "./routes/auth/Signup";
import ProtectedRoute from "./libs/ProtectedRoute";
import CreateProfile from "./routes/auth/CreateProfile";
import SettingsLayout from "./layouts/SettingsLayout";
import CreateGroup from "./routes/groups/CreateGroup";
import Group from "./routes/groups";
import AccountSettings from "./routes/settings/account";
import ProfileSettings from "./routes/settings/profile";

//LAYOUTS
import Layout from "./layouts/index";
import Events from "./routes/Events";
import Finance from "./routes/Finance";
import Lists from "./routes/Lists";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ColorModeScript initialColorMode={theme.config.initalColorMode} />
        <Router>
          <UserProvider>
            <Routes>
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Layout />
                  </ProtectedRoute>
                }
              >
                <Route path="/" element={<Dashboard />} />
                <Route path="/groups/:groupId" element={<Group />} />
                <Route path="/groups/:groupId/social" element={<Social />} />
                <Route path="/groups/:groupId/events" element={<Events />} />
                <Route path="/groups/:groupId/lists" element={<Lists />} />
                <Route path="/groups/:groupId/finance" element={<Finance />} />
              <Route path="/groups/new" element={<CreateGroup />} />
                
              </Route>
              <Route
                path="/create-profile"
                element={
                  <ProtectedRoute>
                    <CreateProfile />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/settings"
                element={
                  <ProtectedRoute>
                    <SettingsLayout />
                  </ProtectedRoute>
                }
              >
                <Route path="/settings/account" element={<AccountSettings />} />
                <Route path="/settings/profile" element={<ProfileSettings />} />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </UserProvider>
        </Router>
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
