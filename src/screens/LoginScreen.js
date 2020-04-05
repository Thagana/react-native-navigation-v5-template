import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';

const LoginScreen = (props) => {
    console.log(props)
    console.log(props)
    const [isloggedin, setIsloaggedin] = useState(false);
    // const navigation = useNavigation();
    const checkToken = async () => {
        try{
          const token = await AsyncStorage.getItem("AUTH_TOKEN");
          if(!token){
            setIsloaggedin(true);
            await AsyncStorage.setItem('AUTH_TOKEN', 'SOME_VALUE');
          }
        }catch(error){
          console.log(error)
        }
      }
      useEffect(() => {
      }, []);
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <TouchableOpacity
                style={{
                    backgroundColor: '#000',
                    paddingHorizontal: 40, 
                    borderRadius: 20,
                    paddingVertical: 8,
                    margin: 6
                }}
                onPress={() => {
                    checkToken();
                    props.navigation.push("Dashboard");
                }}
            >
                <Text style={{
                    color: '#fff',
                    fontSize: 20
                }}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginScreen
