import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function queryScreen() {
  const { query } = useLocalSearchParams();

  const [meals, setMeals] = useState([]);

  useEffect(() => {
    (async () => {
      const mealJson = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const meals = await mealJson.json();
      setMeals(meals.meals[0]);
    })();
  }, []);

  return (
    <View>
      <Text>{meals.strMeal}</Text>
    </View>
  );
}
