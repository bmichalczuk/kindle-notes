import {extractEntries} from "./helpers";
import sortBooks from "./sortBooks";


const parseFile = (textContent) => {
    const entries = extractEntries(textContent);
    const books = sortBooks(entries);
    return books;
};

export default parseFile;