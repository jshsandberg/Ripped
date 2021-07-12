import React from "react";
import NavBar from "../components/NavBar";
import Stories from "../components/Stories";
import Picture from "../components/Picture";
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    
  ];


export default function HomeScreen() {

    const renderItem = (data) => (
        <Picture id={data.item.id} />
      );
    
    return (
        <>
            <NavBar />
            <Stories />
            <SafeAreaView>
                <FlatList
                       data={data}
                       renderItem={renderItem}
                       keyExtractor={item => item.id}
                       contentContainerStyle={{ paddingBottom: 120 }}
                />
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
  