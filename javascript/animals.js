async function loadProperties() {
  const response = await fetch("./properties.json");
  return response.json();
}
const properties = await loadProperties();
const animals = properties.animals;

console.log(animals);

const animalSelect = document.getElementById("animalSelect");
animals.forEach((animal) => {
  const option = document.createElement("option");
  option.value = animal.id;
  option.textContent = animal.name;
  animalSelect.appendChild(option);
});
