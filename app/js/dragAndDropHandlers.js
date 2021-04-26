import {dropArea} from "./domNodes";
import readFile from "./readFile";
import {setText} from "./state";
import {eventGuard, markSuccesUpload} from "./helpers";

export const handleDragEnter = eventGuard((e) => {
    dropArea.classList.add("file-box--hover")
});

export const handleDragLeave = eventGuard((e) => {
    dropArea.classList.remove("file-box--hover");
});

export const handleDrop = eventGuard((e) => {
    markSuccesUpload();
    readFile(e.dataTransfer.files[0], setText);
});
