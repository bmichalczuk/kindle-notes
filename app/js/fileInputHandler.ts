import readFile from "./readFile";
import {eventGuard, markSuccesUpload} from "./helpers";
import displayFileName from "./displayFileName";
import parseFile from "./parseFile";

const handleFileInput = (e: Event) => {
    const file = (e.target as HTMLInputElement).files[0]
    markSuccesUpload();
    readFile(file, parseFile);
    displayFileName(file.name);
};

export default eventGuard(handleFileInput);