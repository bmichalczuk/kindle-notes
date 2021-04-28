import {handleDragEnter,handleDragLeave,handleDrop} from "./dragAndDropHandlers";
import {dropArea, fileInpt, removeBtn} from "./domNodes";
import handleFileInput from "./fileInputHandler";
import removeFile from "./removeFile";

dropArea.addEventListener("dragenter", handleDragEnter);

dropArea.addEventListener("dragleave", handleDragLeave);

dropArea.addEventListener("dragover", handleDragEnter);

dropArea.addEventListener("drop", handleDrop);

fileInpt.addEventListener("change", handleFileInput);

removeBtn.addEventListener("click", removeFile);

