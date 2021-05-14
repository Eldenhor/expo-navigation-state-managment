import React from "react";
import { Button, Text, View } from "react-native";
// import { fetchData } from "../../store/actions";
import { fetchData } from "../../store/actions";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";

export const FetchScreen = () => {
  const dispatch = useAppDispatch();
  const fetchedData = useAppSelector(state => state.fetchedData);

  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text>Fetch Screen</Text>
      <Text>Fetch Data id is : {fetchedData.title}</Text>
      <Button title="Fetch1" onPress={() => dispatch(fetchData(1))}/>
      <Button title="Fetch2" onPress={() => dispatch(fetchData(2))}/>
      <Button title="Fetch3" onPress={() => dispatch(fetchData(3))}/>
      <Button title="Fetch4" onPress={() => dispatch(fetchData(4))}/>
    </View>
  );
};

// const mapStateToProps = state => {
//   return {
//     fetchedData: state.fetchedData
//   };
// };
//
// const mapDispatchToProps = {
//   fetchData
// };
//
// export const FetchScreen = connect(mapStateToProps, mapDispatchToProps)(FetchScreenComponent);
