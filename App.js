import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Keyboard,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import Lists from "./components/Lists";
import AddList from "./components/addList";

export default function App() {
  const [lists, setLists] = useState([]);

  const addList = (list) => {
    if (list == null) return;
    setLists([...lists, list]);
    Keyboard.dismiss();
  };

  const deleteLists = (deletList) => {
    setLists(lists.filter((value, id) => id != deletList));
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.header}>Todo Lists</Text>
      <View style={styles.containerBody}>
        <ScrollView style={styles.scrollView}>
          {lists.map((list, id) => {
            return (
              <Lists
                key={id}
                count={id + 1}
                text={list}
                deleteList={() => deleteLists(id)}
              />
            );
          })}
        </ScrollView>
      </View>
        <AddList addLists={addList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F9",
  },
  header: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "500",
    marginTop: 28,
    marginBottom: 10,
    paddingTop: 15,
    paddingLeft: 20,
    paddingBottom: 15,
    backgroundColor: "#fff"
  },
  containerBody: {
    padding: 10,
  },
});
