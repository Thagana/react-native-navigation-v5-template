
import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import {
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-community/async-storage';

/** Screens */
import WelcomeScreen from './src/screens/WelcomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import DashboardScreen from './src/screens/DashboardScreen';

const AuthStack = createStackNavigator();
const AuthenticationStack = (props) => {
  console.log(props)
  return (
    <AuthStack.Navigator
      {...props}
    >
      <AuthStack.Screen
        name={"Authentication"}
        component={WelcomeScreen}
        options={{
          title: "Welcome"
        }}
    />
      <AuthStack.Screen
        name={"SignIn"}
        component={LoginScreen}
      />
      <AuthStack.Screen
          name={"SignUp"}
          component={SignUpScreen}
      />
    </AuthStack.Navigator>
    
  )
}

const RootStack = createStackNavigator();
const RootStackScreen = (props) => {
  const [isloggedin, setIsloaggedin] = useState(false);
  const checkToken = async () => {
    try{
      const token = await AsyncStorage.getItem("AUTH_TOKEN");
      if(token){
        setIsloaggedin(true);
      }
    }catch(error){
      console.log(error)
    }
  }
  useEffect(() => {
    checkToken()
  }, []);

  return (
    <RootStack.Navigator 
    headerMode="none"
    {...props}
    >
      {
        isloggedin ? (
          <RootStack.Screen
              name={"Dashboard"}
              component={DashboardScreen}
              options={{
                title: "Feed"
              }}
          />
        ) : (
          <RootStack.Screen
            name={"Welcome"}
            component={AuthenticationStack}
            options={{
              animationEnabled: false
            }}
          />
        )
      }
    
  </RootStack.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <SafeAreaProvider>
        <RootStackScreen />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
