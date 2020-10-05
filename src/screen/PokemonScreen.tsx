import { observer } from 'mobx-react'
import React from 'react'
import { StyleProp, ViewStyle, View, Image, StyleSheet, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { pokemonStore } from '../store/pokemonStore'


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
    const pokemonStoreDataKey = pokemonStore.dataPokemon[pokemonStore.keyPokemon]
    const image = 'https://gabbyapp.com/' + pokemonStoreDataKey.picture

    return <>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.conteiner}>
                <Image
                    source={{ uri: image }}
                    style={styles.image}
                />
                <Text style={styles.title}>{pokemonStoreDataKey.name}</Text>
            </View>
            <View style={styles.conteinerDescription}>
                <KeyValueComponent title={'Вес'} value={pokemonStoreDataKey.weight}/>
                <KeyValueComponent title={'Рост'} value={pokemonStoreDataKey.height}/>
                <KeyValueComponent title={'Тип'} value={pokemonStoreDataKey.type}/>
                <KeyValueComponent style={{flexDirection: 'column'}} title="Описание" value={pokemonStoreDataKey.description} />
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
       marginTop: 10,
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