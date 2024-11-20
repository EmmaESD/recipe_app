import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

const CreateMealScreen = () => {
  const [name, setName] = useState("");
  const [ingredients, setingredients] = useState("");

  const onNameChange = (text: string) => {
    setName(text);
  };

  const onIngredientChange = (text: string) => {
    setingredients(text);
  };

  const onCreate = async () => {
    const response = await fetch(
      "https://themealdb.com/api/json/v1/1/create.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          ingredients,
        }),
      }
    );
  };
  return (
    <View>
      <Text>Créer une recette</Text>

      <TextInput placeholder="titre" onChangeText={onNameChange} />
      <TextInput placeholder="ingrédients" onChangeText={onIngredientChange} />

      <TouchableOpacity onPress={onCreate}>
        <Text>Envoyer</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateMealScreen;
