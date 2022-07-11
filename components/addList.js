import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import FontAwesome from "react-native-vector-icons/FontAwesome";

const AddList = (props) => {
  const [list, setList] = useState();

  const handleaddList = (value) => {
    props.addLists(value);
    setList(null);
  };


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.inpuTGroup}>
        <TextInput
          style={styles.inputField}
          value={list}
          onChangeText={(text) => setList(text)}
          placeholder={"Add new list"}
          placeholderTextColor={"#D3D3D3"}
        />
        <TouchableOpacity onPress={() => handleaddList(list)}>
          <View style={styles.button}>
            <FontAwesome name="plus-circle" size={30} color="#fff"/>
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    position: "absolute",
    bottom: 0,
    borderTopWidth: 1,
    borderColor: "#EAEAEA",
    width: "100%",
    backgroundColor: "#fff",
  },
  inpuTGroup:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 5,
  },
  inputField: {
    color: "#000",
    height: 50,
    flex: 1,
    paddingLeft: 5,
    fontSize: 18,
    width: "100%",
  },
  button: {
    height: "100%",
    width: 50,
    paddingLeft: 10,
    borderRadius: 50,
    paddingRight: 10,
    marginLeft: 5,
    backgroundColor: "#0774F1",
    alignItems: "center",
    justifyContent: "center",
  }
});

export default AddList;
