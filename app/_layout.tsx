import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  //les stack permettent de rediriger vers les differents screen créés.
  //Le name correspond au nom du fichier du screen
  return (
    <GestureHandlerRootView>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Accueil" }} />
        <Stack.Screen name="meals" />
        <Stack.Screen name="user" />
      </Stack>
    </GestureHandlerRootView>
  );
}
