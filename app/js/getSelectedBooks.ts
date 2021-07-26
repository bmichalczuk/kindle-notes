import { getDomNode } from "./domNodes";
import { selectionNodeClass } from "./consts";

const getSelectedBooks = () => Array.from(getDomNode(`.${selectionNodeClass}`).querySelectorAll("input:checked"))
    .map(({dataset: {title, author}}: any) => ({author, title}));

export default getSelectedBooks;