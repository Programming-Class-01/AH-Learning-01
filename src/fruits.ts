
// name: English, weight: oz
interface IFruit {
    name: Fruit;
    weight: number;
}

enum Fruit {
    Apple = "Apple",
    Banana = "Banana",
    Cantaloupe = "Cantaloupe",
    Dragonfruit = "Dragonfruit",
    Fig = "Fig",
    Grapefruit = "Grapefruit",
    Honeydew = "Honeydew",
}

const fruits: IFruit[] = [
    { "name": Fruit.Apple, "weight": 7 },
    { "name": Fruit.Banana, "weight": 6 },
    { "name": Fruit.Cantaloupe, "weight": 48 },
    { "name": Fruit.Dragonfruit, "weight": 17 },
    { "name": Fruit.Fig, "weight": 1 },
    { "name": Fruit.Grapefruit, "weight": 24 },
    { "name": Fruit.Honeydew, "weight": 96 },
]


export { IFruit, fruits };