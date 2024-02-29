import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { getAuth, signInAnonymously } from "firebase/auth";

const Start = ({ navigation }) => {
  const auth = getAuth();
  const [name, setName] = useState("");
  const image = require("../img/BackgroundImage.png");
  const [selectedColor, setSelectedColor] = useState("");

  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };

  const signInUser = () => {
    signInAnonymously(auth)
      .then((result) => {
        navigation.navigate("Chat", {
          name: name,
          background: background,
          id: result.user.uid,
        });
        Alert.alert("Signed in Successfully!");
      })
      .catch((error) => {
        Alert.alert("Unable to sign in, try later again.");
      });
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Chat</Text>
        <View style={styles.containerWhite}>
          <View style={styles.inputContainer}>
            {/* Input user name \*/}
            <TextInput
              style={styles.textInput}
              value={name}
              onChangeText={setName}
              placeholder="Write your name here"
            />
          </View>
          <Text style={styles.text1}>Choose Background Color:</Text>
          <View style={styles.colorButtonsContainer}>
            <TouchableOpacity
              style={[
                styles.colorButton,
                {
                  backgroundColor: "#090C08",
                  opacity: selectedColor === "#090C08" ? 1 : 0.7,
                },
              ]}
              onPress={() => handleColorSelection("#090C08")}
            />
            <TouchableOpacity
              style={[
                styles.colorButton,
                {
                  backgroundColor: "#474056",
                  opacity: selectedColor === "#474056" ? 1 : 0.7,
                },
              ]}
              onPress={() => handleColorSelection("#474056")}
            />
            <TouchableOpacity
              style={[
                styles.colorButton,
                {
                  backgroundColor: "#8A95A5",
                  opacity: selectedColor === "#8A95A5" ? 1 : 0.7,
                },
              ]}
              onPress={() => handleColorSelection("#8A95A5")}
            />
            <TouchableOpacity
              style={[
                styles.colorButton,
                {
                  backgroundColor: "#B9C6AE",
                  opacity: selectedColor === "#B9C6AE" ? 1 : 0.7,
                },
              ]}
              onPress={() => handleColorSelection("#B9C6AE")}
            />
          </View>

          <Button
            title="Start Chatting"
            onPress={() => navigation.navigate("Chat", { name: name })}
            color="#757083"
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "300",
    color: "#757083",
  },
  containerWhite: {
    width: "88%",
    height: "44%",
    justifyContent: "center",
    backgroundColor: "white",
    bottom: 0,
    alignItems: "center",
    marginBottom: "6%",
  },
  text: {
    padding: "25%",
    flex: 6,
    fontSize: 45,
    fontWeight: "600",
    color: "white",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#757083",
    padding: 18,
    marginLeft: 20,
    marginRight: 20,
    marginTop: -10,
    marginBottom: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  text1: {
    fontSize: 16,
    color: "#757083",
    fontWeight: "300",
    marginTop: 10,
  },
  colorButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  colorButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    margin: 10,
  },
  buttonStartChatting: {
    backgroundColor: "#757083",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  button: {
    backgroundColor: "#090C08",
  },
});

export default Start;
