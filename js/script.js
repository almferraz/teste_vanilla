const q = (e) => document.querySelector(e);
const qa = (e) => document.querySelectorAll(e);

const vitrineApi = fetch('https://corebiz-test.herokuapp.com/api/v1/products');

vitrineApi
  .then((r) => r.json())
  .then((lista) => {
    // console.log(lista);

    lista.map((item, index) => {
      // console.log(item);
      let itens = q('.vitrineModelo .cartModelo').cloneNode(true);
      // preencher as informações
      itens.querySelector('.imageUrl img').src = item.imageUrl;
      itens.querySelector('.stars').innerHTML = item.stars;
      itens.querySelector('.productName').innerHTML = item.productName;
      itens.querySelector('.price').innerHTML = `R$ ${item.price}`;

      q('.vitrine').append(itens);
    });
  });

/* -------------------------------*/

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
