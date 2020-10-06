import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { StyleProp, ViewStyle, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

interface FavoritesButtonComponentProps {
    style?: StyleProp<ViewStyle>
}

export const FavoritesButtonComponent: React.FC<FavoritesButtonComponentProps> = props => {
    const { style } = props
    const navigation = useNavigation()

    return <View style={styles.container}>
        <TouchableOpacity
            style={styles.containerImage}
            onPress={() => navigation.navigate('Favorites')}
        >
            <Icon name='star' size={25} color='#065' />
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    containerImage: {

        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        width: 60,
        height: 60,
        backgroundColor: 'rgba(255,255,255,0.9)',
    },
    container: {
        position: 'absolute',
        justifyContent: "flex-end",
        alignItems: 'flex-end',
        bottom: 10,
        right: 10,
        zIndex: 1,

    }
})