import React, { useState } from "react";
import Parse from 'parse/react-native.js';
import { SafeAreaView, Text, Pressable, View, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function WelcomeScreen({ navigation }) {

    const [text, onChangeText] = useState();
    const [password, onChangePassword] = useState();
    const [person, setPerson] = useState(new Parse.Object('Person'));

    async function fetchPerson() {
        //create your Parse Query using the Person Class you've created
        let query = new Parse.Query('Person');
        //run the query to retrieve all objects on Person class, optionally you can add your filters
        let queryResult = await query.findAll();
        //pick the first result 
        const currentPerson = queryResult[0];
        //access the Parse Object attributes
        console.log('person id: ', currentPerson.get('id'));
        console.log('person name: ', currentPerson.get('name'));
        console.log('person email: ', currentPerson.get('email'));
        setPerson(currentPerson);
      }


    const addPerson = async () => {
        // navigation.navigate("Home")
        try {
            const newPerson = new Parse.Object('Person');
            //define the attributes you want for your Object
            newPerson.set('name', 'John');
            newPerson.set('email', 'john@back4app.com');
            newPerson.set('test', 'test');
            //save it on Back4App Data Store
            await newPerson.save();

        } catch (err) {
            console.log('Error saving new person: ', error);
        }
    }

    const navigateHome = () => {
        navigation.navigate("Home")
    };

    const goTest = () => {
        navigation.navigate("Test")
    }


    return (
        <SafeAreaView style={{
            flex: 1,
            alignItems: "center",
            justifyContent: 'center',
        }}>
            <TextInput
                value={text}
                onChangeText={onChangeText}
                style={{borderWidth: 1, margin: 10, height: 40, width: '75%', padding: 10}}
                placeholder="Username"
            />
                 <TextInput
                value={password}
                onChangeText={onChangePassword}
                style={{borderWidth: 1, margin: 10, height: 40, width: '75%', padding: 10}}
                placeholder="Password"
            />
            <Pressable onPress={navigateHome} style={       
                ({ pressed }) => [
                    {
                        backgroundColor: pressed ?
                        "gray"
                        :
                        "blue"
                    },
                    {
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                        marginTop: 10,
                        borderRadius: 10
                    }
                ]}
            >

                <Text style={{color: "white"}}>Login</Text>
            </Pressable>
            <SafeAreaView>
      <View>
        <Text>Name: {person.get('name')}</Text>
        <Text>email: {person.get('email')}</Text>
        <Button title='Add person' onPress={addPerson} />
        <Button title='Fetch person' onPress={fetchPerson} />
        {/* Your other components here ....*/}
      </View>
    </SafeAreaView>
    <SafeAreaView>
        <Button onPress={goTest} title="Hello" />
    </SafeAreaView>
        </SafeAreaView>
    )
}