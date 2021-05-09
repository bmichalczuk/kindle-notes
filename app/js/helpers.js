import {dropArea} from "./domNodes";
import {entryDivider, authorEndSing, authorStargSign} from "./consts";
import createDownloadLink from "./createDownloadLink";

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
    const titleEnd = entry.indexOf(authorStargSign);
    return entry.substring(0, titleEnd);
};

export const getAuthor = (bookTitle) => bookTitle.substring(bookTitle.indexOf(authorStargSign) + 1, bookTitle.indexOf(authorEndSing));

export const splitText = (divider) => (text) => text.split(divider);

export const extractEntries = splitText(entryDivider);

export const getDownloadLinks = (books) => books.map(book => createDownloadLink(book));

export const compose = (...fns) => (arg) => fns.reduce((acc, fn) => fn(acc), arg);

export const clearDomNode = (node) => [...node.children].forEach(el => el.remove());


