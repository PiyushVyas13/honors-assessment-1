import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useLayoutEffect, useState } from "react";
import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import welcome from "../assets/welcome.png";
// import { postsListJson } from './postsList';

export default function App() {
  const [postsList, setPostsList] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const url = "https://jsonplaceholder.typicode.com/photos";
    const response = await fetch(url);
    const responseJson = await response.json();
    setPostsList(responseJson);
  };
  useLayoutEffect(() => {
    console.log("Before dom build");
  }, []);
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar backgroundColor='#000' 
      animated={true} style={"light"} /> */}
      <View style={styles.container}>
        {/* Welcome Image Section */}
        <View style={styles.imageContainer}>
          <Image
            source={welcome} // Add your image URL here
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        {/* Welcome Text Section */}
        <View style={styles.textContainer}>
          <Text style={styles.headerText}>Discover Your Dream Job here</Text>
          <Text style={styles.subText}>
            Explore all the existing job roles based on your interest and study
            major
          </Text>
        </View>

        {/* Buttons Section */}
        <View style={styles.buttonContainer}>
          <CustomButton
            title="Login"
            textColor="#fff"
            backgroundColor={undefined}
            borderColor={undefined}
            onClick={() => {
              router.push({
                pathname: "/login",
              });
            }}
          />
          
            <CustomButton
              title="Register"
              backgroundColor="#fff"
              textColor="#000000"
              borderColor="#1E90FF"
              onClick={() => {
                router.push({
                  pathname: "/register",
                });
              }}
            />
      
        </View>
      </View>
    </View>
  );
}

const CustomButton = ({ title, backgroundColor, textColor, borderColor, onClick }) => {
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
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  imageContainer: {
    flex: 3,
    justifyContent: "center",
  },
  image: {
    width: 300,
    height: 300,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  headerText: {
    fontSize: 35,
    fontWeight: "600",
    lineHeight: 52.5,
    textAlign: "center",
    color: "#1F41BB",
  },
  subText: {
    fontSize: 14,
    textAlign: "center",
    fontWeight: "400",
    color: "#7D7D7D",
    marginTop: 15,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 30,
    justifyContent: "space-around",
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 40,
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
