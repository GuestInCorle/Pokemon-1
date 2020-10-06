import React from 'react'
import { StyleProp, ViewStyle, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Pokemon } from '../store/Pokemon'
import { pokemonStore } from '../store/pokemonStore'

interface FavoriteIconComponentProps {
  style?: StyleProp<ViewStyle>
  item: boolean

}

export const FavoriteIconComponent: React.FC<FavoriteIconComponentProps> = props => {
  const { style, item } = props
  return <View style={style}>
       <Icon name={(item) ? 'star' : 'star-o'} size={25} color='#065' />
  </View>
}
