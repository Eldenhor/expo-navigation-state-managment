import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Button, Image, Text, TextInput, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { HomeScreen } from "./components/screens/homeScreen";
import { DetailScreen } from "./components/screens/detailsScreen";
import { store } from "./store/stores";
import { FetchScreen } from "./components/screens/fetchScreen";


// function counter(state, action) {
//   if (typeof state === "undefined") {
//     return 0;
//   }
//
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     default:
//       return state;
//   }
// }
//
// let store = createStore(combineReducers({count: counter}));


// const HomeScreen = ({navigation, route, count}) => {
//   const [post, setPost] = useState("");
//
//   useEffect(() => {
//     console.log("Home Page rerendered");
//   });
//
//   useEffect(() => {
//     if (route.params?.post) {
//       setPost(route.params.post);
//     }
//   }, [route.params?.post]);
//
//   return (
//     <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
//       <Text>Home Screen</Text>
//       <Text>Post: {post}</Text>
//       <Text>Redux Count: {count}</Text>
//       <Button title="Create post" onPress={() => navigation.navigate("CreatePost")}/>
//       <Button title="Go To Details" onPress={() => navigation.navigate("Details", {
//         itemId: 86,
//         otherParam: "anything you want there"
//       })}/>
//       <Button title="Profile" onPress={() => navigation.navigate("ProfileScreen")}/>
//     </View>
//   );
// };

const CreatePostScreen = ({navigation}) => {
  const [postText, setPostText] = useState("");

  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{height: 200, padding: 10, backgroundColor: "white"}}
        value={postText}
        onChangeText={setPostText}
      />
      <Button title="Done" onPress={() => {
        navigation.navigate({
          name: "Home",
          params: {post: postText},
          merge: true
        });
      }}/>
    </>
  );
};

// const DetailsScreen = ({route, navigation, count, dispatch}) => {
//   const {itemId, otherParam} = route.params;
//
//   useEffect(() => {
//     console.log("Details Page rerendered");
//   });
//
//   return (
//     <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
//       <Text>Details Screen</Text>
//       <Text>itemId: {JSON.stringify(itemId)}</Text>
//       <Text>OtherParam: {JSON.stringify(otherParam)}</Text>
//       <Text>Redux Count: {count}</Text>
//       <Button title="Increment" onPress={() => dispatch({type: "INCREMENT"})}/>
//       <Button title="Decrement" onPress={() => dispatch({type: "DECREMENT"})}/>
//       <Button title="Go To Details... again" onPress={() => navigation.push("Details")}/>
//       <Button title="Go to Home" onPress={() => navigation.navigate("Home")}/>
//       <Button title="Go back" onPress={() => navigation.goBack()}/>
//       <Button title="Go back to first screen in stack" onPress={() => navigation.popToTop()}/>
//     </View>
//   );
// };

const ProfileScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text>Profile Screen</Text>
      <Button title="Update the title" onPress={() => navigation.setOptions({title: "Updated!"})}/>
    </View>
  );
};

const LogoTitle = () => {
  return (
    <Image
      style={{width: 80, height: 80}}
      source={require("./assets/app-logo.png")}
    />
  );
};


// let DetailScreenContainer = connect(state => ({count: state.count}))(DetailsScreen);
// let HomeContainer = connect(state => ({count: state.count}))(HomeScreen);


const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{
          headerTitle: props => <LogoTitle {...props}/>,
          headerStyle: {
            backgroundColor: "#F4511E",
            height: 120
          },
          headerTintColor: "#FFF",
          headerTitleStyle: {
            fontWeight: "bold"
          }
        }}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: "Home Screen"
            }}/>
          <Stack.Screen
            name="Details"
            component={DetailScreen}
            initialParams={{itemId: 42, otherParam: "init"}}/>
          <Stack.Screen
            name="CreatePost"
            component={CreatePostScreen}/>
          <Stack.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={({route}) => ({title: route.params.name})}
            initialParams={{name: "Profile Name 1"}}
          />
          <Stack.Screen name="FetchData" component={FetchScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
