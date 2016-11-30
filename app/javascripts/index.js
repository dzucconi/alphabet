import parameters from 'queryparams';
import fps from 'frame-interval';

window.parameters = parameters;

const DOM = {
  app: document.getElementById('app'),
};

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

export default () => {
  const { amount } = parameters({
    amount: 0.1,
  });

  const render = factor => alphabet.map((x, i) => `
    <div class='row'>
      ${alphabet.map((y, n) => `
        <div class='cell' style='transform: rotate(${n * i * factor}deg)'>${x + y}</div>
      `).join('')}
    </div>
  `).join('');

  fps(requestAnimationFrame)(24, i => {
    DOM.app.innerHTML = render(i * amount);
  })();
};
