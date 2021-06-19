import {eventGuard, compose, getDownloadLinks} from "./helpers";
import {getEntries} from "./entries";
import displayResult from "./displayResult";
import getSelectedBooks from "./getSelectedBooks";


const filterSelectedBooks = books => {
    const selected = getSelectedBooks();
    console.log(selected);
    return books.filter(({title,author}) => selected.some(obj => obj.author === author && obj.title === title));
};

const btnGuard = fn => e => {
    if(e.target.classList.contains("button--download")) {
        return fn(e);
    };
};

const handleDownloadBtn = (e) => compose(getEntries, filterSelectedBooks, getDownloadLinks, displayResult)("");

export default btnGuard(eventGuard((handleDownloadBtn)));