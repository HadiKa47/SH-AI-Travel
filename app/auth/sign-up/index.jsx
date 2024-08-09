import { React, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  Platform,
  Alert,
} from "react-native";
import { Colors } from "./../../../constants/Colors";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../configs/FirebaseConfig";

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [fullName, setFullName] = useState();

  const onCreateAccount = () => {
    if (!email || !password || !fullName) {
      if (Platform.OS === "android") {
        ToastAndroid.show("Please Enter All Details..!", ToastAndroid.LONG);
      } else if (Platform.OS === "ios") {
        Alert.alert("Alert", "Please Enter All Details..!");
      }
      return;
    }
    // Trim inputs to remove any unintended spaces
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const trimmedFullName = fullName.trim();

    // Validate fullName
    if (!trimmedFullName.match(/^[a-zA-Z0-9]+$/)) {
      if (Platform.OS === "android") {
        ToastAndroid.show(
          "Full Name can only contain alphanumeric characters.",
          ToastAndroid.LONG
        );
      } else if (Platform.OS === "ios") {
        Alert.alert(
          "Alert",
          "Full Name can only contain alphanumeric characters."
        );
      }
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      if (Platform.OS === "android") {
        ToastAndroid.show("Invalid email format.", ToastAndroid.LONG);
      } else if (Platform.OS === "ios") {
        Alert.alert("Alert", "Invalid email format.");
      }
      return;
    }

    // Check if password is the same as fullName
    if (trimmedPassword.toLowerCase() === trimmedFullName.toLowerCase()) {
      if (Platform.OS === "android") {
        ToastAndroid.show(
          "Password cannot be the same as Full Name.",
          ToastAndroid.LONG
        );
      } else if (Platform.OS === "ios") {
        Alert.alert("Alert", "Password cannot be the same as Full Name.");
      }
      return;
    }

    // Password validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()])[A-Za-z\d@$!%*?&#^()]{8,}$/;

    if (!passwordRegex.test(password)) {
      if (Platform.OS === "android") {
        ToastAndroid.show(
          "Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, and one special character.",
          ToastAndroid.LONG
        );
      } else if (Platform.OS === "ios") {
        Alert.alert(
          "Alert",
          "Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, and one special character."
        );
      }
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        router.push("auth/sign-in");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
        if (errorCode == "auth/email-already-in-use") {
          if (Platform.OS === "android") {
            ToastAndroid.show("Email Already in Use..!", ToastAndroid.LONG);
          } else if (Platform.OS === "ios") {
            Alert.alert("Alert", "Email Already in Use..!");
          }
        }
        // ..
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
          onChangeText={(value) => setFullName(value)}
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
        onPress={onCreateAccount}
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
      </TouchableOpacity>
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
