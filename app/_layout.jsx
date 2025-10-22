import { Stack } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'
import { Colors } from "../constants/Colors"

const RootLayout = () => {
    const colorScheme = useColorScheme()
    //fall back default scheme if above hook returns null
    const theme = Colors[colorScheme] ?? Colors.light

    return (
        <>
        <StatusBar value = "auto"/>
        <Stack screenOptions = {{
        headerStyle: { backgroundColor: theme.navBackground },
        headerTintColor: theme.title,
        }}>
        <Stack.Screen name = "index" options = {{ title: 'Home'}} />
        <Stack.Screen name = "login" options = {{ title: 'Log In', headreShown: false }} />
        <Stack.Screen name = "signup" options = {{ title: 'Sign Up', headerShown: false}} />
        </Stack>
        </>
    )
}

export default RootLayout

const styles = StyleSheet.create({})