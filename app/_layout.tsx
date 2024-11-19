import { Stack } from "expo-router";

export default function RootLayout() {
  //les stack permettent de rediriger vers les differents screen créés.
  //Le name correspond au nom du fichier du screen
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Accueil", headerShown: false }}
      />
      <Stack.Screen
        name="recipes/index"
        options={{ title: "liste des recettes", headerShown: false }}
      />
      <Stack.Screen
        name="recipes/[id]"
        options={{ title: "Details d'une recette", headerShown: false }}
      />
    </Stack>
  );
}
