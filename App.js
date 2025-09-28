import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  const showGreeting = () => {
    if (name.trim()) {
      setGreeting(`Hello, ${name}!`);
    } else {
      Alert.alert("Error", "Please enter your name");
    }
  };

  const clearGreeting = () => {
    setGreeting("");
    setName("");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.title}>Simple QA React App</Text>

      <View testID="counter-section" style={styles.section}>
        <Text style={styles.sectionTitle}>Counter</Text>
        <Text testID="counter-text" style={styles.counterText}>
          Count: {count}
        </Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity testID="increment-button" style={styles.button} onPress={incrementCount}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity testID="decrement-button" style={styles.button} onPress={decrementCount}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity testID="reset-button" style={[styles.button, styles.resetButton]} onPress={resetCount}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View testID="greeting-section" style={styles.section}>
        <Text style={styles.sectionTitle}>Greeting</Text>
        <TextInput
          testID="name-input"
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />
        <View style={styles.buttonRow}>
          <TouchableOpacity testID="greet-button" style={styles.button} onPress={showGreeting}>
            <Text style={styles.buttonText}>Greet</Text>
          </TouchableOpacity>
          <TouchableOpacity testID="clear-button" style={[styles.button, styles.clearButton]} onPress={clearGreeting}>
            <Text style={styles.buttonText}>Clear</Text>
          </TouchableOpacity>
        </View>
        {greeting ? (
          <Text testID="greeting-text" style={styles.greetingText}>
            {greeting}
          </Text>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 40,
    color: "#333",
  },
  section: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 15,
    color: "#333",
    textAlign: "center",
  },
  counterText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#007AFF",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    minWidth: 60,
    alignItems: "center",
  },
  resetButton: {
    backgroundColor: "#FF3B30",
  },
  clearButton: {
    backgroundColor: "#8E8E93",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
  },
  greetingText: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    color: "#34C759",
    marginTop: 10,
  },
});
