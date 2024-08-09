import { React, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
  ToastAndroid,
  Alert,
} from "react-native";
import { Colors } from "./../../../constants/Colors";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../configs/FirebaseConfig";

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onSignIn = () => {
    if (!email || !password) {
      if (Platform.OS === "android") {
        ToastAndroid.show(
          "Please Enter Email & Password..!",
          ToastAndroid.LONG
        );
      } else if (Platform.OS === "ios") {
        Alert.alert("Alert", "Please Enter Email & Password..!");
      }
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
        if (errorCode == "auth/invalid-credential") {
          if (Platform.OS === "android") {
            ToastAndroid.show("Invalid credentials..!", ToastAndroid.LONG);
          } else if (Platform.OS === "ios") {
            Alert.alert("Alert", "Invalid credentials..!");
          }
        }
      });
  };

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
          fontSize: 30,
          fontFamily: "outfit-bold",
          marginTop: 25,
        }}
      >
        Let's Sign You In
      </Text>
      <Text
        style={{
          fontSize: 25,
          fontFamily: "outfit",
          marginTop: 20,
          color: Colors.GRAY,
        }}
      >
        Welcome Back
      </Text>
      <Text
        style={{
          fontSize: 30,
          fontFamily: "outfit",
          marginTop: 10,
          color: Colors.GRAY,
        }}
      >
        You've Been Missed..!
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
          Email
        </Text>
        <TextInput
          placeholder="Please Enter Your Email"
          placeholderTextColor="#7d7d7d"
          style={styles.input}
          onChangeText={(value) => setEmail(value)}
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
          onChangeText={(value) => setPassword(value)}
        />
      </View>
      <TouchableOpacity
        onPress={onSignIn}
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
          SignIn
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push("auth/sign-up")}
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
          Create New Account
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
