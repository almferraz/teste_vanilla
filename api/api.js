const q = (e) => document.querySelector(e);
const qa = (e) => document.querySelectorAll(e);

const vitrineApi = fetch('https://corebiz-test.herokuapp.com/api/v1/products');

vitrineApi
  .then((r) => r.json())
  .then((lista) => {
    // console.log(lista);

    lista.map((item, index) => {
      // console.log(item);
      let itens = q('.modelo .itens').cloneNode(true);
      // preencher as informações
      itens.querySelector('.imageUrl img').src = item.imageUrl;
      itens.querySelector('.productName').innerHTML = item.productName;
      itens.querySelector('.stars').innerHTML = item.stars;

      q('.itens-area').append(itens);
    });
  });
