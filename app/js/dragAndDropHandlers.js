import {dropArea} from "./domNodes";

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
    console.log(e.dataTransfer.files);
};
