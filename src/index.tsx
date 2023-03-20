import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./utils/theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { UserProvider } from "./context/UserContext";
import "./assets/css/styles.css";

//routes
import Dashboard from "./routes/Dashboard";
import Login from "./routes/Login";
import Social from "./routes/Social";
import Signup from "./routes/Signup";
import ProtectedRoute from "./libs/ProtectedRoute";
import Layout from "./components/Layout";
import CreateProfile from "./routes/CreateProfile";

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
                <Route path="/social" element={<Social />} />
              </Route>
              <Route
                path="/create-profile"
                element={
                  <ProtectedRoute>
                    <CreateProfile />
                  </ProtectedRoute>
                }
              />
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
