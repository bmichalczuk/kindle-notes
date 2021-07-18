const getSelectedBooks = () => Array.from(document.querySelector(".selection").querySelectorAll("input:checked")).map(({dataset: {title, author}}: HTMLElement) => ({author, title}));

export default getSelectedBooks;