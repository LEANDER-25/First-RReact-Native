import React from "react";
import {View, Text, Button} from "react-native";
import styles from "./styles"

export default function Setting({navigation})
{
    return (
        <View style={styles.container}>
            <Text>Setting Screen</Text>
            <Button title="Home" onPress={() => navigation.navigate("Home")}/>
        </View>
    );
}