import { observer } from 'mobx-react'
import React from 'react'
import { StyleProp, ViewStyle, View, Image, StyleSheet, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { pokemonJson, pokemonStore } from '../store/pokemonStore'


type KeyValueComponentProps = {
    title: string
    value: string
    style?: StyleProp<ViewStyle>
}

const KeyValueComponent: React.FC<KeyValueComponentProps> = observer((props) => {
    const {title, value, style} = props
    return (
        <View style={[styles.row, style]}> 
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{value}</Text>
        </View>
    )
})

export const PokemonScreen: React.FC = observer(() => {
    const image = 'https://gabbyapp.com/' + pokemonStore.keyPokemon.picture

    return <>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.conteiner}>
                <Image
                    source={{ uri: image }}
                    style={styles.image}
                />
                <Text style={styles.title}>{pokemonStore.keyPokemon.name}</Text>
            </View>
            <View style={styles.conteinerDescription}>
                <KeyValueComponent title={'Вес'} value={pokemonStore.keyPokemon.weight}/>
                <KeyValueComponent title={'Рост'} value={pokemonStore.keyPokemon.height}/>
                <KeyValueComponent title={'Тип'} value={pokemonStore.keyPokemon.type}/>
                <KeyValueComponent style={{flexDirection: 'column'}} title="Описание" value={pokemonStore.keyPokemon.description} />
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
    image: {
        width: 200,
        height: 200,
    },
    row: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    }
})