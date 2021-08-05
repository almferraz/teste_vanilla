const vitrineApi = fetch('https://corebiz-test.herokuapp.com/api/v1/products');
const cartImg = document.querySelector('.cartImg');

vitrineApi
  .then((r) => r.json())
  .then((lista) => {
    // console.log(lista[0].imageUrl);
    // cartImg.textContent(lista[0].imageUrl);
    // lista.map((produtos) => {
    //   console.log(produtos);
    // });
  });

/* -------------------------------*/
//   const vitrineApi = fetch('https://corebiz-test.herokuapp.com/api/v1/products');

// vitrineApi
//   .then((r) => r.json())
//   .then((lista) => {
//     lista.map((produtos) => {
//       console.log(produtos);
//     });
//   });
