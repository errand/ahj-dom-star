import data from '../data.json';

(() => {
  const movies = [...data];
  const immutabelMovies = [...data];
  const container = document.querySelector('#table-container');
  const table = document.createElement('table');
  container.append(table);
  table.insertAdjacentHTML('afterbegin', ''
    + '<thead>'
    + '<tr>'
    + '<th data-click="id">id</th>'
    + '<th data-click="title">title</th>'
    + '<th data-click="year">year</th>'
    + '<th data-click="imdb">imdb</th></tr>'
    + '</thead><tbody></tbody>');

  const buttons = table.querySelectorAll('th[data-click]');
  // eslint-disable-next-line no-use-before-define
  buttons.forEach(el => el.addEventListener('click', () => clickTh(el)));

  function buildTable(rows) {
    table.querySelector('tbody').querySelectorAll('tr').forEach(tr => tr.remove());

    rows.forEach(el => {
      const imdb = (el.imdb).toFixed(2);
      table.querySelector('tbody').insertAdjacentHTML('beforeend', `
    <tr>
      <td>${el.id}</td>
      <td>${el.title}</td>
      <td>(${el.year})</td>
      <td>${imdb}</td>
    </tr>`);
    });
  }

  function clickTh(el) {
    if (el.classList.contains('active')) {
      buildTable(immutabelMovies);
      el.classList.remove('active');
    } else {
      if (table.querySelector('th.active')) {
        table.querySelector('th.active').classList.remove('active');
      }
      const sorted = movies.sort((a, b) => {
        if (a[el.dataset.click] < b[el.dataset.click]) { return -1; }
        if (a[el.dataset.click] > b[el.dataset.click]) { return 1; }
        return 0;
      });
      buildTable(sorted);
      el.classList.add('active');
    }
  }

  buildTable(movies);
})();
