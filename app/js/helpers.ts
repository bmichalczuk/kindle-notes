import {dropArea, getDomNode} from "./domNodes";
import {entryDivider, authorEndSign, authorStartSign} from "./consts";
import createDownloadLink from "./createDownloadLink";
import createSelectionItem from "./createSelectionItem";
import {Book} from "./types";

export const eventGuard = (func: Function) => (e: Event) : Function => {
    e.preventDefault();
    e.stopPropagation();
    return func(e);
};

export const markSuccesUpload = () => {
    dropArea.classList.contains("file-box--hover") && dropArea.classList.remove("file-box--hover");
    !dropArea.classList.contains("file-box--succes") && dropArea.classList.add("file-box--succes");
};

export const removeSuccesUpload = () => dropArea.classList.remove("file-box--succes");

export const getBookTitle = (entry: string) => {
    const titleEnd = entry.indexOf(authorStartSign);
    return entry.substring(0, titleEnd);
};

export const getAuthor = (bookTitle: string) => bookTitle.substring(bookTitle.indexOf(authorStartSign) + 1, bookTitle.indexOf(authorEndSign));

export const splitText = (divider: string) => (text: string) => text.split(divider);

export const extractEntries = splitText(entryDivider);

export const getDownloadLinks = (books: Array<Book>) => books.map((book: Book) => createDownloadLink(book));//zrpboc hoc

export const getSelectionItems = (books: Array<Book>) => books.map((book: Book) => createSelectionItem(book));//wyzej

export const compose = (...fns: Array<Function>) => (arg: any) => fns.reduce((acc, fn) => fn(acc), arg);

export const removeDomElement = (el: Element) => el.remove();

export const clearDomNode = (node: Element) => Array.from(node.children).forEach(el => removeDomElement(el));

export const withClearDomNodeBefore = (node: Element) => (fn: Function) => (...args: any) => {
    if(node.hasChildNodes()) {
        clearDomNode(node);
    }
    fn(...args);
};

export const renderList = (target: Element) => (list: NodeListOf<Element> | Array<Element>) => {
    const frag = document.createDocumentFragment();
    list.forEach(item => frag.appendChild(item));
    target.appendChild(frag);
}

export const createDomElement = ({element, attributes, textContent}: {element: string, attributes?: Object | any/*?*/, textContent?: string}) => {

    const el = document.createElement(element);

    for (let attribute in attributes) {
        el.setAttribute(attribute, attributes[attribute]);
    }
    if (textContent) {
        el.textContent = textContent;
    }
    
    return el;
}


