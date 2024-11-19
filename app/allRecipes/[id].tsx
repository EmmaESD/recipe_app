import { useLocalSearchParams } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

export default function RecipeDetailsScreen() {
  // permet de récuperer l'id de la recette sur laquelle on a cliqué ?
  const { id } = useLocalSearchParams();

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

  //Cette fonction permet de chercher la recette en fonction de l'id selectionné
  const recipe = meals.find((recipe) => recipe.id === parseInt(id));
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/recipe_app_logo_circular.png")}
          style={styles.image}
        />
        <Text style={styles.h1}>Cookio</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.category}>{recipe.category}</Text>
        <Text style={styles.h1}>Details de la recette {id}</Text>
        <Text style={styles.h2}>{recipe.title}</Text>
        <Image source={{ uri: recipe.image }} style={styles.imageContent} />
        <Text>{recipe.description}</Text>
      </View>
    </View>
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
    width: 50,
    textAlign: "center",
    padding: 5,
    borderRadius: 10,
  },
});
