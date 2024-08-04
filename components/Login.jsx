import { Colors } from "@/constants/Colors";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Login() {
  return (
    <View>
      <Image
        source={require("./../assets/images/Login.webp")}
        style={{ width: "100%", height: 350 }}
      />
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 30,
            fontFamily: "outfit-bold",
            textAlign: "center",
            marginTop: 10,
          }}
        >
          SH-AI-Travel
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontFamily: "outfit",
            textAlign: "center",
            color: Colors.GRAY,
            marginTop: 20,
          }}
        >
          Discover Your Next Adventure effortlessly. Personalized itineraries at
          your fingertips. Travel smarter with "AI-Driven insights"..!
        </Text>
        <View style={styles.button}>
          <Text
            style={{
              fontSize: 17,
              fontFamily: "outfit",
              textAlign: "center",
              color: Colors.WHITE,
            }}
          >
            Sign in with Google
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
    height: "100%",
  },
  button: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 99,
    marginTop: "25%",
  },
});
