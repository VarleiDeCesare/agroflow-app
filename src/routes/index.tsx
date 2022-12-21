import React from "react";
import { View, ActivityIndicator } from "react-native";
import { useAuth } from "../contexts/auth";
import AppRoutes from "../routes/app.routes";
import { NavigationContainer } from "@react-navigation/native";
import SignIn from "../pages/SignIn";

const Routes: React.FC = () => {
  const { signed, loading } = useAuth();
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#666" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {signed ? <AppRoutes /> : <SignIn />}
    </NavigationContainer>
  );
};

export default Routes;
