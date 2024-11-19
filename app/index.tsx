import { useRouter } from "expo-router";
import {
  Button,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Index() {
  // Permet d'utiliser le hook use useRouter afin de naviguer vers differents screen.
  const router = useRouter();

  const meals = [
    {
      id: 1,
      title: "Spaghetti bolognaise",
      description: "Des pâtes avec de la sauce tomate et de la viande hachée",
      image:
        "https://assets.afcdn.com/recipe/20160419/14652_w1024h1024c1cx2420cy1872.jpg",
      category: "pasta",
    },
    {
      id: 2,
      title: "Salade César",
      description:
        "Une salade avec de la salade verte, du poulet, des croûtons et de la sauce César",
      image: "https://images.ricardocuisine.com/services/recipes/8440.jpg",
      category: "salad",
    },
    {
      id: 3,
      title: "Tarte aux pommes",
      description: "Une tarte sucrée avec des pommes",
      image:
        "https://images.pexels.com/photos/5500480/pexels-photo-5500480.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "dessert",
    },
    {
      id: 4,
      title: "Risotto aux champignons",
      description: "Un risotto crémeux avec des champignons",
      image:
        "https://images.pexels.com/photos/15058970/pexels-photo-15058970/free-photo-of-nourriture-aliments-assiette-repas.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "pasta",
    },
    {
      id: 5,
      title: "Salade niçoise",
      description:
        "Une salade avec des tomates, des oeufs, des olives, du thon et des haricots verts",
      image:
        "https://images.pexels.com/photos/29387634/pexels-photo-29387634.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "salad",
    },
    {
      id: 6,
      title: "Tiramisu",
      description:
        "Un dessert italien avec du café, des biscuits et du mascarpone",
      image:
        "https://images.pexels.com/photos/29460805/pexels-photo-29460805.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "dessert",
    },
  ];

  //cette fonction permet de compartimenter le tableau et de selectionner
  //uniquement les 3 derniers elements.
  const lastThreeMeals = meals.slice(-3);

  //permet de naviguer vers un page
  const handleNavigateToAllRecipes = () => {
    router.push("allRecipes");
  };

  //permet de naviguer vers une page avec son ID
  const handleNavigateToDetails = (recipeId: Number) => {
    router.push("allrecipes/" + recipeId);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require("../assets/images/recipe_app_logo_circular.png")}
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
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.recipeCard}>
                <Text>{item.title}</Text>
                <Image source={{ uri: item.image }} style={styles.image} />
                <Button
                  title="Voir la recette"
                  onPress={() => handleNavigateToDetails(item.id)}
                />
              </View>
            )}
          />
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
    padding: 20,
    gap: 40,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
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
