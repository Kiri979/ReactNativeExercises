import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const data = [
  {
    id: "1",
    postText: "Post 1",
    imageSource: {
      uri: "https://1.bp.blogspot.com/-cYNnSPamrwE/YCq9rxgwBiI/AAAAAAAAfj4/RiBuSUNNpq8hdNWxMv693m-YoLl6gQpCACLcBGAsYHQ/d/CUTE-BIRD-PHONE-WALLPAPER-v3.png",
    },
  },
  {
    id: "2",
    postText: "Post 2",
    imageSource: require("./assets/image/img_post02.png"),
  },
  {
    id: "3",
    postText: "Post 3",
    imageSource: require("./assets/image/img_post03.png"),
  },
  {
    id: "4",
    postText: "Post 4",
    imageSource: require("./assets/image/img_post04.png"),
  },
  {
    id: "5",
    postText: "Post 5",
    imageSource: require("./assets/image/img_post05.png"),
  },
  {
    id: "6",
    postText: "Post 6",
    imageSource: require("./assets/image/img_post06.png"),
  },
];

const renderPost = ({ item }) => {
  return (
    <View style={styles.posts}>
      <Text style={styles.postTxt}>{item.postText}</Text>
      <Image style={styles.postImg} source={item.imageSource} />
    </View>
  );
};

export default function App() {
  const [text, setText] = useState("");
  const [showActivityIndicator, setShowActivityIndicator] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowActivityIndicator(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (showActivityIndicator) {
    return (
      <LinearGradient
        colors={["#4366AC", "#32a998", "#F8FFAE"]}
        style={[styles.container, styles.loadingContainer]}
      >
        <ActivityIndicator size="large" color="#3d5af1" />
      </LinearGradient>
    );
  }

  const clearText = () => {
    setText("");
  };
  return (
    <LinearGradient
      colors={["#f090d9", "#f7e8e8", "#7BCeeC"]}
      style={styles.container}
    >
      <View style={styles.header}>
        <TextInput
          style={{ padding: 10, paddingLeft: 20 }}
          placeholder="Search..."
          onChangeText={(newText) => setText(newText)}
          defaultValue={text}
          placeholderTextColor="#000"
        />
        {text ? (
          <TouchableOpacity onPress={clearText}>
            <FontAwesome
              style={styles.icon}
              name="close"
              size={24}
              color="#0e0000"
            />
          </TouchableOpacity>
        ) : null}
      </View>

      <Text style={styles.cmnTitle}>Categories</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.horizontal}>
          <View style={styles.row}>
            <Text>Category 1</Text>
          </View>
          <View style={styles.row}>
            <Text>Category 2</Text>
          </View>
          <View style={styles.row}>
            <Text>Category 3</Text>
          </View>
          <View style={styles.row}>
            <Text>Category 4</Text>
          </View>
          <View style={styles.row}>
            <Text>Category 5</Text>
          </View>
          <View style={styles.row}>
            <Text>Category 6</Text>
          </View>
        </View>
      </ScrollView>

      <Text style={styles.cmnTitle}>Posts</Text>
      <FlatList
        data={data}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 30,
  },
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    height: 50,
    width: "100%",
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  icon: {
    position: "absolute",
    right: 10,
    top: -37,
  },
  cmnTitle: {
    fontSize: 30,
    paddingBottom: 20,
  },
  horizontal: {
    flexDirection: "row",
    marginBottom: 60,
  },
  row: {
    height: 45,
    padding: 8,
    marginRight: 8,
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 8,
  },
  vertical: {
    flexDirection: "column",
    height: "100%",
    marginBottom: 60,
  },
  posts: {
    height: 280,
    padding: 8,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 8,
    backgroundColor: "#a6acec",
  },
  postTxt: {
    fontSize: 27,
    fontWeight: "600",
    fontStyle: "italic",
    color: "#ffef00",
    textAlign: "center",
    paddingBottom: 5,
  },
  postImg: {
    flex: 1,
    borderRadius: 8,
    height: 400,
    width: "100%",
    resizeMode: "stretch",
  },
});
