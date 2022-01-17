import data from '../data.json';

(() => {
  const movies = [...data];
  const container = document.querySelector('#table-container');
  const table = document.createElement('table');
  container.append(table);

  function buildTable(rows) {
    table.querySelectorAll('tr').forEach(tr => tr.remove());

    table.insertAdjacentHTML('afterbegin', ''
      + '<tr>'
      + '<th data-click="id">id</th>'
      + '<th data-click="title">title</th>'
      + '<th data-click="year">year</th>'
      + '<th data-click="imdb">imdb</th></tr>');

    const buttons = table.querySelectorAll('th[data-click]');
    buttons.forEach(el => el.addEventListener('click', () => clickTh(el.dataset.click)));

    rows.forEach(el => {
      const imdb = (el.imdb).toFixed(2);
      table.insertAdjacentHTML('beforeend', `
    <tr data-id="${el.id}" data-title="${el.title}" data-year="${el.year}" data-imdb="${imdb}">
      <td>${el.id}</td>
      <td>${el.title}</td>
      <td>(${el.year})</td>
      <td>${imdb}</td>
    </tr>`);
    });
  }

  function clickTh(click) {
    const sorted = movies.sort((a, b) => {
      if (a.click < b.click) { return -1; }
      if (a.click > b.click) { return 1; }
      return 0;
    });
    buildTable(sorted);
  }

  function clickTh(key) {
    const sorted = movies.sort((a, b) => {
      if (a[key] < b[key]) { return -1; }
      if (a[key] > b[key]) { return 1; }
      return 0;
    });
    buildTable(sorted);
  }

  buildTable(movies);
})();
