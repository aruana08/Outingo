//home page component for Outingo

import { StyleSheet, Text, View, Image, TouchableOpacity, Platform } from 'react-native'
import React from 'react'
import Logo from '../assets/img/outingo_logo.png'
import { Link } from 'expo-router'
// useFonts is imported but not used, so it's commented out for clean code.
// import { useFonts } from 'expo-font' 

// If you need your themed components, uncomment these:
// import ThemedView from '../components/ThemedView'
// import ThemedText from '../components/ThemedText'
// import Spacer from '../components/Spacer'


// This is a component (function)
const Home = () => {

    // IMPORTANT: Replaced the root <Text> with <View>
    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logo} />

            {/* Title */}
            <Text style={styles.title}>Outingo</Text>

            {/* Subtitle with margin replaced by a wrapper <View> for better layout control */}
            <View style={styles.subtitleContainer}>
                <Text style={styles.subtitleText}>
                    The social app meant to find your next activity
                </Text>
            </View>

            {/* Login Button */}
            <TouchableOpacity style={[styles.card, styles.authButtonMargin]}>
                <Link href="/login" style={styles.linkText}> 
                    Log In 
                </Link>
            </TouchableOpacity>

            {/* Sign Up Button */}
            <TouchableOpacity style={[styles.card, styles.authButtonMargin]}>
                <Link href="/signup" style={styles.linkText}> 
                    Sign Up 
                </Link>
            </TouchableOpacity>

            {/* Main Page Button */}
            <TouchableOpacity style={[styles.card, styles.authButtonMargin]}>
                <Link href="/card" style={styles.linkText}> 
                    Main Page 
                </Link>
            </TouchableOpacity>

        </View>
    )
}

export default Home

// create stylesheet object with css styling properties
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20, // Add padding to prevent content from touching edges
        backgroundColor: '#FFFFFF',
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginBottom: 20, // Added margin below the logo
    },
    title: {
        fontWeight: 'bold',
        fontSize: 32, // Made the title larger
        marginBottom: 10,
    },
    subtitleContainer: {
        marginBottom: 30, // Separates subtitle from buttons
        alignItems: 'center',
        textAlign: 'center',
        maxWidth: '80%', // Keeps the text contained
    },
    subtitleText: {
        fontSize: 16,
    },
    card: {
        backgroundColor: '#eee',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 8,
        minWidth: 250, // Ensures buttons have a consistent width
        alignItems: 'center',
        // 🛑 FIX: Replaced web 'boxShadow' with React Native shadow properties
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
            },
            android: {
                elevation: 5, // Android shadow property
            },
        }),
    },
    authButtonMargin: {
        marginBottom: 20,
    },
    // Style for the Link text to make it readable inside the button
    linkText: {
        color: '#333', // Dark text color for contrast with light gray background
        fontWeight: '600',
        fontSize: 16,
    }
});