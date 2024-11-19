import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
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
            Créez vos recettes : Ajoutez facilement vos plats préférés avec des
            ingrédients, des étapes claires, et même des photos.
          </Text>
          <Text>
            Organisez tout : Classez vos recettes par catégorie ou utilisez des
            tags pour les retrouver rapidement.
          </Text>
          <Text>
            Cuisinez sans stress : Suivez un mode étape par étape pour réussir
            chaque plat comme un chef.
          </Text>
          <Text>
            Partagez vos créations : Faites découvrir vos recettes à vos proches
            d’un simple clic.
          </Text>
          <Text>
            Avec une interface moderne et intuitive, Cookio devient votre
            meilleur allié pour des repas réussis ! 😊
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 20,
    gap: 30,
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
  textContent: {
    display: "flex",
    gap: 10,
  },
  image: {
    width: 50,
    height: 50,
  },
  h1: {
    fontSize: 30,
  },
  h2: {
    fontSize: 20,
    textAlign: "center",
  },
});
