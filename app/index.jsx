//home page component for Outingo

//in order to use those RN native components, we must import them at the top of the file
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Logo from '../assets/img/outingo_logo.png'
import { Link } from 'expo-router'
import { useFonts } from 'expo-font'
import ThemedView from '../components/ThemedView'

//this is a component (function)
const Home = () => {

  return (
    //similar to paragraph & div components in js, we have RN's native components similar like View & Text
    <ThemedView style = {styles.container}>
      <Image source= {Logo} style = {styles.logo}/>

      <Text style = {styles.title}>Outingo</Text>

      <Text style ={{marginTop: 10, marginBottom: 30}}> 
        The social app meant to find your next activity 
      </Text>
        <View style = {[styles.card, styles.authButtonMargin]}>
          <Link href="/login"> Log In </Link>
        </View>
 

      <View style = {[styles.card, styles.authButtonMargin]}>
        <Link href="/signup"> Sign Up </Link>
      </View>

      <View style = {[styles.card, styles.authButtonMargin]}>
        <Link href="/card"> Main Page </Link>
      </View>

      
      

    </ThemedView>
  )
} 
 
export default Home

//create stylesheet object with css styling properties
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18
  },
  card: {
    backgroundColor: '#eee',
    padding: 20,
    borderRadius: 5,
    boxShadow: '4px 4px rgba(0,0,0,0,1)'
  },
  authButtonMargin:{
    marginBottom: 20
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  }
})