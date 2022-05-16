import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

let productList = [
  {
    bundle: "spring",
    id: 101,
    product: "Papa",
    image: "src/resources/images/crops/spring/Potato.png",
    hasRecipe: true,
    quantity: 10,
    price: 25,
    stock: 22,
    name: "Croquetas de papa",
    ingredients: "500g de papas; Aceite; Sal; Pimienta",
    recipe:
      "Pelar y rallar las papas, colocarlas en un trapo y quitar el excedente de liquido. Calentar una sartén con aceite y agregar las papas en forma de disco, agregando la sal y la pimienta por encima. Cocinar vuelta y vuelta hasta conseguir una textura crocante y dorada por el exterior",
  },
  {
    bundle: "spring",
    id: 102,
    product: "Cafe",
    image: "src/resources/images/crops/spring/Coffee_Bean.png",
    hasRecipe: false,
    quantity: 10,
    price: 25,
    stock: 22,
    name: null,
    ingredients: null,
    recipe: null,
  },
  {
    bundle: "spring",
    id: 103,
    product: "Allium",
    image: "src/resources/images/crops/spring/Blue_Jazz.png",
    hasRecipe: false,
    quantity: 10,
    price: 25,
    stock: 22,
    name: null,
    ingredients: null,
    recipe: null,
  },
  {
    bundle: "spring",
    id: 104,
    product: "Tulipan",
    image: "src/resources/images/crops/spring/Tulip.png",
    hasRecipe: false,
    quantity: 10,
    price: 25,
    stock: 22,
    name: null,
    ingredients: null,
    recipe: null,
  },
  {
    bundle: "spring",
    id: 105,
    product: "Frambuesa",
    image: "src/resources/images/crops/spring/Blue_Jazz.png",
    hasRecipe: false,
    quantity: 10,
    price: 25,
    stock: 22,
    name: null,
    ingredients: null,
    recipe: null,
  },
  {
    bundle: "spring",
    id: 106,
    product: "Coliflor",
    image: "https://i.imgur.com/HKgKklR.png",
    hasRecipe: true,
    quantity: 10,
    price: 25,
    stock: 22,
    name: "Coliflor gratinada",
    ingredients:
      "1 coliflor; 125ml de leche; 2 huevos; queso rallado; pimienta; oregano; sal",
    recipe:
      "Partir la coliflor en pedazos y dejar cocer en una olla con poca agua salada. Precalentar el horno. En un bowl batir la leche y los huevos hasta tener una preparación homogénea, agregando la mitad del queso a la misma. Retirar la coliflor del fuego, escurrirla y colocarla en un molde para horno, bañándola con la mezcla liquida hecha previamente, agregando el resto del queso junto a los condimentos. Cocinar durante 20 minutos o hasta dorar",
  },
  {
    bundle: "spring",
    id: 107,
    product: "Col rizada",
    image: "src/resources/images/crops/spring/Kale.png",
    hasRecipe: true,
    quantity: 10,
    price: 25,
    stock: 22,
    name: "Sofrito",
    ingredients:
      "2 dientes de ajo; 1/4 de repollo; 1 paquete de col rizada; 2 cebollas; 1 zanahoria; 2 champiñones; aceite; 1 caldo a elección; sal; pimienta",
    recipe:
      "Colocar aceite en una sartén o wok, agregar los dientes de ajo y dorar revolviendo ocasionalmente para no quemarlo. Retirar del fuego y picar. Cortar las verduras duras en cubos y las horas en tiras, agregar las verduras al sartén usado previamente y remover hasta que estén blandos. Agregar el caldo, la sal y la pimienta a gusto, tapando y dejando cocinar el mismo al vapor por 5 minutos. Servir agregando el ajo picado por encima",
  },
  {
    bundle: "spring",
    id: 108,
    product: "Judia",
    image: "src/resources/images/crops/spring/Green_Bean.png",
    hasRecipe: false,
    quantity: 10,
    price: 25,
    stock: 22,
    name: null,
    ingredients: null,
    recipe: null,
  },
  {
    bundle: "spring",
    id: 109,
    product: "Fresa",
    image: "src/resources/images/crops/spring/Strawberry.png",
    hasRecipe: false,
    quantity: 10,
    price: 25,
    stock: 22,
    name: null,
    ingredients: null,
    recipe: null,
  },
  {
    bundle: "spring",
    id: 110,
    product: "Ruibarbo",
    image: "src/resources/images/crops/spring/Rhubarb.png",
    hasRecipe: true,
    quantity: 10,
    price: 25,
    stock: 22,
    name: "Tarta de ruibarbo",
    ingredients:
      "500g de ruibarbo; 175g de azúcar; 90g de harina común; 15g de manteca; masa de tarta",
    recipe:
      "Precalentar el horno a 230C. Colocar la masa en un molde, mezclar el azúcar y el harina, espolvoreando un cuarto de esta preparación sobre la masa. Agregar el ruibarbo cortado en cubos sobre la misma y agregar el resto de la mezcla. Agregar la manteca en trozos por toda la mezcla y tapar con el resto de la masa. Hornear por 15 minutos a fuego alto y luego cocinar por 40/45 minutos a 175C. Servir templado o frio",
  },
  {
    bundle: "spring",
    id: 111,
    product: "Puerro",
    image: "src/resources/images/crops/spring/Leek.png",
    hasRecipe: true,
    quantity: 10,
    price: 25,
    stock: 22,
    name: "Ensalada de puerro",
    ingredients:
      "3 puerros; 1 paquete de dientes de león; 1 aji morrón; 50g de nueces; aceite de oliva; sal; pimienta",
    recipe:
      "Cortar el puerro en rodajas finas, hervir durante 2 minutos y dejar reposar. Cortar el aji en cubos, cortar las hojas de diente de león y agregar ambos en un bowl junto a los puerros. Agregar el aceite, la sal y la pimienta, mezclando todo junto. Servir agregando las nueces picadas y las flores",
  },
  {
    bundle: "spring",
    id: 112,
    product: "Chirivia",
    image: "src/resources/images/crops/spring/Parsnip.png",
    hasRecipe: true,
    quantity: 10,
    price: 25,
    stock: 22,
    name: "Sopa de chirivía",
    ingredients:
      "150g de chirivía; 400g de zapallo; 1 cebolla; 500ml de agua; 500ml de leche, 15g de harina común; tomillo; vinagre; sal; pimienta",
    recipe:
      "Precalentar el horno a 200C, cortar la chirivía, el zapallo y la cebolla en cubos, agregar todo en un molde para horno con papel metálico en la base junto al tomillo con sal, aceite y pimienta. Cocinar por 30 minutos aproximadamente. Retirar y colocar en una olla con agua con fuego alto hasta que llegue a hervir, dejar cocinando por 10 minutos a fuego medio. Procesar los vegetales en la misma olla (o en una licuadora), agregando la mitad de la leche. Volver a ponerlo a fuego medio, agregando el resto de la leche mezclada con el harina y cocinar batiendo constantemente hasta conseguir la textura deseada, sin dejar que hierva",
  },
  {
    bundle: "spring",
    id: 113,
    product: "Ajo",
    image: "src/resources/images/crops/spring/Garlic.png",
    hasRecipe: false,
    quantity: 10,
    price: 25,
    stock: 22,
    name: null,
    ingredients: null,
    recipe: null,
  },
];

const ItemDetailContainer = () => {
  const [grabProduct, setGrabProduct] = useState({});

  const getFetch = new Promise((res) => {
    setTimeout(() => {
      res(productList);
    }, 2000);
  });

  useEffect(() => {
    getFetch
      .then((res) => res.find((item) => item.id === 106))
      .then((res) => setGrabProduct(res))
      .catch((err) => console.log(err))
      .finally(() => console.log("done"));
  }, []);

  return (
    <div className="d-flex flex-wrap w-100 justify-content-around gap-4 p-4">
      <ItemDetail img={grabProduct.image} name={grabProduct.product} price={grabProduct.price} recipe={grabProduct.recipe} />
    </div>
  );
};

export default ItemDetailContainer;
