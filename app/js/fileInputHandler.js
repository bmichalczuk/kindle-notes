import readFile from "./readFile";
import {setText} from "./state";
import {eventGuard, markSuccesUpload} from "./helpers";
import displayFileName from "./displayFileName";


const handleFileInput = (e) => {
    const file = e.target.files[0]
    markSuccesUpload();
    readFile(file, setText);
    displayFileName(file.name);
};

export default eventGuard(handleFileInput);