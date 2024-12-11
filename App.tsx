import React from "react";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import PopUpToast from "./src/index";

const App = () => {
  return (
    <SafeAreaProvider>
      <PopUpToast />
    </SafeAreaProvider>
  );
};

export default App;
