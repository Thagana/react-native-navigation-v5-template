import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const SignUpScreen = ({ navigation }) => {
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
                    navigation.navigate("SignIn")
                }}
            >
                <Text style={{
                    color: '#fff',
                    fontSize: 20
                }}>SignUp</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SignUpScreen
