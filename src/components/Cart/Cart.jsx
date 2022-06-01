import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/CartContext";
import { useNightContext } from "../../context/NightContext/NightContext";
import "./Cart.scss";

const Cart = () => {
  const [customerOrder, setCustomerOrder] = useState({});

  const { cartList, clearCart, removeFromCart, totalOfCart } = useCartContext();

  const { isNight } = useNightContext();

  function getDataForOrder() {
    // setCustomerOrder({
    //   buyer: { name, phone, email },
    //   items: [{ id, title, price }],
    //   total
    // });
    console.log(customerOrder);
    setCustomerOrder({
      buyer: {
        customerName: "tomas",
        customerPhone: 1155224433,
        customerEmail: "lugoleandro@hotmail.com",
      },
      items: cartList.map((itemForOrder) => ({
        id: itemForOrder.id,
        title: `${itemForOrder.season}, bundle ${itemForOrder.detailUrl}`,
        price: itemForOrder.price * itemForOrder.qtyOnCart,
      })),
      totalOfCart,
    });
  }

  let packList = [{
    season: "primavera",
    id: "B1-SG",
    idForItem: "B1-SGItem",
    className: "silver",
    detailUrl: "plata",
    price: 60,
    stock: 14,
    image1: "https://i.imgur.com/kDq8PJi.png",
    prodName1: "Papa",
    prodDesc1: "Un tubérculo cultivado en muchas zonas.",
    quantity1: 10,
    image2: "https://i.imgur.com/k2LWKUl.png",
    prodName2: "Cafe",
    prodDesc2: "Plántalo en verano para tener un cafeto.",
    quantity2: 10,
    image3: "https://i.imgur.com/xTsjp3F.png",
    prodName3: "Allium azul",
    prodDesc3: "Su flor crece con forma de esfera para invitar al máximo de mariposas posible.",
    quantity3: 10,
    image4: "https://i.imgur.com/2c3oyBa.png",
    prodName4: "Tulipan",
    prodDesc4: "La más popular de las flores de primavera, y tiene un aroma dulce muy suave.",
    quantity4: 10,
    image5: "https://i.imgur.com/tk1P6aa.png",
    prodName5: "Frambuesa",
    prodDesc5: "Una baya de primavera con el sabor del bosque.",
    quantity5: 10,
},
{
    season: "primavera",
    id: "B2-SG",
    idForItem: "B2-SGItem",
    className: "gold",
    detailUrl: "oro",
    price: 95,
    stock: 21,
    image1: "https://i.imgur.com/HKgKklR.png",
    prodName1: "Coliflor",
    prodDesc1: "Valiosa, pero de crecimiento lento. A pesar de su palidez, sus cabezuelas están llenas de nutrientes.",
    quantity1: 10,
    image2: "https://i.imgur.com/ZvyGDjN.png",
    prodName2: "Col rizada",
    prodDesc2: "Sus hojas brillantes quedan genial en sopas y sofritos.",
    quantity2: 10,
    image3: "https://i.imgur.com/BUvGdbA.png",
    prodName3: "Judia verde",
    prodDesc3: "Una jugosa judía con un crujido fresco.",
    quantity3: 10,
    image4: "https://i.imgur.com/74hW90n.png",
    prodName4: "Fresa",
    prodDesc4: "Una fruta dulce, jugosa y de atractivo color rojo, muy apreciada.",
    quantity4: 10,
},
{
    season: "primavera",
    id: "B3-SG",
    idForItem: "B3-SGItem",
    className: "iridium",
    detailUrl: "iridio",
    price: 120,
    stock: 11,
    image1: "https://i.imgur.com/sB2Xpzt.png",
    prodName1: "Ruibarbo",
    prodDesc1: "Sus tallos son tremendamente agrios, pero conforman un buen postre si se edulcoran.",
    quantity1: 10,
    image2: "https://i.imgur.com/8HxLxel.png",
    prodName2: "Puerro",
    prodDesc2: "Un delicioso pariente de la cebolla.",
    quantity2: 10,
    image3: "https://i.imgur.com/GCt2WZh.png",
    prodName3: "Chirivia",
    prodDesc3: "Un delicioso pariente de la cebolla.",
    quantity3: 10,
    image4: "https://i.imgur.com/TcBuPzc.png",
    prodName4: "Ajo",
    prodDesc4: "Añade un toque punzante y maravilloso a los platos. El ajo de alta calidad puede ser muy picante.",
    quantity4: 10,
},
{
    season: "verano",
    id: "B1-SM",
    idForItem: "B1-SMItem",
    className: "silver",
    detailUrl: "plata",
    price: 60,
    stock: 13,
    image1: "https://i.imgur.com/9InoqAj.png",
    prodName1: "Arandano",
    prodDesc1: "Una baya muy popular que se dice tiene muchos beneficios para la salud. Su piel azulada es la que tiene la mayor concentración de nutrientes.",
    quantity1: 10,
    image2: "https://i.imgur.com/ZFPwMhA.png",
    prodName2: "Lupulo",
    prodDesc2: "Una flor amarga y ácida que se usa para dar sabor a la cerveza.",
    quantity2: 10,
    image3: "https://i.imgur.com/Rl2JLgq.png",
    prodName3: "Girasol",
    prodDesc3: "Hay un mito que dice que siempre gira buscando el sol.",
    quantity3: 10,
    image4: "https://i.imgur.com/YNNrc3P.png",
    prodName4: "Amapola",
    prodDesc4: "Además de su colorida flor, la amapola tiene usos culinarios y medicinales.",
    quantity4: 10,
    image5: "https://i.imgur.com/pSBkrXu.png",
    prodName5: "Helecho",
    prodDesc5: "Sus brotes tiernos son una especialidad comestible.",
    quantity5: 10,
},
{
    season: "verano",
    id: "B2-SM",
    idForItem: "B2-SMItem",
    className: "gold",
    detailUrl: "oro",
    price: 95,
    stock: 26,
    image1: "https://i.imgur.com/4mcKop6.png",
    prodName1: "Maiz",
    prodDesc1: "Uno de los cereales más populares. Sus mazorcas frescas y dulces son un clásico del verano.",
    quantity1: 10,
    image2: "https://i.imgur.com/jxqBKlm.png",
    prodName2: "Lombarda",
    prodDesc2: "Se usa a menudo en ensaladas y chucrut. Su color puede variar entre lila, azul y amarillo verdoso según las condiciones del suelo.",
    quantity2: 10,
    image3: "https://i.imgur.com/vhMn4ry.png",
    prodName3: "Melon",
    prodDesc3: "Un capricho fresco y dulce de verano.",
    quantity3: 10,
    image4: "https://i.imgur.com/e4lcjs4.png",
    prodName4: "Lentejuela",
    prodDesc4: "Una flor tropical que prospera con el aire húmedo del verano. Tiene un aroma dulce y fuerte.",
    quantity4: 10,
},
{
    season: "verano",
    id: "B3-SM",
    idForItem: "B3-SMItem",
    className: "iridium",
    detailUrl: "iridio",
    price: 120,
    stock: 4,
    image1: "https://i.imgur.com/lREVwys.png",
    prodName1: "Tomate",
    prodDesc1: "Rico y ligeramente agrio, el tomate tiene una gran variedad de usos en la cocina.",
    quantity1: 10,
    image2: "https://i.imgur.com/oFKLcDR.png",
    prodName2: "Rabano",
    prodDesc2: "Una raíz crujiente y refrescante con un toque de pimienta si se come crudo.",
    quantity2: 10,
    image3: "https://i.imgur.com/6gpNdHH.png",
    prodName3: "Chile",
    prodDesc3: "Pica como un demonio, pero tiene un toque de dulzura.",
    quantity3: 10,
    image4: "https://i.imgur.com/afgRwSb.png",
    prodName4: "Carambola",
    prodDesc4: "Una fruta muy jugosa que crece en climas cálidos y húmedos. Ligeramente dulce con un matiz ácido.",
    quantity4: 10,
},
{
    season: "otoño",
    id: "B1-AU",
    idForItem: "B1-AUItem",
    className: "silver",
    detailUrl: "plata",
    price: 60,
    stock: 30,
    image1: "https://i.imgur.com/p5Et1RE.png",
    prodName1: "Ñame",
    prodDesc1: "Un tubérculo rico en almidón, con mucha versatilidad culinaria.",
    quantity1: 10,
    image2: "https://i.imgur.com/KFivjtP.png",
    prodName2: "Col china",
    prodDesc2: "Sus hojas verdes y sus tallos fibrosos son sanos y deliciosos.",
    quantity2: 10,
    image3: "https://i.imgur.com/q6JA44w.png",
    prodName3: "Baya dulce",
    prodDesc3: "Es, con diferencia, lo más dulce que has olido nunca.",
    quantity3: 10,
    image4: "https://i.imgur.com/KPOsupB.png",
    prodName4: "Rosa hada",
    prodDesc4: "Según una antigua leyenda popular, el olor de esta flor atrae a las hadas.",
    quantity4: 10,
    image5: "https://i.imgur.com/oSLCEbo.png",
    prodName5: "Mora",
    prodDesc5: "Un manjar de principios de otoño.",
    quantity5: 10,
},
{
    season: "otoño",
    id: "B2-AU",
    idForItem: "B2-AUItem",
    className: "gold",
    detailUrl: "oro",
    price: 95,
    stock: 13,
    image1: "https://i.imgur.com/xmXyxxT.png",
    prodName1: "Alcachofa",
    prodDesc1: "El capullo de un cardo. Sus hojas espinosas esconden un interior carnoso y sustancioso.",
    quantity1: 10,
    image2: "https://i.imgur.com/UIY81fV.png",
    prodName2: "Grosella",
    prodDesc2: "Estas bayas ácidas y rojas se comen mucho en invierno.",
    quantity2: 10,
    image3: "https://i.imgur.com/a7R4cld.png",
    prodName3: "Remolacha",
    prodDesc3: "Una raíz dulce y sustanciosa. Además, sus hojas son excelentes para las ensaladas.",
    quantity3: 10,
    image4: "https://i.imgur.com/YxG5FzY.png",
    prodName4: "Maiz",
    prodDesc4: "Uno de los cereales más populares. Sus mazorcas frescas y dulces son un clásico del verano.",
    quantity4: 10,
},
{
    season: "otoño",
    id: "B3-AU",
    idForItem: "B3-AUItem",
    className: "iridium",
    detailUrl: "iridio",
    price: 120,
    stock: 9,
    image1: "https://i.imgur.com/zUqbusq.png",
    prodName1: "Berenjena",
    prodDesc1: "Una verdura pariente del tomate, rica y saludable. Es deliciosa frita o en estofados.",
    quantity1: 10,
    image2: "https://i.imgur.com/KD2ARie.png",
    prodName2: "Calabaza",
    prodDesc2: "Una de las estrellas del otoño, cultivada por sus semillas crujientes y su carne de sabor delicado. Además, su cáscara hueca puede tallarse para hacer decoraciones festivas.",
    quantity2: 10,
    image3: "https://i.imgur.com/Sg4uh9S.png",
    prodName3: "Uva",
    prodDesc3: "Un dulce racimo de fruta.",
    quantity3: 10,
    image4: "https://i.imgur.com/ty8bZ7t.png",
    prodName4: "Amaranto",
    prodDesc4: "Un cereal lila cultivado por una antigua civilización.",
    quantity4: 10,
},
{
    season: "especiales",
    id: "B1-SP",
    idForItem: "B1-SPItem",
    className: "silver",
    detailUrl: "plata",
    price: 60,
    stock: 19,
    image1: "https://i.imgur.com/375s7Vs.png",
    prodName1: "Miel",
    prodDesc1: "Néctar dulce producido por las abejas.",
    quantity1: 10,
    image2: "https://i.imgur.com/hfuHQiV.png",
    prodName2: "Cereza",
    prodDesc2: "Es popular y suele madurar antes que otras frutas.",
    quantity2: 10,
    image3: "https://i.imgur.com/OkPGOVS.png",
    prodName3: "Naranja",
    prodDesc3: "Jugosa, intensa y rebosante de dulce aroma veraniego.",
    quantity3: 10,
    image4: "https://i.imgur.com/DU4SjMU.png",
    prodName4: "Melocoton",
    prodDesc4: "Un poco peludito al tacto.",
    quantity4: 10,
    image5: "https://i.imgur.com/jNkPBL7.png",
    prodName5: "Coco",
    prodDesc5: "El fruto del cocotero. Tiene muchos usos en la cocina.",
    quantity5: 10,
},
{
    season: "especiales",
    id: "B2-SP",
    idForItem: "B2-SPItem",
    className: "gold",
    detailUrl: "oro",
    price: 60,
    stock: 20,
    image1: "https://i.imgur.com/rxssQeQ.png",
    price: "70",
    prodName1: "Albaricoque",
    prodDesc1: "Una fruta tierna y pequeña con un hueso duro como una piedra.",
    quantity1: 10,
    image2: "https://i.imgur.com/PlER97J.png",
    prodName2: "Platano",
    prodDesc2: "Una dulce, almidonada fruta tropical.",
    quantity2: 10,
    image3: "https://i.imgur.com/Y7JJlj5.png",
    prodName3: "Mayonesa",
    prodDesc3: "Da ganas de untarla.",
    quantity3: 10,
    image4: "https://i.imgur.com/6V46Bp1.png",
    prodName4: "Pale Ale",
    prodDesc4: "Bebe con moderación.",
    quantity4: 10,
},
{
    season: "especiales",
    id: "B3-SP",
    idForItem: "B3-SPItem",
    className: "iridium",
    detailUrl: "iridio",
    price: 120,
    stock: 20,
    image1: "https://i.imgur.com/g9IuOCo.png",
    prodName1: "Mango",
    prodDesc1: "Una gran, dulce fruta tropical con un sabor único.",
    quantity1: 10,
    image2: "https://i.imgur.com/UFamyib.png",
    prodName2: "Manzana",
    prodDesc2: "Una fruta crujiente que se usa para hacer zumo y sidra.",
    quantity2: 10,
    image3: "https://i.imgur.com/2Ypt1jn.png",
    prodName3: "Queso",
    prodDesc3: "Queso normal y corriente.",
    quantity3: 10,
    image4: "https://i.imgur.com/c9XTkbb.png",
    prodName4: "Granada",
    prodDesc4: "Dentro de esta fruta hay racimos de jugosas semillas.",
    quantity4: 10,
},
];

let seasonList = [{
    name: "PRIMAVERA",
    seasonPackId: "S1",
    className: "spring",
    packUrl: "primavera",
},
{
    name: "VERANO",
    seasonPackId: "S2",
    className: "summer",
    packUrl: "verano",
},
{
    name: "OTOÑO",
    seasonPackId: "S3",
    className: "autumn",
    packUrl: "otoño"
},
{
    name: "ESPECIALES",
    seasonPackId: "S4",
    className: "specials",
    packUrl: "especiales",
}
];

function addAllObj() {
packList.forEach(object => {
    const db = getFirestore();
    const queryCollection = collection(db, 'products');
    addDoc(queryCollection, object)
    .then(console.log('todos los objetos añadidos'))
})
}
function addAllSeason() {
seasonList.forEach(season => {
    const db = getFirestore();
    const queryCollection = collection(db, 'categories');
    addDoc(queryCollection, season)
    .then(console.log('todas las estaciones añadidas'))
})
}

  return (
    <div
      className={`cartContainer text-center ${
        isNight ? "cartContainerNight" : ""
      }`}
    >
      {cartList.length === 0 ? (
        <>
          {" "}
          <h2>Tal vez deberías ir a buscar algo a la tienda...</h2>{" "}
          <Link
            to="/tienda"
            className={`btn mainButton w-25 m-auto ${
              isNight ? "mainButtonNight" : ""
            }`}
          >
            TIENDA &gt;
          </Link>{" "}
          <div className="w-100">
            <button onClick={()=>addAllObj()} className="w-25 mx-5 btn btn-primary">obj</button>
            <button onClick={()=>addAllSeason()} className="w-25 mx-5 btn btn-dark">all</button>
          </div>
        </>
      ) : (
        <>
          <table className={`table table-hover ${isNight ? "nightTable" : ""}`}>
            <thead>
              <tr>
                <th className="text-center" scope="col">
                  Producto
                </th>
                <th className="text-center" scope="col">
                  Cantidad
                </th>
                <th className="text-center" scope="col">
                  Precio
                </th>
                <th className="text-center" scope="col">
                  Eliminar
                </th>
              </tr>
            </thead>
            {cartList.map((productMapped) => (
              <tbody key={productMapped.id}>
                <tr data-productid={productMapped.id}>
                  <td className="text-center text-capitalize">
                    {productMapped.season}, {productMapped.detailUrl}
                  </td>
                  <td className="text-center">{productMapped.qtyOnCart}</td>
                  <td className="text-center">
                    ${productMapped.price * productMapped.qtyOnCart}
                  </td>
                  <td className="text-center">
                    <button
                      className="btn btn-danger"
                      onClick={(e) => removeFromCart(e)}
                    >
                      X
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
          <h3>Total: ${totalOfCart}</h3>
          <div className="d-flex justify-content-between">
            <button
              className={`btn mainButton m-auto w-25 ${
                isNight ? "mainButtonNight" : ""
              }`}
              onClick={() => {
                clearCart();
              }}
            >
              Vaciar carrito
            </button>
            <button
              className={`btn mainButton m-auto w-25 ${
                isNight ? "mainButtonNight" : ""
              }`}
              onClick={() => getDataForOrder()}
            >
              Terminar compra
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
