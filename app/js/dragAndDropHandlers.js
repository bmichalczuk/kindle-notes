import {dropArea} from "./domNodes";
import readFile from "./readFile";
import {setText} from "./state";
import {eventGuard, markSuccesUpload} from "./helpers";
import displayFileName from "./displayFileName";

export const handleDragEnter = eventGuard((e) => {
    dropArea.classList.add("file-box--hover")
});

export const handleDragLeave = eventGuard((e) => {
    dropArea.classList.remove("file-box--hover");
});

export const handleDrop = eventGuard((e) => {
    const file = e.dataTransfer.files[0];
    markSuccesUpload();
    readFile(file, setText);
    displayFileName(file.name);
});
