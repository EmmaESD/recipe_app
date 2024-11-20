import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="random"
        options={{
          title: "Recette Aléatoire",
          tabBarIcon: ({ color }) => (
            <Ionicons name="shuffle-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="MealListItem"
        options={{
          title: "Toutes les recettes",
          tabBarIcon: ({ color }) => (
            <Ionicons name="newspaper-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="create-meal"
        options={{
          title: "créer un recette",
          tabBarIcon: ({ color }) => (
            <Ionicons name="newspaper-outline" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
