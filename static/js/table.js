

(() => {

  /*
   * @function
   * @name tableMobile
   * @param {HTMLElement} node
   * @description Convert table to mobile friendly format
   *
   * */
  const tableMobile = (node) => {
    const listLabel = node.querySelectorAll('tbody tr:nth-child(1) td');
    const content = node.querySelectorAll('tbody tr:nth-child(2) td');
    let labels = []

    listLabel.forEach((i) => {
      labels.push(i.innerText)
    });

    content.forEach((i, idx) => {
      i.setAttribute('data-label', labels[idx]);
    });

    return;
  };


  const table = document.querySelectorAll('.reading-zone table');

  table.forEach((i) => {
    tableMobile(i);
  });
})();

