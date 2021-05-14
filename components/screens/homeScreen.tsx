import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { connect } from "react-redux";

const HomeScreenComponent = ({navigation, route, count}) => {
  const [post, setPost] = useState("");

  useEffect(() => {
    console.log("Home Page rerendered");
  });

  useEffect(() => {
    if (route.params?.post) {
      setPost(route.params.post);
    }
  }, [route.params?.post]);

  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text>Home Screen</Text>
      <Text>Post: {post}</Text>
      <Text>Redux Count: {count}</Text>
      <Button title="Create post" onPress={() => navigation.navigate("CreatePost")}/>
      <Button title="Go To Details" onPress={() => navigation.navigate("Details", {
        itemId: 86,
        otherParam: "anything you want there"
      })}/>
      <Button title="Profile" onPress={() => navigation.navigate("ProfileScreen")}/>
      <Button title="FetchDataScreen" onPress={() => navigation.navigate("FetchData")}/>
    </View>
  );
};

const mapStateToProps = (state) => ({
  count: state.count
});


export const HomeScreen = connect(mapStateToProps)(HomeScreenComponent);
