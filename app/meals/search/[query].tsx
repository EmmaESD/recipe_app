import { useSearchMeal } from "@/hook/useSearchMeal";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Button,
} from "react-native";

export default function queryScreen() {
  const meals = useSearchMeal();
  return (
    <View>
      <View style={styles.header}>
        <Image
          source={require("@/assets/images/recipe_app_logo_circular.png")}
          style={styles.image}
        />
        <Text style={styles.h1}>Cookio</Text>
      </View>
      <View>
        <Text>Votre recherche : {query}</Text>
      </View>
      <FlatList
        data={meals}
        renderItem={({ item }) => (
          <View style={styles.recipeCard}>
            <Text style={styles.h2}>{item.strMeal}</Text>
            <Image source={{ uri: item.strMealThumb }} style={styles.image} />
          </View>
        )}
      />
      <View>
        <Text>cookio - tout droit réservé</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  recipeCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 40,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 10,
  },
  recipeContainer: {
    display: "flex",
    gap: 30,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    gap: 20,
    padding: 30,
  },
  textContent: {
    display: "flex",
    gap: 10,
  },
  imageContent: {
    width: 200,
    height: 100,
  },
  image: {
    width: 100,
    height: 100,
  },
  h1: {
    fontSize: 30,
    textAlign: "center",
  },
  h2: {
    fontSize: 20,
    textAlign: "center",
  },
  category: {
    backgroundColor: "#d69533",
    width: 80,
    textAlign: "center",
    padding: 5,
    borderRadius: 10,
  },
});
