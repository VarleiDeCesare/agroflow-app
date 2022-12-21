import React from "react";
import { AuthProvider } from "./src/contexts/auth";
import Routes from "./src/routes";
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";

export default function App() {
  const toastConfig = {
    error: (props: any) => (
      <ErrorToast
        {...props}
        text1Style={{
          fontSize: 14,
        }}
        text2Style={{
          fontSize: 15,
        }}
      />
    ),
    success: (props: any) => (
      <BaseToast
        {...props}
        style={{ borderLeftColor: "green" }}
        text1Style={{
          fontSize: 14,
        }}
        text2Style={{
          fontSize: 15,
        }}
      />
    ),
  };

  return (
    <AuthProvider>
      <Routes />
      <Toast config={toastConfig} />
    </AuthProvider>
  );
}
