import {dropArea} from "./domNodes";
import {titleDivider, entryDivider, authorEndSing, authorStargSign} from "./consts";

export const eventGuard = func => e => {
    e.preventDefault();
    e.stopPropagation();
    return func(e);
};

export const markSuccesUpload = () => {
    dropArea.classList.contains("file-box--hover") && dropArea.classList.remove("file-box--hover");
    !dropArea.classList.contains("file-box--succes") && dropArea.classList.add("file-box--succes");
};

export const removeSuccesUpload = () => {
    dropArea.classList.remove("file-box--succes");
};

export const getBookTitle = (entry) => {
    const titleEnd = entry.indexOf(authorStargSign);
    return entry.substring(0, titleEnd);
};

export const getAuthor = (bookTitle) => bookTitle.substring(bookTitle.indexOf(authorStargSign) + 1, bookTitle.indexOf(authorEndSing));

export const splitText = (divider) => (text) => text.split(divider);


