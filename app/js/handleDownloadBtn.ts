import {eventGuard, compose, getDownloadLinks} from "./helpers";
import {getEntries} from "./entries";
import displayResult from "./displayResult";
import getSelectedBooks from "./getSelectedBooks";
import { Book } from "./types";
import { downloadBtnClass } from "./consts";


const filterSelectedBooks = (books: Book[]) => {
    const selected = getSelectedBooks();
    return books.filter(({title,author}) => selected.some(obj => obj.author === author && obj.title === title));
};

const btnGuard = (fn: Function) => (e:{target: HTMLElement}) => {
    if(e.target.classList.contains(downloadBtnClass)) {
        return fn(e);
    };
};

const handleDownloadBtn = (e: {target: HTMLButtonElement}) => {
    if(e.target.classList.contains(downloadBtnClass)) {
        return compose(getEntries, filterSelectedBooks, getDownloadLinks, displayResult)("");
    };
};

export default eventGuard((handleDownloadBtn));