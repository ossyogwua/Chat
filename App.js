// import the screens
import Start from "./components/Start";
import Chat from "./components/Chat";
// import react Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, LogBox } from "react-native";
LogBox.ignoreLogs(["AsyncStorage has been extracted from"]);
// import Firestore
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeAuth } from "firebase/auth";

const App = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyCwdfs_w4GUL-9_Yot5Aaxhix0G4cT_kxs",
    authDomain: "screens-650d5.firebaseapp.com",
    projectId: "screens-650d5",
    storageBucket: "screens-650d5.appspot.com",
    messagingSenderId: "194157131086",
    appId: "1:194157131086:web:7bd1716b78432cb4725a1f",
    measurementId: "G-Z9YP0J8JXW",
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const storage = getStorage(app);

  // Create the navigator
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Chat" component={Chat} />
        {(props) => <Chat db={db} {...props} />}
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
