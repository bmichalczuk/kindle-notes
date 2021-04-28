import {dropArea} from "./domNodes";

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

