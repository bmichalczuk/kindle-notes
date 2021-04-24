import readFile from "./readFile";
import {setText} from "./state";

const handleFileInput = (e) => {
    e.preventDefault();
    e.stopPropagation();
    readFile(e.target.files[0], setText);
}

export default handleFileInput;