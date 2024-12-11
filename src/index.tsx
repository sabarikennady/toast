import React from "react";
import Toast, { showToast } from "./components/Toast";
import { Pressable, StyleSheet, Text, View } from "react-native";

const PopUpToast = () => {
  const onPressToast = (message: string, type: "info" | "warning" | "success" | "error") => {
    showToast(message, type);
  };
  return (
    <>
      <Toast />
      <View style={styles.container}>
        <Pressable
          style={[styles.buttonStyle, styles.infoButton]}
          onPress={() =>
            onPressToast("ℹ️ Heads up! Something exciting is coming your way. Stay tuned! 🚀", "info")
          }
        >
          <Text style={styles.buttonText}>Show Success Toast</Text>
        </Pressable>
        <Pressable
          style={[styles.buttonStyle, styles.warningButton]}
          onPress={() =>
            onPressToast("⚠️ Uh-oh! Looks like something's not quite right. Double-check before proceeding! 😬", "warning")
          }
        >
          <Text style={styles.buttonText}>Show Success Toast</Text>
        </Pressable>
        <Pressable
          style={[styles.buttonStyle, styles.successButton]}
          onPress={() =>
            onPressToast("✅ Success! Everything is looking awesome! You've nailed it! 🎉", "success")
          }
        >
          <Text style={styles.buttonText}>Show Success Toast</Text>
        </Pressable>
        <Pressable
          style={[styles.buttonStyle, styles.errorButton]}
          onPress={() =>
            onPressToast("❌ Oops! Something went wrong. Don't worry, we'll fix it! 🛠️", "error")
          }
        >
          <Text style={styles.buttonText}>Show Error Toast</Text>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  buttonStyle: {
    paddingVertical: 12,
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 8,
      height: 8,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 16,
  },
  infoButton: {
    backgroundColor: "#A3D8FF",
  },
  warningButton: {
    backgroundColor: "#FFF2A6",
  },
  successButton: {
    backgroundColor: "#B4E5B9",
  },
  errorButton: {
    backgroundColor: "#FFB3B3",
  },
  buttonText: {
    color: "#333333",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default PopUpToast;