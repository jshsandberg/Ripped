import React, { useEffect, useState } from 'react';
import {SafeAreaView, StyleSheet, Button} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

// In a React Native application

//Before using the SDK...



const TestScreen = () => {

    const [image, setImage] = useState(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
      };



    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
      }, []);


  return (
	<SafeAreaView style={styles.container}>
		<Button title="Uploade" onPress={pickImage} />
	</SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
	backgroundColor: '#f5f5f5',
	flex: 1,
  },
  title: {
	fontSize: 18,
	textAlign: 'center',
	fontWeight: 'bold',
  },
})

export default TestScreen