import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { Link, router } from "expo-router";

export default function LoginScreen() {

 const [isEmailFocused, setIsEmailFocused] = useState(false);
 const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  return (
    <View style={styles.container}>
      {/* Title Section */}
      <View style={styles.titleSection}>
        <Text style={styles.title}>Login here</Text>
        <Text style={styles.subtitle}>Welcome back, you've been missed!</Text>
      </View>

      {/* Form Section */}
      <View style={styles.formSection}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#979797"
          style={[
            styles.input,
            isEmailFocused && styles.inputFocused, // Add focus styling
          ]}
          onFocus={() => setIsEmailFocused(true)}
          onBlur={() => setIsEmailFocused(false)}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#979797"
          secureTextEntry
          style={[
            styles.input,
            isPasswordFocused && styles.inputFocused, // Add focus styling
          ]}
          onFocus={() => setIsPasswordFocused(true)}
          onBlur={() => setIsPasswordFocused(false)}
        />

        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInButtonText}>Sign in</Text>
        </TouchableOpacity>

        
          <TouchableOpacity onPress={() => {
            router.push({
                pathname: "/register"
            })
          }}>
            <Text style={styles.createAccountText}>Create new account</Text>
          </TouchableOpacity>

      </View>

      {/* Footer Section */}
      <View style={styles.footerSection}>
        <Text style={styles.orContinueText}>Or continue with</Text>
        <View style={styles.socialIconsContainer}>
          <Image
            source={require("../../assets/google.png")}
            style={styles.socialIcon}
          />
          <Image
            source={require("../../assets/facebook.png")}
            style={styles.socialIcon}
          />
          <Image
            source={require("../../assets/apple.png")}
            style={styles.socialIcon}
          />
        </View>
      </View>
    </View>
  );
}

const CustomButton = ({
  title,
  backgroundColor,
  textColor,
  borderColor,
  onClick,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: backgroundColor || "#1F41BB", // Default blue color
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 5,
          elevation: 5,
        },
      ]}
      onPress={onClick}
    >
      <Text style={[styles.buttonText, { color: textColor || "#fff" }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  titleSection: {
    alignItems: "center",
    marginBottom: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    lineHeight: 45,
    color: "#1F41BB",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 30,
    color: "#000",
    textAlign: "center",
  },
  formSection: {
    width: "100%",
    alignItems: "center",
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#F0F0F0",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: "#F9F9F9",
    fontSize: 16,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: "#1E90FF",
    alignSelf: "flex-end",
    marginVertical: 10,
    marginLeft: 155,
  },
  signInButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#1E90FF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 15,
    shadowColor: "#1E90FF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  signInButtonText: {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  createAccountText: {
    fontSize: 16,
    color: "#1E90FF",
    marginTop: 20,
  },
  footerSection: {
    marginTop: 70,
    alignItems: "center",
  },
  orContinueText: {
    fontSize: 14,
    color: "#7D7D7D",
  },
  socialIconsContainer: {
    flexDirection: "row",
    marginTop: 15,
    justifyContent: "center",
  },
  socialIcon: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
  },
  inputFocused: {
    borderColor: "#1F41BB", // Change border color when focused
    borderWidth: 2, // Thicker border on focus
  },
  button: {
    width: "45%",
    height: "45%", // Adjust the width as per requirement
    paddingVertical: 15,
    borderRadius: 15, // Rounded corners
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
