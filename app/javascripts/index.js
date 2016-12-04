import parameters from 'queryparams';
import fps from 'frame-interval';

window.parameters = parameters;

const DOM = {
  app: document.getElementById('app'),
};

const alphabet = '#abcdefghijklmnopqrstuvwxyz'.split('');

export default () => {
  const { amount } = parameters({
    amount: 0.01,
  });

  const render = factor => alphabet.map((x, i) => `
    <div class='row'>
      ${alphabet.map((y, n) => `
        <a class='cell cell--centered' style='transform: rotate(${n * i * factor}deg)'
          href='https://www.quora.com/sitemap/alphabetical_topics/${(x === '#' ? '0' : x) + (y === '#' ? '0' : y)}'>
          ${x + y}
        </a>
      `).join('')}
    </div>
  `).join('');

  fps(requestAnimationFrame)(24, i => {
    DOM.app.innerHTML = render(i * amount);
  })();
};
