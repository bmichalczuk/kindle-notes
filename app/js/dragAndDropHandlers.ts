import {dropArea} from "./domNodes";
import readFile from "./readFile";
import {eventGuard, markSuccesUpload} from "./helpers";
import displayFileName from "./displayFileName";
import parseFile from "./parseFile";

export const handleDragEnter = eventGuard((e: DragEvent) => {
    dropArea.classList.add("file-box--hover")
});

export const handleDragLeave = eventGuard((e: DragEvent) => {
    dropArea.classList.remove("file-box--hover");
});

export const handleDrop = eventGuard((e: DragEvent) => {
    const file = e.dataTransfer.files[0];
    markSuccesUpload();
    readFile(file, parseFile);
    displayFileName(file.name);
});
