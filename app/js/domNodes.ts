export const dropArea = document.querySelector(".file-box");
export const fileInpt = document.querySelector(".file-box__input");
export const fileName = document.querySelector(".file-box__name");
export const removeBtn = document.querySelector(".file-box__remove");
export const parseBtn = document.querySelector(".button--parse");
export const result = document.querySelector(".result");
export const options = document.querySelector(".options");
export const selection = document.querySelector(".selection");
export const downloadBtn = document.querySelector(".button--download");
export const main = document.querySelector(".content");

export const getDomNode = (name: string) => {

    if(!document.querySelector(name)) {
        throw new Error("There is no such dom element");
    }

    return document.querySelector(name);
};

export const getDomNodes = (name: string) => {

    if(!document.querySelector(name)) {
        throw new Error("There is no such dom element");
    }

    return document.querySelectorAll(name);

};

