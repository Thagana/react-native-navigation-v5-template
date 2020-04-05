import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const FeedScreen = ({ navigation: { push } }) => {
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
                push("Details")
            }}>
                <Text
                    style={{
                        color: '#fff',
                        fontSize: 20
                    }}
                >View More</Text>
            </TouchableOpacity>
        </View>
    )
}

export default FeedScreen
