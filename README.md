# Objective

To build a chat app for mobile devices using React Native. The app will provide users with a chat interface and options to share images and their location.

## The 5 Ws

Who—The users of the mobile chat app. These could be friends, family or other students on this course. Your codebase will be used by other developers working on the product.

What—A native chat app built with React Native, as well as all the relevant documentation.

When—Whenever users of your chat app want to communicate with each other.

Where—The app will be optimized for both Android and iOS devices. You will use Expo to develop the app and Google Firestore to store the chat messages.

Why—Mobile chat apps are among the most commonly downloaded and used apps in the world, so knowing how to build a chat app is an indispensable skill.

The app will demonstrate your React Native development skills. User Stories

As a new user, I want to be able to easily enter a chat room so I can quickly start talking to my friends and family.

As a user, I want to be able to send messages to my friends and family members to exchange the latest news.

As a user, I want to send images to my friends to show them what I’m currently doing.

As a user, I want to share my location with my friends to show them where I am.

As a user, I want to be able to read my messages offline so I can reread conversations at any time.

As a user with a visual impairment, I want to use a chat app that is compatible with a screen reader so that I can engage with a chat interface.

## Key Features
- A page where users can enter their name and choose a background color for the chat screen before joining the chat.
- A page displaying the conversation, as well as an input field and submit button.
- The chat  provides users with two additional communication features: sending images and location data.
-  Data gets stored online and offline.
  
## Technical Requirements: 
The is written in React Native and developed using Expo. 
The app is styled according to the given screen design. 
Chat conversations is stored in Google Firestore Database. 
The authenticates users anonymously via Google Firebase authentication.
Chat conversations is also stored locally.
The app allows users pick and send images from the phone’s image library. 
The app allows users take pictures with the device’s camera app, and send them. 
The app stores images in Firebase Cloud Storage. 
The app is able to read the user’s location data. Location data will be sent via the chat in a map view. The chat interface and functionality will be created using the Gifted Chat library. 
The app’s codebase contains comments.

How to use this App Step By Step Guide Clone the Repository: git clone https://github.com/ossyogwua/Chat

Dependencies:

React Native Expo: Development framework for React Native

Firebase Storage: Storage service for Firebase

Firebase: Real-time database and storage services

React Navigation: Navigation library

react-native-gifted-chat: Chat UI components 

expo-image-picker: Access to the device's image library 

expo-location: Access to the device's location 

expo-async-storage: Asynchronous, persistent key-value storage Configure Firebase.


