import { FC } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Auhentication from "./src/modules/Authentication";
import { NativeModules } from "react-native";
import Home from "./src/modules/Home";

const App: FC = () => {
  //FIXME: Aqui vai atualizar com o contextAPI

  const user = false;

  const { StatusBarManager } = NativeModules;

  const height = StatusBarManager.HEIGHT;

  return (
    <SafeAreaProvider
      style={{
        flex: 1,
        marginTop: height,
      }}
    >
      {user ? <Home /> : <Auhentication />}

      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
};

export default App;
