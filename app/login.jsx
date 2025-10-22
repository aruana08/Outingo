import React from "react";
import { Colors } from "../constants/Colors"

import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Link } from 'expo-router';

const login = ( { onBack } ) => {
  const colorScheme = useColorScheme() // React Hook that returns string value of current preferred color scheme app.json
  const theme = Colors[colorScheme] ?? Colors.light
   
  return (
    <SafeAreaView style={[styles.container, {backgroundColor: theme.background}]}>
      
      <TouchableOpacity onPress={onBack} style={styles.backBtn}>
        <Link href ='/' style={{ fontSize: 18 }}>← Outingo</Link>
      </TouchableOpacity>

      {/* App Header/Logo Area (Placeholder) */}
      <View style={styles.header}>
        <Text style={styles.logoText}>Outingo</Text>
      </View>

      {/* Title Section */}
      <View style={styles.titleSection}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>Sign in to continue.</Text>
        <Link href = "/signup" style = {styles.subtitle}> Need to Sign Up? Click Here </Link>
      </View>

      {/* Form Section */}
      <View style={styles.form}>
        {/* Email Input */}
        <Text style={styles.label}>EMAIL</Text>
        <TextInput
          style={styles.input}
          placeholder="hello@reallygreatsite.com"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          
        />

        {/* Password Input */}
        <Text style={styles.label}>PASSWORD</Text>
        <TextInput
          style={styles.input}
          placeholder="********"
          placeholderTextColor="#999"
          secureTextEntry // Hides the input text
          // value={password}
          // onChangeText={setPassword}
        />

        {/* Login Button */}
        <TouchableOpacity style={styles.button} onPress={() => console.log('Log In Pressed')}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

// --- Stylesheet for the UI ---

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20, // Add some horizontal padding to the screen
  },
  // Top Header/Logo (Simulating the 'Outingo' text in the top left)
  header: {
    paddingTop: 10,
    marginBottom: 40,
  },
  logoText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  // Title Section
  titleSection: {
    alignItems: 'center',
    marginBottom: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
  },
  // Form Section
  form: {
    width: '100%',
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000',
    marginTop: 20,
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#000', // Black border for the input box
    paddingHorizontal: 15,
    fontSize: 16,
  },
  // Button
  button: {
    height: 55,
    backgroundColor: '#000', // Black background
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40, // Space between last input and button
  },
  buttonText: {
    color: '#fff', // White text
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  backBtn: { marginBottom: 6 }
});

export default login;