import { observer } from 'mobx-react'
import React from 'react'
import { StyleProp, ViewStyle, View, Image, StyleSheet, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { pokemonJson, pokemonStore } from '../store/pokemonStore'

interface PokemonProps {
    style?: StyleProp<ViewStyle>
}

export const PokemonScreen: React.FC<PokemonProps> = observer(props => {
    const { style } = props
    const image = 'https://gabbyapp.com/' + pokemonStore.keyPokemon.picture
    return <>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.conteiner}>
                <Image
                    source={{ uri: image }}
                    style={{
                        width: 200,
                        height: 200,
                    }}
                />
                <Text style={styles.title}>{pokemonStore.keyPokemon.name}</Text>
            </View>
            <View style={styles.conteinerDescription}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Text style={styles.title}>Вес </Text>
                    <Text style={styles.text}>{pokemonStore.keyPokemon.weight}</Text>
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Text style={styles.title}>Рост </Text>
                    <Text style={styles.text}>{pokemonStore.keyPokemon.height}</Text>
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Text style={styles.title}>Тип </Text>
                    <Text style={styles.text}>{pokemonStore.keyPokemon.type}</Text>
                </View>
                <Text style={styles.title}>Описание: </Text>
                <Text style={styles.text}>{pokemonStore.keyPokemon.description}</Text>
            </View>
        </ScrollView>
    </>
})
const styles = StyleSheet.create({
    conteiner: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(128,128,128,0.2)',
        borderRadius: 15,
        marginTop: 60,
        marginBottom: 10,
        marginHorizontal: 10,
        paddingVertical: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    conteinerDescription: {
        justifyContent: 'space-between',
        //alignItems: 'center',
        //backgroundColor: 'rgba(128,128,128,0.2)',
        borderRadius: 15,
        marginTop: 2,
        marginBottom: 10,
        marginHorizontal: 10,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    text: {
        fontSize: 20,
        marginBottom: 10,
        textAlign: "justify",
    },
})