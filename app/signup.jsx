import React from "react";
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

export default function signup({ onBack }) {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.signupContainer}>
        <TouchableOpacity onPress={onBack} style={styles.backBtn}>
          <Link href ='/' style={{ fontSize: 18 }}>← Outingo</Link>
        </TouchableOpacity>

        <Text style={styles.signupTitle}>Create new{"\n"}Account</Text>
        <Link href="/login" style={styles.signupHint} asChild>
        <Text>Already Registered? Log in here.</Text>
        </Link>

        <View style={{ height: 24 }} />

        <View style={styles.field}>
          <Text style={styles.fieldLabel}>NAME</Text>
          <TextInput style={styles.fieldInput} placeholder="Jiara Martins" />
        </View>

        <View style={styles.field}>
          <Text style={styles.fieldLabel}>EMAIL</Text>
          <TextInput
            style={styles.fieldInput}
            placeholder="hello@reallygreatsite.com"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.fieldLabel}>PASSWORD</Text>
          <TextInput style={styles.fieldInput} placeholder="******" secureTextEntry />
        </View>

        <View style={styles.field}>
          <Text style={styles.fieldLabel}>DATE OF BIRTH</Text>
          <TouchableOpacity style={[styles.fieldInput, styles.dateInput]}>
            <Text style={{ color: "#666" }}>Select</Text>
            <Text style={{ fontSize: 18 }}>📅</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.signupBtn}>
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
  dateInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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


