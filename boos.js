let boos = document.querySelectorAll('.boo');
const DISTANCIA_PERCORRIDA = 100;

boos.forEach(booEl => {
  booEl.style.transition = 'all 250ms ease';

  booEl.addEventListener('click', e => {
    let booEl = e.currentTarget;
    let larguraDisponivelNaPagina = window.innerWidth;
    let alturaDisponivelNoContainer = booEl.parentElement.clientHeight;
    let estilos = window.getComputedStyle(booEl);

    // determina um novo (x,y) tentativo
    let novoX = larguraDisponivelNaPagina * Math.random();
    let novoY = alturaDisponivelNoContainer * Math.random();

    // altera as novas coordenadas para que o boo não percorrra
    // um distância muito grande, maior que suas pernas
    let normaDoVetor = Math.sqrt(Math.pow(novoX, 2) + Math.pow(novoY, 2));
    novoX = novoX / normaDoVetor * DISTANCIA_PERCORRIDA;
    novoY = novoY / normaDoVetor * DISTANCIA_PERCORRIDA;

    if (estilos.left) {
      booEl.style.left = `calc(${novoX}px - ${estilos.left})`;
    } else if (estilos.right) {
      booEl.style.right = `calc(${novoX}px - ${estilos.right})`;
    }

    if (estilos.top) {
      booEl.style.top = `calc(${novoY}px - ${estilos.top})`;
    } else if (estilos.bottom) {
      booEl.style.bottom = `calc(${novoY}px - ${estilos.bottom})`;
    }

  });
});
