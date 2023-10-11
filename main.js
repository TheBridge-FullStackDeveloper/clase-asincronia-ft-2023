// console.log("1");
// console.log("2");
// setTimeout(() => {
//   console.log("3");
// }, 3000);
// console.log("4");

function pelarPatatas() {
  console.log("Pelar y cortar las patatas");
}

function freirPatatas() {
  console.log(
    "Introducimos las patatas cortadas en la sartén y que se cocinen"
  );
  setTimeout(() => {
    console.log("Patatas friendose");
  }, 1000);
}

function batirHuevos() {
  console.log("batimos los huevos");
}
function escurrirPatatas() {
  console.log("Quitamos con una espumadera las patatas de la sartén");
}
function mezclarIngredientes() {
  console.log(
    "Introducimos las patatas escurridas al bol con la cebolla y el huevo."
  );
}
function hacerUnaTortilla() {
  pelarPatatas();
  freirPatatas();
  batirHuevos();
  escurrirPatatas();
  mezclarIngredientes();
}
// hacerUnaTortilla()

// let miPromesa = new Promise((resolve, reject) => {
//   console.log("Te prometo que te saludaré cuando pasen 3 segundos!!");
//   setTimeout(() => {
//     resolve("Hola");
//   }, 3000);
// });

//consumir promesas
// miPromesa.then((res) => {
//   console.log(res);
//   //mas codigo
// });

// let haciendoTortilla = new Promise((resolve) => {
//   pelarPatatas();
//   freirPatatas();
//   batirHuevos();
//   setTimeout(() => {
//     resolve("Papas fritas");
//   }, 3000);
// });

// haciendoTortilla.then((res) => {
//   console.log(res);
//   escurrirPatatas();
//   mezclarIngredientes();
// });

let miPromesa = new Promise((resolve, reject) => {
  let number = 51;
  console.log("te prometo que " + number + " es menor igual que 50");
  if (number <= 50) {
    resolve(number + " es menor igual a 50");
  } else {
    reject(number);
  }
});

// miPromesa
//   .then((res) => console.log(res))
//   .catch((err) =>
//     console.error(
//       "Me has mentido, muy mal!!! El número " + err + " es mayor que 50"
//     )
//   );

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json()) //convierto la res en js
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

axios
  .post("https://jsonplaceholder.typicode.com/posts", {
    title: "New Post",
    body: "Body title",
  })
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

axios
  .put("https://jsonplaceholder.typicode.com/posts/3", {
    title: "Post updated",
    body: "Body updated",
    content:"yey",
    pepito:"eee"
  })
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

axios.delete("https://jsonplaceholder.typicode.com/posts/7")
.then(res=> console.log(res, "usuario borrado"))
.catch(err => console.error(err,"hubo un error al intentar eliminar el usuario"))
