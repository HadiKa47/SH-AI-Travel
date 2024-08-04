import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Login() {
  const router = useRouter();
  return (
    <View>
      <Image
        source={require("./../assets/images/LandingPage.jpg")}
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
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("auth/sign-in")}
        >
          <Text
            style={{
              fontSize: 17,
              fontFamily: "outfit",
              textAlign: "center",
              color: Colors.WHITE,
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
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
