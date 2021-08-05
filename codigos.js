function testeApi() {
  var divNova = document.createElement('div');
  var conteudoNovo = document.createTextNode('Olá, cumprimentos!');
  divNova.appendChild(conteudoNovo);

  var divAtual = document.getElementById('div1');
  document.body.insertBefore(divNova, divAtual);
}
testeApi();
