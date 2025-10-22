import { View, useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'
import React from 'react'

const ThemedView = ({ style, children, ...props }) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light //defaults to life in case of crash

  return (
    <View 
    style = {[{backgroundColor: theme.background}, style]}
    {...props}
    >
        {children}
    </View>
  )
}

export default ThemedView