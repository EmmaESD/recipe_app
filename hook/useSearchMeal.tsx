import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

export const useSearchMeal = () => {
  const { query } = useLocalSearchParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    (async () => {
      const mealJson = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const meals = await mealJson.json();

      // permet de trier les résultats dans l'ordre en fonction de la saisie du texte
      // To lowerCase permet de ne pas se fier aux majuscules et minuscules
      // filter permet de filtrer les données après leur récupération.
      //  sort trie les données par ordre alphabétique.
      // startWith verifie que le nom comment par la lettre de la recherche.
      const filteredAndSortedMeals = meals.meals
        ? meals.meals
            .filter((meal: string) =>
              meal.strMeal.toLowerCase().startsWith(query.toLowerCase())
            )
            .sort((a: string, b: string) => a.strMeal.localeCompare(b.strMeal))
        : [];

      setMeals(filteredAndSortedMeals);
    })();
  }, [query]);
  return meals;
};
