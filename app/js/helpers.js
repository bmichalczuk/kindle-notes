import {dropArea} from "./domNodes";
import {entryDivider, authorEndSign, authorStartSign} from "./consts";
import createDownloadLink from "./createDownloadLink";
import createSelectionItem from "./createSelectionItem";

export const eventGuard = func => e => {
    e.preventDefault();
    e.stopPropagation();
    return func(e);
};

export const markSuccesUpload = () => {
    dropArea.classList.contains("file-box--hover") && dropArea.classList.remove("file-box--hover");
    !dropArea.classList.contains("file-box--succes") && dropArea.classList.add("file-box--succes");
};

export const removeSuccesUpload = () => dropArea.classList.remove("file-box--succes");


export const getBookTitle = (entry) => {
    const titleEnd = entry.indexOf(authorStartSign);
    return entry.substring(0, titleEnd);
};

export const getAuthor = (bookTitle) => bookTitle.substring(bookTitle.indexOf(authorStartSign) + 1, bookTitle.indexOf(authorEndSign));

export const splitText = (divider) => (text) => text.split(divider);

export const extractEntries = splitText(entryDivider);

export const getDownloadLinks = (books) => books.map(book => createDownloadLink(book));

export const getSelectionItems = books => books.map(book => createSelectionItem);

export const compose = (...fns) => (arg) => fns.reduce((acc, fn) => fn(acc), arg);

export const clearDomNode = (node) => [...node.children].forEach(el => el.remove());

export const createDomElement = ({element, attributes, textContent}) => {

    const el = document.createElement(element);

    for (let attribute in attributes) {
        el.setAttribute(attribute, attributes[attribute]);
    }
    if (textContent) {
        el.textContent = textContent;
    }
    
    return el;
}


