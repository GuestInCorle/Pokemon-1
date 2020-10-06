import React from 'react'
import { StyleProp, ViewStyle, View } from 'react-native'

interface FavoritesScreenProps {
  style?: StyleProp<ViewStyle>
}

export const FavoritesScreen: React.FC<FavoritesScreenProps> = props => {
  const { style } = props
  return <View style={style}>
      
  </View>
}
