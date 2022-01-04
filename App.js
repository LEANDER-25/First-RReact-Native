import { StatusBar } from 'expo-status-bar';
import {Text,View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from "./components/Home";
import Setting from "./components/Setting";



// const boxes = new Array(10).fill(null).map((v, i) => i + 1);

// export default function App() {
//   // const isLoadingComplete = useCachedResources();
//   // const colorScheme = useColorScheme();

//   // if (!isLoadingComplete) {
//   //   return null;
//   // } else {
//   //   return (
//   //     <SafeAreaProvider>
//   //       <PrintNameScreen name = '18DTHQA2'/>
//   //     </SafeAreaProvider>
//   //   );
//   // }

//   // return (
//   //   <View style={AnotherStyle.container}>
//   //     <View style={AnotherStyle.box}>
//   //       <Text style={AnotherStyle.boxText}>#1</Text>
//   //     </View>
//   //     <View style={AnotherStyle.box}>
//   //       <Text style={AnotherStyle.boxText}>#2</Text>
//   //     </View>
//   //     <View style={AnotherStyle.box}>
//   //       <Text style={AnotherStyle.boxText}>#3</Text>
//   //     </View>
//   //   </View>
//   //   );
//   // return (
//   //   <View style={AnotherStyle.container}>
//   //     <StatusBar hidden={false}/>
//   //     {
//   //       boxes.map( i => (
//   //         <Box key={i}>#{i}</Box>
//   //       ))
//   //     }
//   //   </View>
//   // );
//   // return (
//   //   <View style={AnotherStyle.container}>
//   //     <StatusBar hidden={false} />
//   //     <Row>
//   //       <Column>
//   //         <Box>1</Box>
//   //         <Box>2</Box>
//   //       </Column>
//   //       <Column>
//   //         <Box>3</Box>
//   //         <Box>4</Box>
//   //       </Column>
//   //     </Row>
//   //     <Row>
//   //       <Column>
//   //         <Box>5</Box>
//   //         <Box>6</Box>
//   //       </Column>
//   //       <Column>
//   //         <Box>7</Box>
//   //         <Box>8</Box>
//   //       </Column>
//   //     </Row>
//   //     <Row>
//   //       <Column>
//   //         <Box>9</Box>
//   //         <Box>10</Box>
//   //       </Column>
//   //       <Column>
//   //         <Box>11</Box>
//   //         <Box>12</Box>
//   //       </Column>
//   //     </Row>
//   //   </View>
//   // );
  
// }
export default createAppContainer( 
  createStackNavigator({Home, Details}, {initialRouteName: "Home"})
);
