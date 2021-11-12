import React, { useState } from "react";
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  { component } from "react";

function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Philemon Anaman Ndefo</Text>
      <Text> Development of Mobile Application</Text>

    </View>
  );
}
const CountTab = () => {
  const [counter, setCounter] = useState(0)
  
  const handleClick1 = () => {
    setCounter(counter + 1)
  }
  
  const handleClick2 = () => {
    setCounter(counter - 1)
  }
  const handleClick3 = () => {
    setCounter(counter * 0)
    }
  
  return (
    <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '300%',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '-15%',
    }}>
    Counter App
    <div style={{
      fontSize: '120%',
      position: 'relative',
      top: '10vh',
    }}>
      {counter}
    </div>
    <div className="buttons">
      <button style={{
      fontSize: '50%',
      position: 'relative',
      top: '20vh',
      marginRight: '5px',
      backgroundColor: 'black',
      borderRadius: '8%',
      color: 'white',
      }}
      onClick={handleClick1}>Increment</button>
      <button style={{
      fontSize: '50%',
      position: 'relative',
      top: '20vh',
      marginLeft: '5px',
      backgroundColor: 'Black',
      borderRadius: '8%',
      color: 'white',
      }}
      onClick={handleClick2}>Decrement</button>
     <button style={{
      fontSize: '50%',
      position: 'relative',
      top: '20vh',
      marginLeft: '5px',
      backgroundColor: 'blue',
      borderRadius: '8%',
      color: 'white',
      }}
      onClick={handleClick3}>SetTOZero</button>  
    </div>
    </div>
  )
  }
const Tab = createBottomTabNavigator();
  
export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator initialRouteName={Home} >
        <Tab.Screen name="Home" component={Home}  />
        <Tab.Screen name="CountTab" 
                    component={CountTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}