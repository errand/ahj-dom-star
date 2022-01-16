import data from '../data.json';

(() => {
  const movies = data;
  const container = document.querySelector('#table-container');
  const table = document.createElement('table');
  container.append(table);

  table.insertAdjacentHTML('afterbegin', ''
    + '<tr>'
    + '<th data-click="id">id</th>'
    + '<th data-click="title">title</th>'
    + '<th data-click="year">year</th>'
    + '<th data-click="imdb">imdb</th></tr>');

  const buttons = table.querySelectorAll('th[data-click]');

  movies.forEach(el => {
    const imdb = (el.imdb).toFixed(2);
    table.insertAdjacentHTML('beforeend', `
    <tr data-id="${el.id}" data-title="${el.title}" data-year="${el.year}" data-imdb="${imdb}">
      <td>${el.id}</td>
      <td>${el.title}</td>
      <td>(${el.year})</td>
      <td>${imdb}</td>
    </tr>`);
  });

  buttons.forEach(el => el.addEventListener('click', () => {
    const rows = [...table.querySelectorAll('tr')];
    rows.sort((a, b) => {
      if (a.dataset.click < b.dataset.click) { return -1; }
      if (a.dataset.click > b.dataset.click) { return 1; }
      return 0;
    });
    rows.forEach(tr => {
      table.insertAdjacentElement('beforeend', tr);
    });
  }));
})();
