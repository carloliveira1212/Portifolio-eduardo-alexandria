/* ==========================================================================
   PÁGINA PROJETOS — monta as fichas a partir de dados.js
   • Para incluir um projeto novo, edite só o dados.js: este arquivo lê de lá.
   • Se a página tiver botões [data-filtro] (filtro por categoria), eles
     voltam a funcionar sozinhos.
   ========================================================================== */
(function () {
  'use strict';

  var alvo = document.querySelector('[data-lista-projetos]');
  if (!alvo || !window.DADOS || !window.Render) return;

  var R = window.Render;
  var projetos = window.DADOS.projetos || [];

  alvo.innerHTML = projetos.map(function (p) {
    return '<article class="card-proj" id="' + R.esc(p.id) + '" data-categoria="' + R.esc(p.categoria) + '" ' +
        'style="--tom:' + Number(p.tom) + '">' +
      '<div class="card-proj__visual">' + R.moldura(p) + '</div>' +
      '<div class="card-proj__texto">' +
        '<p class="card-proj__meta">' + R.esc(p.tipo) + '</p>' +
        '<h2>' + R.esc(p.titulo) + '</h2>' +
        '<p>' + R.esc(p.descricao) + '</p>' +
        R.ficha(p.ficha) +
        R.botoes(p, false) +
      '</div>' +
    '</article>';
  }).join('');

  // Filtros por categoria (opcional)
  var botoes = [].slice.call(document.querySelectorAll('[data-filtro]'));
  var contagem = document.querySelector('[data-contagem]');
  var cards = [].slice.call(alvo.querySelectorAll('.card-proj'));

  function filtrar(cat) {
    var n = 0;
    cards.forEach(function (c) {
      var mostra = cat === 'todos' || c.getAttribute('data-categoria') === cat;
      c.hidden = !mostra;
      if (mostra) n++;
    });
    botoes.forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-filtro') === cat ? 'true' : 'false');
    });
    if (contagem) contagem.textContent = n + (n === 1 ? ' projeto' : ' projetos');
  }

  botoes.forEach(function (b) {
    b.addEventListener('click', function () { filtrar(b.getAttribute('data-filtro')); });
  });
  if (botoes.length) filtrar('todos');

  // Link direto (projetos.html#id): rola até a ficha, que só existe depois do script
  if (location.hash.length > 1) {
    var alvoHash = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (alvoHash && alvoHash.scrollIntoView) alvoHash.scrollIntoView();
  }
})();
