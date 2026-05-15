const fruits = [
  { id: 1, name: "Maçã", color: ["Vermelha", "azul"], price: 3.5 },
  { id: 2, name: "Banana", color: ["Amarela"], price: 2.0 },
  { id: 3, name: "Uva", color: ["Roxa"], price: 4.2 },
  { id: 4, name: "Laranja", color: ["Laranja"], price: 3.0 },
];

class Fruit {
  constructor(name, color, price) {
    this.id = Math.floor(Math.random() * 999999);
    this.name = name;
    this.color = color;
    this.price = price;
  }
}

export const fruitsController = {
  // Requisiçao de todos os objetos de frutas retronando em json para o front end
  index: (req, res) => {
    res.json(fruits);
  },

  //Requisiçao para buscar frutas no array e retornar em json
  showFruitById: (req, res) => {
    const { id } = req.params;

    const fruit = fruits.find((fruit) => fruit.id === +id);

    if (!fruit) {
      res.json({ message: "fruit not Found" });
    } else {
      res.json(fruit);
    }
  },

  //Requisiçao para salvar frutas
  saveFruit: (req, res) => {
    const { name, color, price } = req.body;
    const newFruit = new Fruit(name, color, price);
    fruits.push(newFruit);

    res.status(201).json(newFruit);
  },

  //Requisiçao para adicionar cor a uma fruta
  addColor: (req, res) => {
    const { id } = req.params;
    const { color } = req.body;

    const fruitIndex = fruits.findIndex((fruit) => fruit.id === +id);

    if (fruitIndex === -1) {
      return res.status(404).json({ message: "fruta nao encontrada" });
    }

    if (fruits[fruitIndex].color.includes(color)) {
      return res.status(400).json({ message: "cor invalida" });
    }

    fruits[fruitIndex].color.push(color);

    res.json(fruits[fruitIndex]);
  },

  // Requisiçao para alterar Fruta
  editFruit: (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;

    const fruitIndex = fruits.findIndex((fruit) => fruit.id === +id);

    if (fruitIndex === -1) {
      return res.status(404).json({ message: "fruta nao encontrada" });
    }

    if (typeof name === "string") {
      fruits[fruitIndex].name = name;
    }

    if (typeof price === "number") {
      fruits[fruitIndex].price = price;
    }

    res.json(fruits[fruitIndex]);
  },
  // Requisiçao para deletar fruta
  deleteFruit: (req, res) => {
    const { id } = req.params;
    const fruitIndex = fruits.findIndex((fruit) => fruit.id === +id);

    fruits.splice(fruitIndex, 1);

    return res.status(200).json({ message: "Fruta removida com sucesso" });
  },

  //Requisiçao para deletar cor da fruta
  deleteColorFruit: (req, res) => {
    const { id } = req.params;
    const { nameColor } = req.body;
    const fruitIndex = fruits.findIndex((fruit) => fruit.id === +id);
    if (fruitIndex === -1) {
      return res.status(404).json({ message: "fruta nao encontrada" });
    }

    if (
      typeof nameColor != "string" ||
      !fruits[fruitIndex].color.includes(nameColor)
    ) {
      return res.status(400).json({ message: "cor inexistente" });
    }

    fruits[fruitIndex].color = fruits[fruitIndex].color.filter(
      (color) => color !== nameColor,
    );

    res.status(200).json(fruits[fruitIndex]);
  },
};
