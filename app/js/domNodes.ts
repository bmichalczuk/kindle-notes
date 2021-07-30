import {
    dropAreaClass,
    fileInptClass, 
    fileNameClass, 
    removeBtnClass, 
    parseBtnClass, 
    resultNodeClass, 
    optionsNodeClass, 
    selectionNodeClass,
    downloadBtnClass, 
    contentNodeClass
} from "./consts"

export const dropArea = document.querySelector(`.${dropAreaClass}`);
export const fileInpt = document.querySelector(`.${fileInptClass}`);
export const fileName = document.querySelector(`.${fileNameClass}`);
export const removeBtn = document.querySelector(`.${removeBtnClass}`);
export const parseBtn = document.querySelector(`.${parseBtnClass}`);
export const result = document.querySelector(`.${resultNodeClass}`);
export const options = document.querySelector(`.${optionsNodeClass}`);
export const selection = document.querySelector(`.${selectionNodeClass}`);
export const downloadBtn = document.querySelector(`.${downloadBtnClass}`);
export const main = document.querySelector(`.${contentNodeClass}`);

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

