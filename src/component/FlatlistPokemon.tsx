import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleProp, ViewStyle, View, Text, Image, TouchableOpacity, FlatList } from 'react-native'



interface FlatlistPokemonProps {
    style?: StyleProp<ViewStyle>
    data: []
}

export const FlatlistPokemon: React.FC<FlatlistPokemonProps> = props => {
    const { style, data } = props
    const navigation = useNavigation()
    const renderItem = ({ item, index }) => {
        const image = 'https://gabbyapp.com/'+item.picture
        return (
            <View>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Pokemon')
                }}>
                    <View>
                        <Image
                            source={{uri: image}}
                            style={{
                                width: 100,
                                height: 100,
                            }}
                        />
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
