import {selection} from "./domNodes";


const getSelectedBooks = () => Array.from(selection.querySelectorAll("input:checked")).map(({dataset: {title, author}}) => ({author, title}));

export default getSelectedBooks;