import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { BottomTabNavigation } from "./src/navigation/BottomTabNavigation";
import { Provider } from "react-redux";
import store from "./src/stores/store";

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <BottomTabNavigation />
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}
