import { useEffect, useState } from "react";

export const useGetId = () => {
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

  return meals;
};
