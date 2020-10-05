import { useNavigation } from '@react-navigation/native'
import { observer } from 'mobx-react'
import React from 'react'
import { StyleProp, ViewStyle, View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import { pokemonStore } from '../store/pokemonStore'



interface FlatlistPokemonProps {
    style?: StyleProp<ViewStyle>
    data: []
}

export const FlatlistPokemon: React.FC<FlatlistPokemonProps> = observer( props => {
    const { style, data } = props
    const navigation = useNavigation()
    const renderItem = ({ item}) => {
        const image = 'https://gabbyapp.com/' + item.picture
        return (
            <View>
                <TouchableOpacity onPress={() => {
                    pokemonStore.changeKeyPokemon(item)
                    navigation.navigate('Pokemon')
                }}>
                    <View style={styles.conteiner}>
                        <Image
                            source={{ uri: image }}
                            resizeMode={"center"}
                            resizeMethod={'scale'}
                            style={{
                                width: 200,
                                height: 200,
                            }}
                        />
                        <Text style={styles.title}>{item.name}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    return <View style={{paddingTop: 30}}>
        <FlatList
        showsVerticalScrollIndicator={false}
            data={data}
            renderItem={renderItem}
        />
    </View>
})

const styles = StyleSheet.create({
    conteiner: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(128,128,128,0.2)',
        borderRadius: 15,
        marginTop: 2,
        marginBottom: 10,
        marginHorizontal: 10,

    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    }
})