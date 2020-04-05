import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const WelcomeScreen = ({ navigation }) => {
    console.log(navigation)
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <TouchableOpacity style={{
                backgroundColor: '#000',
                paddingHorizontal: 40, 
                borderRadius: 20,
                paddingVertical: 8,
                margin: 6
            }}
                onPress={() => {
                    navigation.navigate("SignIn")
                }}
            >
                <Text style={{
                    color: '#fff',
                    fontSize: 20
                }}>
                    Sign In
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                backgroundColor: '#000',
                paddingHorizontal: 40, 
                borderRadius: 20,
                paddingVertical: 8,
                margin: 6
            }}
                onPress={() => {
                    navigation.navigate("SignUp")
                }}
            >
                <Text style={{
                    color: '#fff',
                    fontSize: 20
                }}>
                    Sign Up
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default WelcomeScreen
