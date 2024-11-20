import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text, View } from "react-native";

function userProfilDrawerItem() {
  return (
    <View>
      <Text>Profil</Text>
    </View>
  );
}

function UserSettingsDrawerItem() {
  return (
    <View>
      <Text>Paramètres</Text>
    </View>
  );
}

export default function UserDrawerLayout() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="profil"
        component={userProfilDrawerItem}
        options={{ title: "Profil" }}
      />
      <Drawer.Screen
        name="settings"
        component={UserSettingsDrawerItem}
        options={{ title: "Paramètres" }}
      />
    </Drawer.Navigator>
  );
}
