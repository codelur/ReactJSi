import { data } from "../utils/constants.js";

function Animal({ selectedAnimal }) {
  const animal = data.find((animalItem) => {
    return animalItem.name == selectedAnimal;
  }) ||
    data.find((animalItem) => {
      return animalItem.name == "monkey";
    }) || {
      name: "monkey",
      image: new URL("../assets/animals/monkey.jpg", import.meta.url).href,
    };

  return <img src={animal.image} alt={animal.name} />;
}

export default Animal;
