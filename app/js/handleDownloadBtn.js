import {eventGuard, compose, getDownloadLinks, getSelectionItems} from "./helpers";
import {getEntries} from "./entries";
import displayResult from "./displayResult";
import getSelectedBooks from "./getSelectedBooks";


const filterSelectedBooks = books => {
    const selected = getSelectedBooks();
    return books.filter(({title,author}) => selected.some(obj => obj.author === author && obj.title === title));
};

const handleDownloadBtn = (e) => compose(getEntries, filterSelectedBooks, getDownloadLinks, displayResult)("");

export default eventGuard(handleDownloadBtn);