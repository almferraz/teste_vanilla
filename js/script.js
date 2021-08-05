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

/*****LOCAL STORAGE *********/

newslatter = () => {
  const news = document.getElementById('newslatter');
  news.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const btEuQuero = document.getElementById('btEuQuero]');
    const newslatter = {
      nome,
      email,
    };
    newslatterJson = JSON.stringify(newslatter);
    localStorage.setItem('cliente', newslatterJson);
    alert('Salvo com sucesso');
  });
};
newslatter();
