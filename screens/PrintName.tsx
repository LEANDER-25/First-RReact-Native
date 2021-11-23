import React from "react";
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

export default function PrintNameScreen(props: { name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>I am {props.name}</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
  });

  