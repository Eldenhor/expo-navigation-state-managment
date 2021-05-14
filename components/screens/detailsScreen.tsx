import React, { useEffect } from "react";
import { Button, Text, View } from "react-native";
// import { connect } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { alertData, counterAction } from "../../store/actions";
import { ALERT_DATA, INCREMENT } from "../../store/storeTypes";

export const DetailScreen = ({route, navigation}) => {
  const {itemId, otherParam} = route.params;

  const dispatch = useAppDispatch();
  const count = useAppSelector(state => state.count);

  useEffect(() => {
    console.log("Details Page rerendered");
  });

  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>OtherParam: {JSON.stringify(otherParam)}</Text>
      <Text>Redux Count: {count}</Text>
      <Button title="Increment" onPress={() => dispatch(counterAction(true))}/>
      <Button title="Decrement" onPress={() => dispatch(counterAction(false))}/>
      <Button title="DispatchTypeInc" onPress={() => dispatch({type: INCREMENT, payload: 100})}/>
      <Button title="AlertDataAction" onPress={() => dispatch(alertData("Hello!"))}/>
      <Button title="AlertDataObject" onPress={() => dispatch({type: ALERT_DATA, payload: "object data"})}/>
      <Button title="Go To Details... again" onPress={() => navigation.push("Details")}/>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")}/>
      <Button title="Go back" onPress={() => navigation.goBack()}/>
      <Button title="Go back to first screen in stack" onPress={() => navigation.popToTop()}/>
    </View>
  );
};
//
// const mapStateToProps = (state) => ({
//   count: state.count
// });
//
// export const DetailScreen = connect(mapStateToProps)(DetailsScreenComponent);
