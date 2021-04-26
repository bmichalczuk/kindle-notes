import {dropArea} from "./domNodes";
import readFile from "./readFile";
import {setText} from "./state";
import {eventGuard} from "./helpers";

export const handleDragEnter = eventGuard((e) => {
    dropArea.classList.add("file-box--hover")
});

export const handleDragLeave = eventGuard((e) => {
    dropArea.classList.remove("file-box--hover");
});

export const handleDrop = eventGuard((e) => {
    dropArea.classList.add("file-box--succes");
    dropArea.classList.remove("file-box--hover");
    readFile(e.dataTransfer.files[0], setText);
});
