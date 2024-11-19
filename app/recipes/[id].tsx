import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function RecipeDetailsScreen() {
  // permet de récuperer l'id de la recette sur laquelle on a cliqué ?
  const { id } = useLocalSearchParams();

  const [meals, setMeals] = useState([]);

  useEffect(() => {
    (async () => {
      const mealJson = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const meals = await mealJson.json();
      setMeals(meals.meals[0]);
    })();
  }, []);

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

        <View style={styles.content}>
          <Text style={styles.category}>{meals.strCategory}</Text>
          <Text style={styles.h1}>Details de la recette {id}</Text>
          <Text style={styles.h2}>{meals.strMeal}</Text>
          <Image
            source={{ uri: meals.strMealThumb }}
            style={styles.imageContent}
          />
          <Text>{meals.strInstructions}</Text>
        </View>
        <View>
          <Text>cookio - tout droit réservé</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
