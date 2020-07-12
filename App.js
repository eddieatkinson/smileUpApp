import { StatusBar } from "expo-status-bar";
import React, { useContext, useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

import Store, { AppContext } from "./store";

function App() {
  const { testStore, setTestStore } = useContext(AppContext);
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  useEffect(() => {
    setTestStore(["hey"]);
  }, []);
  useEffect(() => {}, [testStore]);
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

export default function Main(props) {
  return (
    <Store>
      <App />
    </Store>
  );
}
