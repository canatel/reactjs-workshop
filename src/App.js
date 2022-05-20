import React from "react";
import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "./Components/ProtectedRoute";
import { UserProvider } from "./Components/UserProvider";

import Header from "./Components/Header";
import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import SignUpScreen from "./Screens/SignUpScreen";

function App() {
  return (
    <UserProvider>
      <Header />
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomeScreen />
            </ProtectedRoute>
          }
        />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="*" element={<LoginScreen />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
