import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Index() {
  // Permet d'utiliser le hook use useRouter afin de naviguer vers differents screen.
  const router = useRouter();
  const [meals, setMeals] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    (async () => {
      const mealJson = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s="
      );
      const meals = await mealJson.json();
      setMeals(meals.meals);
    })();
  }, []);
  //cette fonction permet de compartimenter le tableau et de selectionner
  //uniquement les 3 derniers elements.
  const lastThreeMeals = meals.slice(-3);

  //permet de naviguer vers un page
  const handleNavigateToAllRecipes = () => {
    router.push("/recipes");
  };

  //permet de naviguer vers une page avec son ID
  const handleNavigateToDetails = (idMeal: Number) => {
    router.push("/recipes/" + idMeal);
  };

  const handleSubmit = () => {
    router.push("/recipes/search/" + text);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require("@/assets/images/recipe_app_logo_circular.png")}
            style={styles.image}
          />
          <Text style={styles.h1}>Cookio</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.h2}>Bienvenue sur Cookio !</Text>
          <View style={styles.textContent}>
            <Text>
              Transformez votre cuisine avec une application conçue pour rendre
              vos recettes accessibles, organisées et simples à suivre !
            </Text>
            <Text>Pourquoi utiliser Cookio ?</Text>
            <Text>
              Cuisinez sans stress : Suivez un mode étape par étape pour réussir
              chaque plat comme un chef.
            </Text>
            <Text>
              Partagez vos créations : Faites découvrir vos recettes à vos
              proches d’un simple clic.
            </Text>
            <Text>
              Avec une interface moderne et intuitive, Cookio devient votre
              meilleur allié pour des repas réussis ! 😊
            </Text>
          </View>
        </View>
        <Button
          title="Voir les recettes"
          onPress={handleNavigateToAllRecipes}
        />
        <View style={styles.recipeContainer}>
          <Text style={styles.h2}>Nos dernières Recettes</Text>
          {/* //FlatList permet d'afficher les éléments d'un tableau en chargeant seulement
          //Les elements que l'on peut voir (lazy loading). */}
          <FlatList
            data={lastThreeMeals}
            // Ces deux lignes permettent de faire un scroll horizontal
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.recipeCard}>
                <Text>{item.strMeal}</Text>
                <Image
                  source={{ uri: item.strMealThumb }}
                  style={styles.image}
                />
                <Button
                  title="Voir la recette"
                  onPress={() => handleNavigateToDetails(item.idMeal)}
                />
              </View>
            )}
          />
          <View style={styles.inputContent}>
            <Text style={styles.h2}>Trouver une recette</Text>
            <TextInput
              style={styles.input}
              placeholder="Tapez ici"
              value={text}
              onChangeText={(value) => setText(value)}
            />
            <Button title="Rechercher" onPress={handleSubmit} />
          </View>
        </View>
        <View style={styles.footer}>
          <Text>cookio - tout droit réservé</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 20,
    gap: 40,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "100%",
    paddingHorizontal: 8,
    marginBottom: 16,
    borderRadius: 4,
  },
  inputContent: {
    display: "flex",
    gap: 10,
  },
  footer: {
    display: "flex",
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
    gap: 20,
  },
  recipeCard: {
    display: "flex",
    gap: 10,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#e0dad1",
    marginHorizontal: 10,
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
  },
  h2: {
    fontSize: 20,
    textAlign: "center",
  },
});
