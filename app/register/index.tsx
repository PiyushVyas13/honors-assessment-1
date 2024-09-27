import { router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);

  // Email validation function
  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  // Handle Sign Up logic with validation
  const handleSignUp = () => {
    if (!validateEmail(email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      Alert.alert(
        "Weak Password",
        "Password must be at least 6 characters long."
      );
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Password Mismatch", "Passwords do not match.");
      return;
    }

    // Proceed with signup logic (e.g., API call)
    Alert.alert("Success", "Account created successfully!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>
        Create an account so you can explore all the existing jobs
      </Text>

      <TextInput
        style={[styles.input, emailFocused && styles.inputActive]}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        onFocus={() => setEmailFocused(true)}
        onBlur={() => setEmailFocused(false)}
      />

      <TextInput
        style={[styles.input, passwordFocused && styles.inputActive]}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        onFocus={() => setPasswordFocused(true)}
        onBlur={() => setPasswordFocused(false)}
      />

      <TextInput
        style={[styles.input, confirmPasswordFocused && styles.inputActive]}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={true}
        onFocus={() => setConfirmPasswordFocused(true)}
        onBlur={() => setConfirmPasswordFocused(false)}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>

        <TouchableOpacity onPress={() => {
            router.push({
                pathname: "/login",
            })
        }}>
            <Text style={styles.haveAccountText}>Already have an account</Text>
        </TouchableOpacity>
      

      <Text style={styles.orText}>Or continue with</Text>

      <View style={styles.socialButtons}>
        <TouchableOpacity
          style={styles.socialButton}
          onPress={() => console.log("Google pressed")}
        >
          <Text style={styles.socialButtonText}>G</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.socialButton}
          onPress={() => console.log("Facebook pressed")}
        >
          <Text style={styles.socialButtonText}>F</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.socialButton}
          onPress={() => console.log("Apple pressed")}
        >
          <Text style={styles.socialButtonText}>A</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0039FF",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 30,
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  inputActive: {
    borderColor: "#0039FF", // Blue border when focused
  },
  button: {
    backgroundColor: "#0039FF",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  haveAccountText: {
    fontSize: 14,
    color: "#666",
    marginTop: 20,
  },
  orText: {
    marginTop: 10,
    fontSize: 14,
    color: "#666",
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
    marginTop: 20,
  },
  socialButton: {
    backgroundColor: "#e0e0e0",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  socialButtonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default RegisterPage;
