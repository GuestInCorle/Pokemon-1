import React from 'react'
import { StyleProp, ViewStyle, View } from 'react-native'

interface PokemonProps {
  style?: StyleProp<ViewStyle>
}

export const Pokemon: React.FC<PokemonProps> = props => {
  const { style } = props
  return <View style={style}></View>
}
