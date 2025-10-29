import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Link } from "expo-router"
import { useUser } from "../hooks/useUser";


export default function signup({ onBack }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useUser()

  const handleSignUp = async () => {
    try {
          await register(email, password)
        } catch (error) {

        }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.signupContainer}>
        {/* FIXED BACK BUTTON */}
        <Link href="/" asChild>
          <TouchableOpacity style={styles.backBtn}>
            <Text style={{ fontSize: 18 }}>← Outingo</Text>
          </TouchableOpacity>
        </Link>

        <Text style={styles.signupTitle}>Create new{"\n"}Account</Text>

        {/* FIXED LOGIN LINK */}
        <Link href="/login">
          <Text style={styles.signupHint}>Already Registered? Log in here.</Text>
        </Link>

        <View style={{ height: 24 }} />

        {/* Name Field */}
        <View style={styles.field}>
          <Text style={styles.fieldLabel}>NAME</Text>
          <TextInput
            style={styles.fieldInput}
            placeholder="Jiara Martins"
          />
        </View>

        {/* Email Field */}
        <View style={styles.field}>
          <Text style={styles.fieldLabel}>EMAIL</Text>
          <TextInput
            style={styles.fieldInput}
            placeholder="hello@reallygreatsite.com"
            keyboardType="email-address"
            onChangeText={setEmail}
            value={email}
          />
        </View>

        {/* Password Field */}
        <View style={styles.field}>
          <Text style={styles.fieldLabel}>PASSWORD</Text>
          <TextInput
            style={styles.fieldInput}
            placeholder="******"
            secureTextEntry
            onChangeText={setPassword}
            value={password}
          />
        </View>

        <TouchableOpacity style={styles.signupBtn} onPress={handleSignUp}>
          <Text style={styles.signupBtnText}>sign up</Text>
        </TouchableOpacity>

        <View style={{ height: 80 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#fff" },
  signupContainer: { paddingHorizontal: 28, paddingTop: 18 },
  backBtn: { marginBottom: 6 },
  signupTitle: {
    fontSize: 38,
    fontWeight: "900",
    lineHeight: 44,
    marginTop: 8,
  },
  signupHint: {
    color: "#666",
    marginTop: 6,
    marginBottom: 12,
  },
  field: { marginTop: 14 },
  fieldLabel: {
    color: "#777",
    fontSize: 12,
    marginBottom: 6,
    letterSpacing: 1,
  },
  fieldInput: {
    borderRadius: 6,
    height: 54,
    borderWidth: 1,
    borderColor: "#111",
    paddingHorizontal: 14,
    justifyContent: "center",
    fontSize: 16,
  },
  signupBtn: {
    height: 56,
    backgroundColor: "#111",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 22,
  },
  signupBtnText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
    textTransform: "lowercase",
  },
});
