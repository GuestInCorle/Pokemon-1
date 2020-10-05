import React from 'react'
import { StyleProp, ViewStyle, View } from 'react-native'

interface FlatlistPokemonProps {
  style?: StyleProp<ViewStyle>
}

export const FlatlistPokemon: React.FC<FlatlistPokemonProps> = props => {
  const { style } = props
    

  return <View style={style}></View>
}
