import React from "react";
import { Text, SafeAreaView, Image, StyleSheet } from 'react-native';
import Camera from "../utils/camera.png";
import Plane from "../utils/plane.png";

export default function NavBar() {

    return (
        <SafeAreaView style={{
            alignItems: 'center',
            height: 60,
            borderBottomWidth: 2,
            flexDirection: "row",
            justifyContent: "space-around"
          }}>
            <Image style={{width: 30, height: 30}}  source={Camera} />
            <Text>GAINS</Text>
            <Image style={styles.image}  source={Plane} />
           </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  image: {
    height: 30,
    width: 40,
    transform: [{rotate: '20deg'}],
  },
});

