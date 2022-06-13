# 🌙 =  Moon Farm =  🌱
## _E-commerce del Pueblo Pelícano_ 🛒

¡Hola y bienvenid@ a mí página! Mi nombre es Tomás y soy el desarrollador.

Moon Farm es un e-commerce basado en el juego [Stardew Valley®](https://www.stardewvalley.net/), en el mismo hice una simulación de venta de productos que aparecen en el mismo, generando un sitio completamente funcional con base en React.

<img src="src/resources/gif/moonFarm.gif" alt="NavigationDemo" width="550"/>

[HD DEMO](https://streamable.com/12etwk) 🎬

## = Paginas = 📄

La pagina se divide en las siguientes secciones:

- _Index_: 

    La página principal, en la misma se puede observar una descripción de la misma, además de la presentación de la barra de navegación.
    El mismo modifica su estilo automáticamente si se ingresa en una franja horaria de 19HS - 6HS.

- _Tienda_:

    La tienda tiene como propósito presentar todos los productos a la venta, agrupándolos por estaciones en su presentación, para luego dividir los mismos en diferentes tiers/bundles, dependiendo de su valor y contenido, dentro de ellos se pueden encontrar la descripción individual de cada uno de los mismos, con sus respectivos productos y recetas, además del stock disponible y la forma de añadirlos al carrito.
    Con respecto al stock, este se toma con base en la base de datos de FireBase, se modifica con cada compra concretada y se deshabilita la forma de añadirlo al carrito si el stock llega a 0.

- _Carrito_:

    El carrito presenta un link directo a la tienda cuando está vacío, de la misma forma cuando este tiene algún producto, procede a mostrarlo en pantalla, dando la oportunidad de eliminar uno o todos los objetos del mismo.
    El carrito es persistente, el mismo queda guardado al recargar la página.
    Cuando se eligen los objetos se habilita el formulario, este procede a armar una orden de compra que es subida a la base de datos y modifica la lista de productos en la misma.
    El formulario es funcional, dado que se usan los datos para enviar un mail al usuario a través de la librería de EmailJS.


## = Librerías = 📚
Para la realización de la misma hice uso de las siguientes librerías

| LIBRERÍA | VERSIÓN | DESCRIPCIÓN |
| ------ | ------ | ------ |
| [React Bootstrap](https://react-bootstrap.github.io/getting-started/introduction) | v2.3.1 | Framework diseñado para facilitar componentes con JS y estilos CSS, los cuales utilice para dar estilos base y modificarlos en el archivo scss individual |
| [React Router Dom](https://v5.reactrouter.com/web/guides/quick-start) | v6.3.0 | Colección de componentes que facilitan la navegación entre páginas en React, el cual use para la navegación dinámica de la misma |
| [React Icons](https://react-icons.github.io/react-icons/) | v6.1.1 | Colección de iconos usado para el componente `` |
| [FireBase](https://firebase.google.com/docs) | v9.8.1 | Base de datos provista por Google, utilizada para guardar la lista de productos y las órdenes de compra |
| [Sass](https://sass-lang.com/documentation/) | v1.51.0 | Pre-procesador de CSS, utilizado para darle más funcionalidades a CSS, el cual use para crear y reutilizar estilos |
| [React Hot Toast](https://react-hot-toast.com/docs) | v2.2.0 | Paquete que facilita la creación, estilizado y utilización de alertas, el cual utilice para las alertas de la orden de compra |
| [EmailJS](https://www.emailjs.com/docs/) | v3.6.2 | API utilizada para enviar Emails automáticamente con base en JS, utilizado para darle una utilidad al formulario más allá de generar la orden de compra |
 
## = Deploy = ✔️
El deploy de la misma está hecha gracias a [Netlify](https://www.netlify.com/) y se puede acceder desde el siguiente link:
https://moon-farm-coder.netlify.app/

----------------------------------------------------------------------------
¡Gracias por visitar mi página! Espero que la disfrutes.

## = Tomas Lugo = 📝

## 💻 [LinkedIn](https://www.linkedin.com/in/lugotomasleandro/) - 📧 [Mail](mailto:lugoleandro@hotmail.com)