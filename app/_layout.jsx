// app/_layout.jsx
import React from "react";
import { Stack } from "expo-router";
import { UserProvider } from "../contexts/UserContext";

export default function RootLayout() {
  return (
    <UserProvider>
      <Stack />
    </UserProvider>
  );
}
