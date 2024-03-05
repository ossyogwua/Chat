// import the screens
import Start from "./components/Start";
import Chat from "./components/Chat";
// import react Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, LogBox, Alert } from "react-native";
LogBox.ignoreLogs(["AsyncStorage has been extracted from"]);
// import Firestore
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  disableNetwork,
  enableNetwork,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { useNetInfo } from "@react-native-community/netinfo";
import { useEffect } from "react";

// Create the navigator
const Stack = createNativeStackNavigator();

const App = () => {
  const connectionStatus = useNetInfo();
  useEffect(() => {
    if (connectionStatus.isConnected === false) {
      Alert.alert("Connection lost!");
      disableNetwork(db);
    } else if (connectionStatus.isConnected === true) {
      enableNetwork(db);
    }
  }, [connectionStatus.isConnected]);

  const firebaseConfig = {
    apiKey: "AIzaSyCwdfs_w4GUL-9_Yot5Aaxhix0G4cT_kxs",
    authDomain: "screens-650d5.firebaseapp.com",
    projectId: "screens-650d5",
    storageBucket: "screens-650d5.appspot.com",
    messagingSenderId: "194157131086",
    appId: "1:194157131086:web:7bd1716b78432cb4725a1f",
    measurementId: "G-Z9YP0J8JXW",
  };

  const auth = initializeApp;
  ////persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  //});
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const storage = getStorage(app);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Chat">
          {(props) => (
            <Chat
              isConnected={connectionStatus.isConnected}
              db={db}
              storage={storage}
              {...props}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
