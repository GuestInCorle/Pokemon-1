import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleProp, ViewStyle, View, Text } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'


interface FlatlistPokemonProps {
    style?: StyleProp<ViewStyle>
    data: []
}

export const FlatlistPokemon: React.FC<FlatlistPokemonProps> = props => {
    const { style, data } = props
    const navigation = useNavigation()
    const renderItem = ({ item, index }) => {
        return (
            <View>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Pokemon')
                }}>
                    <View>
                        <Text>{item.name}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    return <View style={style}>
        <FlatList
        data={data}
        renderItem={renderItem}
        />

    </View>
}
