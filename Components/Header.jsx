import { Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { getAuth } from "firebase/auth";
import { app } from "../firebaseConfig";

const Header = (props) => {
  const auth = getAuth(app);
  const user = auth.currentUser;

  return (
    <SafeAreaView style={styles.header}>
      {/* <Text style={styles.pageName}>{props.name}</Text> */}
      <Text style={styles.headerText}>SideQuest</Text>
      <Text style={styles.user}>Hello {user.displayName}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 26,
    color: "white",
    letterSpacing: 2,
  },
  pageName: {
    justifyContent: "flex-start",
  },
  user: {
    justifyContent: "flex-start",
    color: "#415177",
  },
});

export default Header;