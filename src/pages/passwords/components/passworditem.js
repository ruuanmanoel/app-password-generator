import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";

export function PasswordItem({ data, removePassword }) {
  return (
    <Pressable onLongPress={removePassword} style={styles.container}>
      <Text style={styles.text}>{data}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0e0e0e",
    padding: 26,
    width: "100%",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  text: {
    color: "#fff",
  },
});
