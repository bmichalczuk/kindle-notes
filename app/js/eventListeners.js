import {handleDragEnter,handleDragLeave,handleDrop} from "./dragAndDropHandlers";
import {dropArea, fileInpt} from "./domNodes";
import handleFileInput from "./fileInputHandler";

dropArea.addEventListener("dragenter", handleDragEnter);

dropArea.addEventListener("dragleave", handleDragLeave);

dropArea.addEventListener("dragover", handleDragEnter);

dropArea.addEventListener("drop", handleDrop);

fileInpt.addEventListener("change", handleFileInput);

