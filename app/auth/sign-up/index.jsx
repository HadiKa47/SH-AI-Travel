import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Colors } from "./../../../constants/Colors";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function SignUp() {
  const router = useRouter();

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 30,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 30,
          marginTop: 25,
        }}
      >
        Create New Account
      </Text>
      <View
        style={{
          marginTop: 50,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit",
          }}
        >
          Full Name
        </Text>
        <TextInput
          placeholder="Please Enter Your Full Name"
          placeholderTextColor="#7d7d7d"
          style={styles.input}
        />
      </View>
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit",
          }}
        >
          Email
        </Text>
        <TextInput
          placeholder="Please Enter Your Email"
          placeholderTextColor="#7d7d7d"
          style={styles.input}
        />
      </View>
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit",
          }}
        >
          Password
        </Text>
        <TextInput
          placeholder="Please Enter Your Password"
          placeholderTextColor="#7d7d7d"
          secureTextEntry={true}
          style={styles.input}
        />
      </View>
      <View
        style={{
          padding: 20,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          marginTop: 40,
        }}
      >
        <Text
          style={{
            color: Colors.WHITE,
            fontFamily: "outfit",
            textAlign: "center",
          }}
        >
          SignUp
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => router.push("auth/sign-in")}
        style={{
          padding: 20,
          backgroundColor: Colors.WHITED,
          borderRadius: 15,
          marginTop: 20,
          borderWidth: 1,
        }}
      >
        <Text
          style={{
            color: Colors.PRIMARY,
            fontFamily: "outfit",
            textAlign: "center",
          }}
        >
          Already Have an Account. SignIn
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.GRAY,
    fontFamily: "outfit",
  },
});
