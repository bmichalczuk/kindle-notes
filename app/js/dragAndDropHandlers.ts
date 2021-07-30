import {dropArea} from "./domNodes";
import readFile from "./readFile";
import {eventGuard, markSuccesUpload} from "./helpers";
import displayFileName from "./displayFileName";
import parseFile from "./parseFile";
import { fileBoxHoverClass } from "./consts";

export const handleDragEnter = eventGuard((e: DragEvent) => {
    dropArea.classList.add(fileBoxHoverClass)
});

export const handleDragLeave = eventGuard((e: DragEvent) => {
    dropArea.classList.remove(fileBoxHoverClass);
});

export const handleDrop = eventGuard((e: DragEvent) => {
    const file = e.dataTransfer.files[0];
    markSuccesUpload();
    readFile(file, parseFile);
    displayFileName(file.name);
});
