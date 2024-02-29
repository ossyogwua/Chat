import { useEffect, useState } from "react";
import { Bubble, GiftedChat } from "react-native-gifted-chat";
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Alert,
} from "react-native";
import {
  collection,
  getDocs,
  addDoconSnapshot,
  query,
  getFirestore,
  orderBy,
  onSnapshot,
  listsDocuments,
} from "firebase/firestore";

const Chat = ({ route, navigation, storage }) => {
  const [messages, setMessages] = useState([]);
  const { name, background, userID } = route.params;
  const db = getFirestore();
  const colRef = collection(db, "messages");

  const onSend = (newMessages) => {
    getDocs(collection(db, "messages"), newMessages[0]);
  };

  const addMessage = async (newMessage) => {
    const newMessagetRef = await addDoc(collection(db, "messages"), newMessage);
    if (newMessagetRef.id) {
      setMessages([newMessage, ...messages]);
      Alert.alert(`The message "${messageName}" has been added.`);
    } else {
      Alert.alert("Unable to add. Please try later");
    }
    const listsDocuments = await getDocs(collection(db, "messages"));
    let newMessages = [];
    listsDocuments.forEach((docObject) => {
      newLists.push({ id: docObject.id, ...docObject.data() });
    });
  };

  useEffect(() => {
    navigation.setOptions({ title: name });
  }, []);
  // Messages database
  let unsubMessages;
  useEffect(() => {
    if (unsubMessages) unsubMessages();
    unsubMessages = null;
    {
      const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));
      unsubMessages = onSnapshot(q, (documentSnapshot) => {
        let newMessages = [];
        documentSnapshot.forEach((doc) => {
          newMessages.push({
            id: doc.id,
            ...doc.data(),
            createdAt: new Date(doc.data().createdAt.toMillis()),
          });
        });

        setMessages(newMessages);
      });
    }

    // Clean up code
    return () => {
      if (unsubMessages) unsubMessages();
    };
  }, []);

  // for customazing your messages
  const renderBubble = (props) => {
    return;
    <Bubble
      {...props}
      wrapperStyle={{
        right: {
          backgroundColor: "#757083",
        },
        left: {
          backgroundColor: "#FFF",
        },
      }}
    />;
  };

  return (
    <View style={[styles.container, { backgroundColor: background }]}>
      <GiftedChat
        messages={messages}
        renderBubble={renderBubble}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: userID,
          name,
        }}
      />
      {Platform.OS === "android" ? (
        <KeyboardAvoidingView behavior="height" />
      ) : null}
      {Platform.OS === "ios" ? (
        <KeyboardAvoidingView behavior="padding" />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Chat;
