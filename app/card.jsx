import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  ScrollView,
  StatusBar,
  Platform,
} from "react-native";
import {Link} from 'expo-router';

const Card = ({ image, title, subtitle }) => (
  <ImageBackground
    source={image}
    style={styles.cardBg}
    imageStyle={styles.cardImageStyle}
    resizeMode="cover"
  >
    <View style={styles.cardOverlay}>
      <Text style={styles.cardSubtitle}>{subtitle}</Text>
      <Text style={styles.cardTitle}>{title}</Text>
    </View>
  </ImageBackground>
);

export default function card({ onGoToSignup }) {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.locationLabel}>Location</Text>
            <Text style={styles.locationCity}>Houston</Text>
          </View>

          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.roundIcon}>
              <Text>🔔</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.roundIcon}>
              <Text>⚙️</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.searchRow}>
          <View style={styles.searchBox}>
            <Text style={styles.searchIcon}>🔍</Text>
            <TextInput placeholder="Search" style={styles.searchInput} />
          </View>

          <TouchableOpacity style={styles.filterBtn}>
            <Text style={{ fontSize: 18 }}>⚙️</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.tagRow}>
          <View style={styles.tag}><Text>5 mi. Radius</Text></View>
          <View style={styles.tag}><Text>under $50</Text></View>
          <View style={styles.tag}><Text>birthday 🎉</Text></View>
        </View>

        <Text style={styles.sectionTitle}>Event Ideas</Text>

        <View style={{ gap: 14 }}>
          <Card
            image={require('../assets/img/coffee-shop.jpg')}
            subtitle="@best_reviewer"
            title="Coffee Shop Study"
          />

          <Card
            image={require('../assets/img/city-centre.png')}
            subtitle="@aruans"
            title="City Centre Trip"
          />

          <Card
            image={require('../assets/img/south-congress.jpg')}
            subtitle="@aruans"
            title="Congress Ave Scenic Walk"
          />
        </View>

        <View style={{ height: 36 }} />

        <TouchableOpacity style={styles.fakeNav} >
          <Link href = '/' style={{ color: "#fff", fontWeight: "600" }}>Go to Sign Up</Link>
        </TouchableOpacity>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 40,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  locationLabel: {
    color: "#666",
    fontSize: 14,
  },
  locationCity: {
    fontSize: 26,
    fontWeight: "800",
    marginTop: 4,
  },
  headerIcons: {
    flexDirection: "row",
    gap: 10,
  },
  roundIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#f3f3f3",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },

  searchRow: {
    flexDirection: "row",
    marginTop: 18,
    alignItems: "center",
  },
  searchBox: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#f6f6f6",
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 28,
    alignItems: "center",
  },
  searchIcon: { marginRight: 8, fontSize: 18 },
  searchInput: { flex: 1 },

  filterBtn: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#3e3e3e",
    marginLeft: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  tagRow: {
    flexDirection: "row",
    marginTop: 14,
    gap: 10,
  },
  tag: {
    backgroundColor: "#f2f2f2",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 18,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "800",
    marginTop: 22,
    marginBottom: 12,
  },

  cardBg: {
    height: 120,
    borderRadius: 14,
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  cardImageStyle: {
    borderRadius: 14,
  },
  cardOverlay: {
    backgroundColor: "rgba(0,0,0,0.22)",
    padding: 12,
  },
  cardSubtitle: {
    color: "rgba(255,255,255,0.9)",
    fontSize: 12,
  },
  cardTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    marginTop: 4,
  },

  fakeNav: {
    height: 52,
    borderRadius: 10,
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },
});
