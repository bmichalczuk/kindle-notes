import readFile from "./readFile";
import {setText} from "./state";
import {eventGuard, markSuccesUpload} from "./helpers";


const handleFileInput = (e) => {
    markSuccesUpload();
    readFile(e.target.files[0], setText);
};

export default eventGuard(handleFileInput);