import React from "react";
import { SafeAreaView, View, Text, Image, StyleSheet, Pressable } from "react-native";
import Test from "../utils/testImage.jpg";
import VertIcons from "../utils/vertDots.png";
import Heart from "../utils/heart.png";
import Bubble from "../utils/speech.png";
import Plane from "../utils/plane.png";
import Bookmark from "../utils/bookmark.png";

const styles = StyleSheet.create({
    image: {
      width: 30,
      height: 30,
      margin: 8
    },
    bookmark: {
        width: 40,
        height: 40,
    }
  });

export default function Pictures({ id }) {

    const pressIcons = () => {
        console.log("icons", id)
    }

    const pressHeart = () => {
        console.log("heart", id)
    }

    const pressBubble = () => {
        console.log("bubble", id)
    }

    const pressPlane = () => {
        console.log("plane", id)
    }

    const pressBookmark = () => {
        console.log("bookmark", id)
    }

    return (
        <SafeAreaView>
            <View style={{
                flexDirection: 'row',
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                <View style={{
                    flexDirection: "row",
                    margin: 10
                }}>
                    <Text style={{margin: 10}}>image</Text>
                    <Text style={{margin: 10}}>Username</Text>
                </View>
                <View>
                    <Pressable onPress={pressIcons}>
                        <Image style={{marginRight: 10}} source={VertIcons} />
                    </Pressable>
                </View>
            </View>
            <View style={{ height: 200}}>
                <Image style={{width: "80%", height: "60%", justifyContent: "center", flex: 1, marginRight: "auto", marginLeft: "auto"}} source={Test} />
            </View>
            <View style={{
                flexDirection: "row",
                margin: 10,
                justifyContent: "space-between"
            }}>
                <View style={{
                    flexDirection: "row",
                }}>
                    <Pressable onPress={pressHeart}>
                        <Image style={styles.image} source={Heart} />
                    </Pressable>
                    <Pressable onPress={pressBubble}>
                        <Image style={styles.image} source={Bubble} />
                    </Pressable>
                    <Pressable onPress={pressPlane}>
                        <Image style={styles.image} source={Plane} />
                    </Pressable>
                </View>
                <View>
                    <Pressable onPress={pressBookmark}>
                        <Image style={styles.bookmark} source={Bookmark} />
                    </Pressable>
                </View>
            </View>
            <View>
                <Text style={{margin: 10}}>Likes</Text>
            </View>
        </SafeAreaView>
    )
}

