import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function AllRecipesScreen() {
  const router = useRouter();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    (async () => {
      const mealJson = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s="
      );
      const meals = await mealJson.json();
      setMeals(meals.meals);
    })();
  }, []);

  // Permet de naviguer vers une page selectionnée par un id.
  const handleNavigateToDetails = (idMeal: Number) => {
    router.push("allrecipes/" + idMeal);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require("../../assets/images/recipe_app_logo_circular.png")}
            style={styles.image}
          />
          <Text style={styles.h1}>Cookio</Text>
        </View>
        <Text style={styles.h1}>Nos recettes</Text>
        <FlatList
          data={meals}
          renderItem={({ item }) => (
            <View style={styles.recipeCard}>
              <Text>{item.strMeal}</Text>
              <Image source={{ uri: item.strMealThumb }} style={styles.image} />
              <Button
                title="Voir la recette"
                onPress={() => handleNavigateToDetails(item.id)}
              />
            </View>
          )}
        />
        <View>
          <Text>Cookio - Tout droit réservé</Text>
        </View>
      </View>
    </ScrollView>
  );
}

// Permet de créer du css dans le fichier
const styles = StyleSheet.create({
  container: {
    display: "flex",
    paddingHorizontal: 20,
    paddingVertical: 80,
    gap: 40,
  },

  content: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    gap: 20,
  },

  recipeContainer: {
    display: "flex",
    gap: 30,
  },

  recipeCard: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    padding: 20,
    backgroundColor: "#e0dad1",
    marginBottom: 10,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  buttonCard: {
    width: 10,
  },
  textContent: {
    display: "flex",
    gap: 10,
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
});
