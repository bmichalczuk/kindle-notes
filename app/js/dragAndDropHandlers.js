import {dropArea} from "./domNodes";
import readFile from "./readFile";
import {setText} from "./state";

export const handleDragEnter = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dropArea.classList.add("file-box--hover")
};

export const handleDragLeave = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dropArea.classList.remove("file-box--hover");
};

export const handleDrop = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dropArea.classList.add("file-box--succes");
    dropArea.classList.remove("file-box--hover");
    readFile(e.dataTransfer.files[0], setText);
};
