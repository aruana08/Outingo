import React, { useState } from "react";
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { useUser } from "../hooks/useUser";

export default function Login({ onBack }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useUser();

  const handleSubmit = async () => {
    try {
          await login(email, password)
        } catch (error) {

        }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Link href="/" asChild>
        <TouchableOpacity style={styles.backBtn}>
          <Text style={{ fontSize: 18 }}>← Outingo</Text>
        </TouchableOpacity>
      </Link>


      <View style={styles.titleSection}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>Sign in to continue.</Text>
        <Link href="/signup" asChild>
          <TouchableOpacity>
            <Text style={styles.subtitle}>Need to Sign Up? Click Here</Text>
          </TouchableOpacity>
        </Link>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>EMAIL</Text>
        <TextInput style={styles.input} placeholder="hello@reallygreatsite.com" placeholderTextColor="#999" keyboardType="email-address" autoCapitalize="none" onChangeText={setEmail} value={email} />

        <Text style={styles.label}>PASSWORD</Text>
        <TextInput style={styles.input} placeholder="********" placeholderTextColor="#999" secureTextEntry value={password} onChangeText={setPassword} />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 20 },
  backBtn: { marginBottom: 6 },
  header: { paddingTop: 10, marginBottom: 40 },
  logoText: { fontSize: 16, fontWeight: "600", color: "#000" },
  titleSection: { alignItems: "center", marginBottom: 50 },
  title: { fontSize: 32, fontWeight: "bold", marginBottom: 5 },
  subtitle: { fontSize: 16, color: "#333" },
  form: { width: "100%" },
  label: { fontSize: 12, fontWeight: "600", color: "#000", marginTop: 20, marginBottom: 5 },
  input: { height: 50, borderWidth: 1, borderColor: "#000", paddingHorizontal: 15, fontSize: 16 },
  button: { height: 55, backgroundColor: "#000", justifyContent: "center", alignItems: "center", marginTop: 40 },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold", textTransform: "uppercase" },
});
